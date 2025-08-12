

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDD_4n-fBlAGVtNjVnYrX34V3T-tTofGEk",
  authDomain: "eventra-9127d.firebaseapp.com",
  projectId: "eventra-9127d",
  storageBucket: "eventra-9127d.firebasestorage.app",
  messagingSenderId: "161592966800",
  appId: "1:161592966800:web:fd049625bda3aebc9e2215"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);       // For authentication
export const db = getFirestore(app);    // For Firestore database
export const storage = getStorage(app); // For file uploads
