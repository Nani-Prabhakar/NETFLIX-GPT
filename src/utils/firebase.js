// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_0_Q9Jj2IhtMq7fvm32Rmmj-biz5TAYs",
  authDomain: "netflix-gpt-129ac.firebaseapp.com",
  projectId: "netflix-gpt-129ac",
  storageBucket: "netflix-gpt-129ac.appspot.com",
  messagingSenderId: "557073907948",
  appId: "1:557073907948:web:1b2d016f6aa9485bff25c9",
  measurementId: "G-YWSPBW5PKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();