// import firebase from 'firebase'
import { firebaseConfig } from "./fireConfig"

export default async function Fire() {
  const firebase = await import('firebase')
  
  try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database()
}