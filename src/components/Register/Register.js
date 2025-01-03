import React, { useEffect, useRef, useState } from 'react'
import classes from './Register.module.scss'
import { emailvalidator, passwordlvalidator } from '../../utils/services/validator'
import { useNavigate } from 'react-router-dom'
import { adduser,signInUser,updateUserProfile } from '../../utils/services/firebaseService'
import { auth } from '../../utils/services/firebaseConfig'
import Header from '../Header/Header'

const Register = () => {
  const [isSignIn,setsignIn] = useState(true)
  const [err, setError] = useState('')
  const nameref = useRef(null)
  const emailRef = useRef(null)
  const passwordref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    let user = auth.currentUser
    console.log(user)
  },[])

  function handledSignIntoggle(){
    setsignIn(!isSignIn)
  }

  function updatedUserProfile(name){
    updateUserProfile({ displayName: name }).then(() => {
      console.log('User profile updated')
    }).catch((error) => {
      console.log('User profile updated Error')
    });
  }

  function handledSignIn(event){
    event.preventDefault();
    if(!emailvalidator(emailRef?.current?.value)){
      setError('Please enter a valid email address')
      return
    }
    if(!passwordlvalidator(passwordref?.current?.value)){
      setError('Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one number.')
      return
    }
    setError('')
    if(!isSignIn){
      adduser(emailRef?.current?.value, passwordref?.current?.value).then((userCredential) => {
        updatedUserProfile(nameref?.current?.value)
        setsignIn(true)
      })
      .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
    }else{
      signInUser(emailRef?.current?.value, passwordref?.current?.value).then((userCredential) => {
        const user = userCredential.user;
        navigate('/home');
      })
      .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
    }
  }

  return (
      <div className={classes?.registerComponent}>
      <Header />
      <div className={`flex item-center justify-center ${classes?.body}`}>
        <div className={`flex items-center justify-center rounded-lg text-white ${classes?.formContainer}`}>
          <div className="w-full max-w-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">{isSignIn ?'Sign In':'Sign Up'}</h1>
            <form>
              {/* Name Field */}
              {!isSignIn ? <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  ref={nameref}
                  placeholder="Enter your name"
                  className="min-w-[20rem] w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>:null}
              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  placeholder="Enter your email"
                  className="min-w-[20rem] w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold mb-2 text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  ref={passwordref}
                  placeholder="Enter your password"
                  className="min-w-[20rem] w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {err ? <div className='text-red-800'>{err}</div>:null}

              {/* Sign-In Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded focus:outline-none"
              onClick={handledSignIn}
              >
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            {/* Additional Links */}

            {/* Footer */}
            <div className="text-center mt-8">
              <div className="text-gray-400 text-sm">
                New to Netflix?{" "}
                <div onClick={handledSignIntoggle} href="#" className="text-white hover:underline">
                  Sign up now
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Register