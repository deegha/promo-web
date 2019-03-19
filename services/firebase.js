// import firebase from 'firebase'
import { firebaseConfig } from "./fireConfig"

// const Fire = firebase.initializeApp(firebaseConfig)

// export const facebookProvider = new firebase.auth.FacebookAuthProvider() 
// export const LogOut = ()  => Fire.auth().signOut()
// export default Fire 

export default async function Fire() {
  const firebase = await import('firebase')

  
  try {
    return firebase.initializeApp(firebaseConfig)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
}