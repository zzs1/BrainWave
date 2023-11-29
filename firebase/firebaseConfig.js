// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjVLzfogRYQnGgJhUSXfRhwaILdTWSuOA",
  authDomain: "brainwavesdata-8ff43.firebaseapp.com",
  databaseURL: "https://brainwavesdata-8ff43-default-rtdb.firebaseio.com",
  projectId: "brainwavesdata-8ff43",
  storageBucket: "brainwavesdata-8ff43.appspot.com",
  messagingSenderId: "425066628228",
  appId: "1:425066628228:web:4854a7c01138f9230beed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);