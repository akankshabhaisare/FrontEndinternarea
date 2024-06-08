// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALMainRKls9x8NeW4uuKxDTFBu0MjdNlc",
  authDomain: "interarea-72ce9.firebaseapp.com",
  projectId: "interarea-72ce9",
  storageBucket: "interarea-72ce9.appspot.com",
  messagingSenderId: "685711034967",
  appId: "1:685711034967:web:98da25d0958fdd4f573112",
  measurementId: "G-X4G0DMY7ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}