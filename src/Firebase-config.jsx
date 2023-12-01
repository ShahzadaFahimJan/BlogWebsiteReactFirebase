// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCuoY260OPgZJtM_J-VesKQjMduxiLjcgk",
  authDomain: "blogwebsite-6fa18.firebaseapp.com",
  projectId: "blogwebsite-6fa18",
  storageBucket: "blogwebsite-6fa18.appspot.com",
  messagingSenderId: "855834666283",
  appId: "1:855834666283:web:1bcc59bc956490abcfd16e",
  measurementId: "G-0LHMMM59XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);