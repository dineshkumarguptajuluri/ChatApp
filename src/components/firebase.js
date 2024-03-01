import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuhDlPiKbp4S9FmMlaBZrh7AnZLN1benQ",
  authDomain: "vishnu-cnct.firebaseapp.com",
  projectId: "vishnu-cnct",
  storageBucket: "vishnu-cnct.appspot.com",
  messagingSenderId: "247388538330",
  appId: "1:247388538330:web:df1c9a6a4ceac86975ace3",
  measurementId: "G-8X7Z4T88FX"
};

// Initialize Firebase

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
