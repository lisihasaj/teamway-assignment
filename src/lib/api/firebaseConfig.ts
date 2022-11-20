import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXuY7CdKn6qqOj_vtbVoDolI98OijRzwU",
    authDomain: "teamway-assignment.firebaseapp.com",
    databaseURL:
        "https://teamway-assignment-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "teamway-assignment",
    storageBucket: "teamway-assignment.appspot.com",
    messagingSenderId: "684980048796",
    appId: "1:684980048796:web:0c479ea3def7441aca2e59",
    measurementId: "G-SEWRDS07RB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
