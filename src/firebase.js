import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHXQBqbLzKskPzrd2fOn2hzUnT_2U5CIM",
  authDomain: "clone-450a2.firebaseapp.com",
  projectId: "clone-450a2",
  storageBucket: "clone-450a2.appspot.com",
  messagingSenderId: "28799917614",
  appId: "1:28799917614:web:740cf9cda7d06e2c0bc9bf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const gauth = getAuth();
const getAuth=firebase.auth;
const provider= new firebase.auth.GoogleAuthProvider();

export { auth, db,getAuth,provider };
