import React from 'react'
import {auth,provider} from '../Firebase-config'
export default function Login() {
  return (
    <div>
      <p>Sign in With Google </p>
      <button className='login-with-google-btn'>
      Sign in With Google
      </button>
    </div>
  )
}
