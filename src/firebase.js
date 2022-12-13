import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAz0qSalFFE6w1FTsy4f4xNVUr3-ydKm9g",
  authDomain: "dropbox-react.firebaseapp.com",
  projectId: "dropbox-react",
  storageBucket: "dropbox-react.appspot.com",
  messagingSenderId: "433932453932",
  appId: "1:433932453932:web:a779883bc0b2030a8e2989",
  measurementId: "G-ZBXKN2G79T"
})

const firestore = app.firestore()


export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
