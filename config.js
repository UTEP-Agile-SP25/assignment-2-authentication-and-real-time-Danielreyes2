// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOvkrxipdXIZw-e-zjYV9oa0YQXacOchA",
  authDomain: "daniel-sandbox-4f67f.firebaseapp.com",
  projectId: "daniel-sandbox-4f67f",
  storageBucket: "daniel-sandbox-4f67f.firebasestorage.app",
  messagingSenderId: "919205113390",
  appId: "1:919205113390:web:f88e22e7e598c7d33079bf",
  measurementId: "G-2J3Q4H09KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

