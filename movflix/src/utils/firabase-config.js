// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoPK8YYbU3CrnO_mguJEEZ5424K0ljJmo",
  authDomain: "react-netflix-clone-6adc2.firebaseapp.com",
  projectId: "react-netflix-clone-6adc2",
  storageBucket: "react-netflix-clone-6adc2.appspot.com",
  messagingSenderId: "865014065429",
  appId: "1:865014065429:web:f0a7c0810f1e31ec99611c",
  measurementId: "G-XLH3XEK2WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
