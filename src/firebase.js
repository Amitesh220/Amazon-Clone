
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBkAdcAN3bWRzW0Pt4jej3DtrGTKD6W9vQ",
  authDomain: "e-clone-deca8.firebaseapp.com",
  projectId: "e-clone-deca8",
  storageBucket: "e-clone-deca8.appspot.com",
  messagingSenderId: "806769562398",
  appId: "1:806769562398:web:85340bc8fcc5015a256f0f",
  measurementId: "G-7FYHQDD84S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth }; // Export the auth object
