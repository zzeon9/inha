// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXbCR3XUssleUF7UeVWIJwY5JBF0KgAp0",
  authDomain: "inha-3a329.firebaseapp.com",
  projectId: "inha-3a329",
  storageBucket: "inha-3a329.appspot.com",
  messagingSenderId: "479427422150",
  appId: "1:479427422150:web:9551be70ec15f4a2b8f4c7",
  measurementId: "G-BE8R63KY93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);