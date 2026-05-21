// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb1RG4MXgPL-Yl4pOlnXiYCF6TQ0U1_t4",
  authDomain: "portfolio-click-counter.firebaseapp.com",
  projectId: "portfolio-click-counter",
  storageBucket: "portfolio-click-counter.firebasestorage.app",
  messagingSenderId: "121122683532",
  appId: "1:121122683532:web:20aa04b8f93259d6b499a9",
  measurementId: "G-GC7MLMBLY9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
