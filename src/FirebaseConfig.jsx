
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
 

  apiKey: "AIzaSyAihNwhPGATaghrv0uG6EoJwvV0rX19BUA",
  authDomain: "task-ccf32.firebaseapp.com",
  projectId: "task-ccf32",
  databaseURL: "https://task-ccf32-default-rtdb.firebaseio.com/",
  storageBucket: "task-ccf32.appspot.com",
  messagingSenderId: "146201835486",
  appId: "1:146201835486:web:8fc0ee339e231e05714f4f",
  measurementId: "G-97TEWRZ44K"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);