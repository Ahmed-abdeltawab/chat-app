import React from 'react'
import Navbar from './components/Navbar'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Chat } from './components/Chat'
const style = {
  appContainer: `max-w-[728px] mx-auto  text-center`,
  sectionContainer: `flex flex-col  bg-gray-100 mt-10 shadow-xl border relative`
}

export default function App () {
  const [user] = useAuthState(auth)
  return (
    <div className={style.appContainer}>
      <div className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat /> : null}
      </div>
    </div>
  )
}
