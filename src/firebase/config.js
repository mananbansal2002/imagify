import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDg36mk-Dpd4jSy8pPiw1IpmyATvy-dScc",
  authDomain: "imagify200.firebaseapp.com",
  projectId: "imagify200",
  storageBucket: "imagify200.appspot.com",
  messagingSenderId: "924637467531",
  appId: "1:924637467531:web:93e00e193655ae1d69158e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };