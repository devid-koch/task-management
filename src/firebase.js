// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWIa7HBubtLorI3EnDYxQyc_w_7F3UaoY",
  authDomain: "taskmanagement-33d23.firebaseapp.com",
  projectId: "taskmanagement-33d23",
  storageBucket: "taskmanagement-33d23.appspot.com",
  messagingSenderId: "889847330493",
  appId: "1:889847330493:web:1d061afd7f81d234afe9d4",
  measurementId: "G-KS554FY6ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;