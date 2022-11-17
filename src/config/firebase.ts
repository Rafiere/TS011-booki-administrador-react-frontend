import { getAuth } from "firebase/auth";
import "firebase/auth";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";

const app = firebase.initializeApp({
    apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_REACT_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
