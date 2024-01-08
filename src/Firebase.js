// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe_4Fv17C9vXdrEp2nkAo9935Um-D_Zj8",
  authDomain: "netflixgpt-6dc57.firebaseapp.com",
  projectId: "netflixgpt-6dc57",
  storageBucket: "netflixgpt-6dc57.appspot.com",
  messagingSenderId: "971778742144",
  appId: "1:971778742144:web:0c282fe65ece4ad6f09365",
  measurementId: "G-0Z66M8RLV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();