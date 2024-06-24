// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy-hI11v7RpqRMYajSJomN0BkTEGf9QU8",
  authDomain: "login-authentication-beb75.firebaseapp.com",
  projectId: "login-authentication-beb75",
  storageBucket: "login-authentication-beb75.appspot.com",
  messagingSenderId: "372456425735",
  appId: "1:372456425735:web:467bba2660d98886a1dda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };