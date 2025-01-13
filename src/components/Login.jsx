import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="text-white">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 h-fit absolute p-12 my-36 mx-auto bg-black bg-opacity-80 left-0 right-0 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-700 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg"
        />
        <button className="p-4 my-4 w-full bg-red-600 font-bold rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Flix-AI? Sign Up Now!"
            : "Aldready a user? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
