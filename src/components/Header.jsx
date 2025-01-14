import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign-out error:", error);

        navigate("/error");
      });
  };

  return (
    <div className="flex absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 justify-between items-center">
      {/* Logo */}
      <img
        className="max-w-[12rem] w-full h-auto object-contain"
        src="src/utils/header-logo.png"
        alt="logo"
      />

      {user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-full h-full rounded-full cursor-pointer"
            src="https://img.icons8.com/isometric/50/user.png"
            alt="user"
          />

          <button
            onClick={handleSignOut}
            className="text-white text-sm hover:text-gray-300 font-medium transition duration-300 ease-in-out whitespace-nowrap"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
