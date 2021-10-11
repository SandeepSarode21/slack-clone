import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6a6wv0RGhPyffuyLgPdlxqdhd1L0Uc4A",
  authDomain: "slack-clone-f8d0a.firebaseapp.com",
  databaseURL: "https://slack-clone-f8d0a-default-rtdb.firebaseio.com",
  projectId: "slack-clone-f8d0a",
  storageBucket: "slack-clone-f8d0a.appspot.com",
  messagingSenderId: "530276166754",
  appId: "1:530276166754:web:14cbedf46143193837f53b",
  measurementId: "G-137J6K6D13",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
//const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();

//export { auth, provider };
export default db;
