import firebase from 'firebase/app'
import 'firebase/firestore'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwh5su5RnIs7b9faIp4jA3TEDk5o99fuY",
  authDomain: "todo-b5be8.firebaseapp.com",
  projectId: "todo-b5be8",
  storageBucket: "todo-b5be8.appspot.com",
  messagingSenderId: "148778322193",
  appId: "1:148778322193:web:61c2efa0f842bff6e564b0",
  measurementId: "G-477C56QKVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;