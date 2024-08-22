import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY_ap6wmAZagdXymteyPjrosSnG2ET-vU",
  authDomain: "sweet-leaf-ecommerce.firebaseapp.com",
  projectId: "sweet-leaf-ecommerce",
  storageBucket: "sweet-leaf-ecommerce.appspot.com",
  messagingSenderId: "944451782268",
  appId: "1:944451782268:web:c4a59e2b7ab67308ae6bf9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore() 

export default db