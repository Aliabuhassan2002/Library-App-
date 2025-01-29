
import firebase from 'firebase';

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqE-o42PoujRDkxS-a47caJaeuIcA1zKc",
    authDomain: "reactt-53189.firebaseapp.com",
    projectId: "reactt-53189",
    storageBucket: "reactt-53189.firebasestorage.app",
    messagingSenderId: "259050620366",
    appId: "1:259050620366:web:8dc2ca38c95d4d9ef3979f",
    measurementId: "G-CN63BVXMCV"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;