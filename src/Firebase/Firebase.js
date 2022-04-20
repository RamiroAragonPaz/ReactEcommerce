// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp7_1JIX3tvtQXhJlrMIcr0cdYU2kzjJs",
  authDomain: "maru-valania-e-commerce.firebaseapp.com",
  projectId: "maru-valania-e-commerce",
  storageBucket: "maru-valania-e-commerce.appspot.com",
  messagingSenderId: "155524792719",
  appId: "1:155524792719:web:c5afb2f8c79c81cf0bcbfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db