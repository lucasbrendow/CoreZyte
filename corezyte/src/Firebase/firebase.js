// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVQqz2F7XhcHEL50ekuUD06Jj0Ly25JWs",
  authDomain: "corezyte.firebaseapp.com",
  projectId: "corezyte",
  storageBucket: "corezyte.firebasestorage.app",
  messagingSenderId: "917805051705",
  appId: "1:917805051705:web:e01306357663d14c6b02e8",
  measurementId: "G-V3ZHRHSQJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);