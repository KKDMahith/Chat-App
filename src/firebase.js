// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7T_y1YI02nW-4SUAF1OYMRcDES9di_U8",
  authDomain: "chat-app-6ac87.firebaseapp.com",
  projectId: "chat-app-6ac87",
  storageBucket: "chat-app-6ac87.appspot.com",
  messagingSenderId: "61876294516",
  appId: "1:61876294516:web:a135c409fe402bd6dbd221"
};

// Initialize Firebase app instance
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()