// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDVOCnPBkvC6KYYGbYBV-F5t4kfWQk-iJA',
  authDomain: 'chat-app-fb-909d6.firebaseapp.com',
  projectId: 'chat-app-fb-909d6',
  storageBucket: 'chat-app-fb-909d6.appspot.com',
  messagingSenderId: '410472873143',
  appId: '1:410472873143:web:73c3dd7d02d7f25caf6132'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
