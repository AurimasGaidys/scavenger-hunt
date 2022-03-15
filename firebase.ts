// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQYzYrxFc0GNnQumsgy4Z4fRnRr_VWJYk",
    authDomain: "gth-web-tests.firebaseapp.com",
    projectId: "gth-web-tests",
    storageBucket: "gth-web-tests.appspot.com",
    messagingSenderId: "463437246940",
    appId: "1:463437246940:web:20f99c159a8d2a32901f19",
    measurementId: "G-TEKJFWX1BJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }