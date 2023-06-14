import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
const SignIn = () => {
  const googleSigIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }
  return (
    <div>
      <GoogleButton onClick={googleSigIn} />
    </div>
  )
}

export default SignIn
