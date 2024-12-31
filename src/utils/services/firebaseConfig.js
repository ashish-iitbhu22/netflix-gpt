// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKln11bqSOHCH7WLM31O6YNFk310yqIWk",
    authDomain: "netflixgpt172.firebaseapp.com",
    projectId: "netflixgpt172",
    storageBucket: "netflixgpt172.firebasestorage.app",
    messagingSenderId: "969453110030",
    appId: "1:969453110030:web:bf21fcba8db700252f4d5f",
    measurementId: "G-8F6F5P9Y28"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);