import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZkMsHdHS3jjyURrerWE4SiFaacdA5pUI",
  authDomain: "lms-smkn4.firebaseapp.com",
  projectId: "lms-smkn4",
  storageBucket: "lms-smkn4.appspot.com",
  messagingSenderId: "958902214373",
  appId: "1:958902214373:web:babda3afa7f35606497e0c",
  measurementId: "G-WS19S8YDBC"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db