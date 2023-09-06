// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot, 
  deleteDoc, 
  doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJvxsyr-bGUvitqYg0a4YtKxpjIT6r1KU",
  authDomain: "redsocial-d5ed6.firebaseapp.com",
  projectId: "redsocial-d5ed6",
  storageBucket: "redsocial-d5ed6.appspot.com",
  messagingSenderId: "921454513449",
  appId: "1:921454513449:web:293ee80d70a1736c9e7b38",
  measurementId: "G-SFEMC8RMCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//BD para post
const db = getFirestore(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//export const out = signOut();
//Guardar los post 
export const saveTask = (title, description) => {
 addDoc(collection(db, 'task'), {title, description})
}
//mostrar los post
export const getTask = () => getDocs(collection(db, 'task'))
//mostrar los post automaticamente
export const onGetTasks = (callback) => onSnapshot(collection(db, 'task'), callback)
//eliminar los post
export const deleteTask = id => deleteDoc(doc(db,'task', id));



  


