// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARTJvcG0fXr8PI_xKF7TdcOhOOpgWPvYE",
  authDomain: "food-ordering-app-77063.firebaseapp.com",
  projectId: "food-ordering-app-77063",
  storageBucket: "food-ordering-app-77063.appspot.com",
  messagingSenderId: "775921813056",
  appId: "1:775921813056:web:3b9c7b3d3e36dcf8a781a5",
  measurementId: "G-EZTSL9SWJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);