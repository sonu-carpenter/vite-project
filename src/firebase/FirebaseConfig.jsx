// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, RecaptchaVerifier } from "firebase/auth"
import { getStorage } from "firebase/storage"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDmD7IrNoUSxvofyhveHeIYn77Z8_ChcU",
  authDomain: "myblog-7fc33.firebaseapp.com",
  projectId: "myblog-7fc33",
  storageBucket: "myblog-7fc33.appspot.com",
  messagingSenderId: "688088995860",
  appId: "1:688088995860:web:6cfcf92a0d0a5fdfe32f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb =getFirestore(app);
const auth =getAuth(app);
const storage =getStorage(app);

export {fireDb, auth, storage}



