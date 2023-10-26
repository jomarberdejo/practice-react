
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC3HngcDIwvtC-lTqAinp975usLYAjcKYc",
  authDomain: "fir-practice-9ea3b.firebaseapp.com",
  projectId: "fir-practice-9ea3b",
  storageBucket: "fir-practice-9ea3b.appspot.com",
  messagingSenderId: "703504911522",
  appId: "1:703504911522:web:bac7d01ea235ecf76d5bfb",
  measurementId: "G-N8FNS79LXH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);