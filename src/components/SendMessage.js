import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { auth, db } from '../firebase'
const style = {
  form: `flex w-full  bottom-0 h-14 max-w-[728px] text-lg`,
  input: `w-full text-lg text-white p-3 bg-gray-900 outline-none border-none`,
  btn: `bg-green-500 w-[20%]`
}

export const SendMessage = () => {
  const [input, setInput] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    if (input.trim() === '') {
      alert('Please enter a valid Message')
      return
    }
    const { uid, displayName } = auth.currentUser
    console.log(auth.currentUser)
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    })
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        onChange={e => setInput(e.target.value)}
        value={input}
        type='text'
        placeholder='Write Message...'
        className={style.input}
      />
      <button className={style.btn} type='submit'>
        Send
      </button>
    </form>
  )
}
