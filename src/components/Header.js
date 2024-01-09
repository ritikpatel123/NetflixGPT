import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../Firebase"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      
    }).catch(()=>{
      navigate('/error')
    })
  }

  useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
    
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email,
          displayName,
          photoURL,
        }))
        navigate('/Browse')

      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
     return ()=> unsubscribe();
       },[]) 
    
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between align-middle ">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      { user &&
      <div className="flex p-2">
        <img
          className="w-12 h-12"
          src={user?.photoURL}
          alt="usericon"
        />
        <button onClick={handleSignOut} className=" font-bold text-xl text-white p-2">LogOut</button>
      </div>
}
    </div>
  );
};

export default Header;
