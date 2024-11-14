import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9pAi316x5yx3Eu1XeqopbGbue5IxwIxQ",
  authDomain: "journaldebord.firebaseapp.com",
  projectId: "journaldebord",
  storageBucket: "journaldebord.firebasestorage.app",
  messagingSenderId: "128327797694",
  appId: "1:128327797694:web:db75f946a38c85d983c7ef",
  measurementId: "G-GB3CMMNW1T",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialiser Firebase Analytics uniquement côté client
let analytics;
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}

export { analytics };
