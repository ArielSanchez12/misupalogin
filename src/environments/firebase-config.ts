// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBSqh6nQ_DFLLRQelnXdm3lxIdMi3xWJAQ",
    authDomain: "supachat-ca4ef.firebaseapp.com",
    projectId: "supachat-ca4ef",
    storageBucket: "supachat-ca4ef.firebasestorage.app",
    messagingSenderId: "616014296035",
    appId: "1:616014296035:web:4e0ceb5667b6c06e85e6d6",
    measurementId: "G-BYYFQC8MQ4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);