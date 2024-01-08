import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value, " login.js");
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName:name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocJruqbJK63sML_z4V65PNzkzGT_mXqYKo2SRij4gxkxEM2l=s576-c-no"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({
              uid:uid,
              email,
              displayName,
              photoURL,
            }))
            navigate('/Browse')
            
          }).catch((error) => {
            setErrorMessage(error);
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          
          navigate('/Browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
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
        onSubmit={(e) => e.preventDefault()}
        action=""
        className=" w-3/12 absolute p-12 rounded-lg  bg-black  bg-opacity-80 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4  ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-[#333333]"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-[#333333]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4  my-4 w-full bg-[#333333]"
        />
        <p className=" text-red-600 font-bold py-4 "> {errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg  "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix? Signup now"
            : "Already Registered? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
