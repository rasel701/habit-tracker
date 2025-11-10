// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfuvkkcJGHl1NINmvkXc9XBmywrthlHs4",
  authDomain: "habit-tracker-3cdcd.firebaseapp.com",
  projectId: "habit-tracker-3cdcd",
  storageBucket: "habit-tracker-3cdcd.firebasestorage.app",
  messagingSenderId: "185916560339",
  appId: "1:185916560339:web:eb048d19b097fcfd249526",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
