
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDrrR7l06Tn1zZrKLEe8R8hEuYKPgcO-bE",
  authDomain: "react-portfolio-dashboar-59436.firebaseapp.com",
  projectId: "react-portfolio-dashboar-59436",
  storageBucket: "react-portfolio-dashboar-59436.appspot.com",
  messagingSenderId: "426873229113",
  appId: "1:426873229113:web:ce718382d81e71f5fca2e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);