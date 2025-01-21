// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "flix-ai.firebaseapp.com",
  projectId: "flix-ai",
  storageBucket: "flix-ai.firebasestorage.app",
  messagingSenderId: "976501777571",
  appId: "1:976501777571:web:2f9f323c415215cabd0b16",
  measurementId: "G-1CTWZ60EW9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
