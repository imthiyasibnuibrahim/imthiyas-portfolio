import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// The user has not provided Firebase config details yet.
// Using dummy configuration to prevent Next.js build errors for now.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAPdLLYF2vswowh33yc5dsVf6bRpGl8iic",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "imthiyas-portfolio.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "imthiyas-portfolio",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "imthiyas-portfolio.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "196334031982",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:196334031982:web:582a4f898740b0bc57c27f",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-JGJVTCVSGD"
};

// Initialize Firebase only if it hasn't been initialized already (fixes Next.js HMR issues)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
