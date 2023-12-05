import React from 'react'
import {auth,provider} from '../Firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export default function Login({setIsAuth}) {
  let navigate = useNavigate();
  const signInWithGoogle =()=>{
    signInWithPopup(auth,provider).then((result)=>{
      setIsAuth(true)
      localStorage.setItem("isAuth",true)
      // console.log(result.user.displayName)
      // console.log(result.user.email)
      // console.log(result.user.photoURL)
      navigate("/")
    })
    

  }
  
  return (
    <div className='loginPage'>
      <p>Sign in With Google </p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>
      Sign in With Google
      </button>
    </div>
  )
}
