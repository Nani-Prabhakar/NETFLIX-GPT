import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateFormData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null); // for re-enter password

  const signUpFormHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validateForm = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const confirmPasswordValue = confirmPassword.current ? confirmPassword.current.value : null;

    const message = validateFormData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      if (passwordValue !== confirmPasswordValue) {
        setErrorMessage('Passwords do not match.');
        return;
      }

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Signed up user:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error: ${errorMessage} (Code: ${errorCode})`);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Signed in user:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error: ${errorMessage} (Code: ${errorCode})`);
        });
    }
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
            ref={confirmPassword}
            type='password'
            placeholder='Re-enter Password'
            className='bg-gray-700 my-4 p-4 w-full rounded-lg'
          />
        )}
        <p className='p-2 text-red-500 text-lg font-bold'>
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
