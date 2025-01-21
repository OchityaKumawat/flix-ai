import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";

const errorMessages = {
  "auth/invalid-email": "The email address is not valid.",
  "auth/user-disabled":
    "This account has been disabled. Please contact support.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/email-already-in-use":
    "This email is already registered. Please sign in.",
  "auth/weak-password":
    "The password is too weak. It should be at least 8 characters long.",
  "auth/invalid-credential": "Invalid email or password.",
};

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleAuth = async (authMethod) => {
    try {
      const userCredential = await authMethod(
        auth,
        email.current.value,
        password.current.value
      );
      // console.log(
      //   `${isSignInForm ? "Sign-in" : "Sign-up"} successful!`,
      //   userCredential.user
      // );
    } catch (error) {
      const friendlyMessage =
        errorMessages[error.code] ||
        "An unknown error occurred. Please try again.";
      setErrorMessage(friendlyMessage);

      if (process.env.NODE_ENV === "development") {
        console.error(`${isSignInForm ? "Sign-in" : "Sign-up"} error:`, error);
      }
    }
  };

  const handleButtonClick = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const validation = validateFormData(
      fullName.current ? fullName.current.value.trim() : "",
      email.current.value,
      password.current.value,
      isSignInForm
    );

    if (!validation.valid) {
      setErrorMessage(validation.message);
      setIsSubmitting(false);
      return;
    }

    setErrorMessage("");

    const authMethod = isSignInForm
      ? signInWithEmailAndPassword
      : createUserWithEmailAndPassword;
    await handleAuth(authMethod);

    setIsSubmitting(false);
  };

  return (
    <div className="text-white">
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 h-fit absolute p-12 my-36 mx-auto bg-black bg-opacity-80 left-0 right-0 rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          className="p-4 my-4 w-full bg-red-600 font-bold rounded-lg hover:bg-red-700 transition duration-300"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm my-2">{errorMessage}</p>
        )}
        <p
          className="text-gray-400 text-sm mt-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Flix-AI? Sign Up Now!"
            : "Already a user? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
