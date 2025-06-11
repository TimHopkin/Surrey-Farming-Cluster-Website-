import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyCg6Sy0jeFYrzD5ayRVBOU3E_aqtydFKOU",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "surrey-farming-cluster.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "surrey-farming-cluster",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "surrey-farming-cluster.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "765765708562",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:765765708562:web:213873c179fab6452a61cb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;