import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkNc4H8SW3RgKkNYGYkeDA4A81xWgsHvU",
    authDomain: "react-hw-588c0.firebaseapp.com",
    projectId: "react-hw-588c0",
    storageBucket: "react-hw-588c0.firebasestorage.app",
    messagingSenderId: "338179216467",
    appId: "1:338179216467:web:4b3305e071effb40e162a6",
    measurementId: "G-3PRT4P93F1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

