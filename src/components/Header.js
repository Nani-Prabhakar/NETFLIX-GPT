import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser())
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-30 flex justify-between '>
      <img className='w-56 '
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'></img>
      <button  onClick={handleSignOut} className='text-white font-bold text-xl '>Sign Out</button>
    </div>
  )
}

export default Header