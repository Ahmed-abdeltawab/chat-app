import React from 'react'
import { auth } from '../firebase'
const style = {
  btn: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}
const LogOut = () => {
  return (
    <button onClick={() => auth.signOut()} className={style.btn}>
      LogOut
    </button>
  )
}

export default LogOut
