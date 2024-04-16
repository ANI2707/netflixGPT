// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXbSq74HVPaUBTGxVwMHpaSkNuyWxgChQ",
  authDomain: "netflixgpt-d2b3b.firebaseapp.com",
  projectId: "netflixgpt-d2b3b",
  storageBucket: "netflixgpt-d2b3b.appspot.com",
  messagingSenderId: "207657717734",
  appId: "1:207657717734:web:83c72c1d9b6daedd41d027",
  measurementId: "G-JQ3XMZ3VNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);