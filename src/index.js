import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzn7cqe_Cr6ekgPTn35pcRTL4vr8AAwI4",
  authDomain: "proyecto-react-9cb1f.firebaseapp.com",
  projectId: "proyecto-react-9cb1f",
  storageBucket: "proyecto-react-9cb1f.appspot.com",
  messagingSenderId: "592202475387",
  appId: "1:592202475387:web:748f3dffc3a70803963fde"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
