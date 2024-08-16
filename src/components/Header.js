import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser,addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { gptToggleSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import {changeLanguage} from '../utils/configSlice'
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  //const search=useSelector(store=>store.gpt.t)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser())
      
    }).catch((error) => {
      // An error happened.
    });
    
  }
  useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUser(
          { 
            uid:uid, 
            email:email, 
            displayName:displayName,
            photoURL:photoURL 
          }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
        
      }
    });
    return ()=>unsubscribe();
 
  }, []);
  const handleGPTSearch=()=>{
    dispatch(gptToggleSearchView())

  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))

  }
  
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-30 flex  justify-between'>
      <img className='w-56 '
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'></img>
     <div>
    <select className='bg-gray-900 p-2 m-2 text-white' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.name}>{lang.name}</option>)}
    </select >
     <button onClick={handleGPTSearch} className=' bg-green-500 p-3  mr-4 px-12 text-white text-lg rounded-lg hover:bg-opacity-80' >GPT Search</button>
     <button  onClick={handleSignOut} className=' bg-red-700 p-3  mr-4 px-12 text-white text-lg rounded-lg hover:bg-opacity-80'>Sign Out</button>
     </div>
      
    </div>
  )
}

export default Header