import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import {  addUser, removeUser } from "../utils/userSlice";
import { AVATAR_RED, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/confiSlice";
import { PAGE } from "../router/routes";
import { setAuthenticated } from "../utils/AuthSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const [isLargeScreen,setIsLargeScreen]=useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate(PAGE.HOME)
    }).catch((error) => {
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL, phoneNumber } = user;
        dispatch(addUser({
          uid: uid,
          displayName: displayName,
          photoURL: photoURL,
          email: email,
          phoneNumber: phoneNumber
        }));
        // console.log('signed in')
        dispatch(setAuthenticated(true))
      } else {
        // console.log('signed out')
        dispatch(setAuthenticated(false))
        dispatch(removeUser())
      }
    });

    // Unsubscribe when component unmounted
    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >900 );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlerDropDown = () => {
    setIsOpen(!isOpen)
  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className="fixed z-50  text-white  bg-black  opacity-70 md:opacity-100 w-screen px-8  bg-gradient-to-b from-black md:flex">
      
      <div className=" flex align-middle">
      <img className="w-24 h-12  md:w-38 h-14 m-3    " src={LOGO} alt="logo" /> 
      </div>

     
      {user && (
        
        <div className=" flex  w-[100%] justify-between align-middle">
          <div className="flex " style={{transition: "all 0.5s ease 0s", transform: "translateY(0px)"}}>
            <Link className=" align-middle" > <h2 className=" m-2  pl-4 md:py-3 md:pl-16  mt-5 ml-10  text-sm" >Home</h2></Link>
           <Link to={'/tv-shows'}className=" align-middle" > <h2 className=" m-2  md:py-3 pl-3 mt-5 text-sm" >Tv Show</h2></Link>
          <Link to={'/movies'} className=" align-middle" > <h2 className=" m-2 md:py-3 pl-3 mt-5 text-sm" >Movies</h2></Link>
           <Link to={'/new-and-popular'}className=" align-middle" > <h2 className=" m-2 md:py-3 pl-3 mt-5 text-sm" >New & Popular </h2></Link>
           </div>
            <div className="flex">
           <select className="my-2 p-2 bg-transparent text-sm text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
          <Link to={'/search'}>
          <button className="py-8 px-4  bg-purple-1000 text-sm text-white rounded-md "
           >
           {isLargeScreen?"Search GPT":"Search"}
          </button>
          </Link>
          <div className="profile-dropdown relative mt-6" ref={dropdownRef}>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handlerDropDown}>
                <div className="thumb aspect-square w-8 h-8 bg-gray-800">
                  <img src={`${AVATAR_RED}`} alt={user.displayName} />
                </div>
                <div className="text-sm hidden lg:block">{user.displayName}</div>
              </div>
              {isOpen &&
                <div className="bg-black/95 absolute z-50 right-0 top-10 min-w-[170px] pt-2 border border-gray-900 rounded-md">
                  <a href='#!' className='flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white'>
                    <div className="w-5 h-5 bg-cyan-500"></div>
                    <div className='title'>Neeraj</div>
                  </a>
                  <a href='#!' className='flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white'>
                    <div className="w-5 h-5 bg-green-500"></div>
                    <div className='title'>Child</div>
                  </a>
                  <Link to={PAGE.PROFILE} className='flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white'>
                    <div className="w-5 h-5 bg-gray-700"></div>
                    <div className='title'>Manage Profile</div>
                  </Link>
                  <div className="px-2 gap-3 text-xs text-slate-300 flex justify-center items-center border-t border-gray-700 mt-4 hover:text-white">
                    <button className='p-3' onClick={handleSignOut} > Sign Out</button>
                  </div>
                </div>
              }
            </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Header;
