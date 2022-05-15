
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAsWLop_-AY81_tftfEIY8x1ztMzU3FfUs",
  authDomain: "barista-aa2ec.firebaseapp.com",
  projectId: "barista-aa2ec",
  storageBucket: "barista-aa2ec.appspot.com",
  messagingSenderId: "311394687818",
  appId: "1:311394687818:web:9536ef47f3367a9d2abfb3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default getFirestore();
export const db = getFirestore(app);



