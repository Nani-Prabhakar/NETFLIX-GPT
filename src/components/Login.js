import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(false);
  const signUpFomHandler=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
        alt="background"></img>
      </div>
      <form className=' text-white w-3/12  p-12 bg-black mx-auto  my-36  absolute left-0 right-0 bg-opacity-80'>
        <h1 className='font-bold text-white text-3xl py-4 w-full'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input 
          type="text" 
          placeholder='Full Name' 
          className=' bg-gray-700 my-4 p-4 w-full  rounded-lg'>
        </input>}
        <input 
          type="text" 
          placeholder='Email' 
          className=' bg-gray-700 my-4 p-4 w-full  rounded-lg'>
        </input>
        <input 
          type="password" 
          placeholder='password' 
          className=' bg-gray-700 my-4 p-4 w-full  rounded-lg'>
        </input>
        {!isSignInForm &&<input 
          type="password" 
          placeholder='re-enter password' 
          className=' bg-gray-700 my-4 p-4 w-full  rounded-lg'>
        </input>}
        <button 
          className='my-6 p-4 
         bg-red-700 w-full rounded-lg cursor-pointer'>
          {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className='p-2 m-2 cursor-pointer' onClick={signUpFomHandler}> 
          {isSignInForm?"New to NetFlix? Sign Up Now":"Already Register? Sign In Now"}
        </p>
      </form>
    </div>
    
  )
}

export default Login