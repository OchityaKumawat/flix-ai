import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
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
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src="https://img.icons8.com/isometric/50/user.png"
            alt="user"
          />

          <button
            onClick={handleSignOut}
            className="text-white text-sm hover:text-gray-300 font-medium transition duration-300 ease-in-out"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
