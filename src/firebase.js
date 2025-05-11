// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqLmdTvyn4cSEemM4LXOd1gbnBK8b3Go",
  authDomain: "smart-garden-98dd7.firebaseapp.com",
  projectId: "smart-garden-98dd7",
  storageBucket: "smart-garden-98dd7.firebasestorage.app",
  messagingSenderId: "146624514602",
  appId: "1:146624514602:web:4eef2238a3e1b6eeeb5153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };