import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsvxup1ZO9FETauNerhCnEa77FMQxLN0E",
  authDomain: "hiretone0609.firebaseapp.com",
  projectId: "hiretone0609",
  storageBucket: "hiretone0609.firebasestorage.app",
  messagingSenderId: "974370978910",
  appId: "1:974370978910:web:9de102a0997d9e8bc608cf",
  measurementId: "G-FRFL09DG1B"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)