// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4tJkRlT_OOyuvm4vgInCIFPbVpamjZ9w",
  authDomain: "myfirstapp-682d5.firebaseapp.com",
  projectId: "myfirstapp-682d5",
  storageBucket: "myfirstapp-682d5.appspot.com",
  messagingSenderId: "291522721793",
  appId: "1:291522721793:web:f1402b6092416753f46800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}