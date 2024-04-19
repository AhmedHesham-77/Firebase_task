// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGp3-vDOQ8h-YxGhjMWX59zVkcbhxmj_Y",
  authDomain: "fir-intro-2d754.firebaseapp.com",
  projectId: "fir-intro-2d754",
  storageBucket: "fir-intro-2d754.appspot.com",
  messagingSenderId: "370062063922",
  appId: "1:370062063922:web:4d4f6b4d4972c656733f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
