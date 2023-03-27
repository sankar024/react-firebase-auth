import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDb6Mc3MU7Duj_CQ8pWn6ZuehBNbJj6YoI",
  authDomain: "react-authentication-245b2.firebaseapp.com",
  projectId: "react-authentication-245b2",
  storageBucket: "react-authentication-245b2.appspot.com",
  messagingSenderId: "5423776583",
  appId: "1:5423776583:web:59ea7c5ec907b1a3a9c262",
  measurementId: "G-4TBNXCHBYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default auth