// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmQ1Xc8oWBED8D7bay7-yhWTrNS0Yqg_8",
  authDomain: "showcase-benjama-ac-th.firebaseapp.com",
  projectId: "showcase-benjama-ac-th",
  storageBucket: "showcase-benjama-ac-th.firebasestorage.app",
  messagingSenderId: "805153108143",
  appId: "1:805153108143:web:f1c3a5482f2d21f5e4645a",
  measurementId: "G-SJZDC0XGHR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
auth.languageCode = "th";