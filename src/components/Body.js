import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Body = () => {

  const dispatch=useDispatch();
   const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    },
   ]);
   useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {

    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({
      uid:uid,
      email,
      displayName,
      photoURL,
    }))
    
  } else {
    dispatch(removeUser());
  }
});
   },[]) 

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body