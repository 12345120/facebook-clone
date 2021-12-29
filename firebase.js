import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJq5_maAq9ZIA6cBg9OigKlc8socAR8m8",
  authDomain: "facebook-clone-5eaa4.firebaseapp.com",
  projectId: "facebook-clone-5eaa4",
  storageBucket: "facebook-clone-5eaa4.appspot.com",
  messagingSenderId: "629870582316",
  appId: "1:629870582316:web:ea70c8c267a6b37d018f89",
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp();

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };

/* 
// check if app is already initialized (check is needed bc of server-side rendering)
// https://firebase.google.com/docs/reference/node/firebase.app#callable
const app = firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// https://firebase.google.com/docs/reference/node/firebase.app.App
const db = app.firestore();
const storage = firebase.storage(); 

export {db, storage}; 
*/
