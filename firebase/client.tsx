import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const clientCredentials = {
  apiKey: "AIzaSyAD5luseWpb15esYUDQmQKppecU98EE4i8",
  authDomain: "study-logs-b511a.firebaseapp.com",
  projectId: "study-logs-b511a",
  storageBucket: "study-logs-b511a.appspot.com",
  messagingSenderId: "1099382368029",
  appId: "1:1099382368029:web:42b3ce14afc888e00de3f4",
  measurementId: "G-EXXM1MFHDW"
}

if (!firebase.app.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;