import { initializeApp } from 'firebase/app';
import $$ from "dom7";
import app from "./app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXhTt06k5cMNZL1pdvltV5k9RdAX3c5Fs",
    authDomain: "migros-gardener.firebaseapp.com",
    projectId: "migros-gardener",
    storageBucket: "migros-gardener.appspot.com",
    messagingSenderId: "339516052146",
    appId: "1:339516052146:web:3bc9e926217fd9b65cafab"
  };
  
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);