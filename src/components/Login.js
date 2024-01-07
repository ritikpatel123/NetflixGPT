import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="baground"
        />
      </div>
      <form
        action=""
        className=" w-3/12 absolute p-12 rounded-lg  bg-black  bg-opacity-80 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4  ">{isSignInForm?"Sign In":"Sign Up"}</h1>
        { !isSignInForm&&
            <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-[#333333]"
          />
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-[#333333]"
        />
        <input
          type="password"
          placeholder="Password "
          className="p-4  my-4 w-full bg-[#333333]"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg  ">
        {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
        {isSignInForm?"New to Netflix? Signup now":"Already Registered? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
