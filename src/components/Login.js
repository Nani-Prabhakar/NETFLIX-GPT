import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateFormData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const signUpFormHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validateForm = (e) => {
    e.preventDefault();
    //console.log(email.current.value)
    const message = validateFormData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
          alt='background'
        />
      </div>
      <form
        onSubmit={validateForm}
        className='text-white w-3/12 p-12 bg-black mx-auto my-36 absolute left-0 right-0 bg-opacity-80'
      >
        <h1 className='font-bold text-white text-3xl py-4 w-full'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='bg-gray-700 my-4 p-4 w-full rounded-lg'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email'
          className='bg-gray-700 my-4 p-4 w-full rounded-lg'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='bg-gray-700 my-4 p-4 w-full rounded-lg'
        />
        {!isSignInForm && (
          <input
            type='password'
            placeholder='Re-enter Password'
            className='bg-gray-700 my-4 p-4 w-full rounded-lg'
          />
        )}
        <p className='p-2  text-red-500 text-lg font-bold'>
          {errorMessage}
        </p>
        <button
          type='submit'
          className='my-6 p-4 bg-red-700 w-full rounded-lg cursor-pointer'
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='p-2 m-2 cursor-pointer' onClick={signUpFormHandler}>
          {isSignInForm ? 'New to NetFlix? Sign Up Now' : 'Already Registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
