import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Import getAuth

const firebaseConfig = {
  apiKey: "AIzaSyCqPFMVsOv-8DzzsLzC20eJ_cJik68mHrA",
  authDomain: "netflix-gpt-4c996.firebaseapp.com",
  projectId: "netflix-gpt-4c996",
  storageBucket: "netflix-gpt-4c996.firebasestorage.app",
  messagingSenderId: "249513153240",
  appId: "1:249513153240:web:6568783f9aabef3ee9bdad",
  measurementId: "G-SYMNZGCVY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // ✅ Correct way to initialize auth
