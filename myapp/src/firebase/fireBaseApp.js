import firebase from 'firebase/app'
import 'firebase/firebase-firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAlErNGhm-ZBr-5m4uhzRyzxxPIEAueY-w",
  authDomain: "reactfinalproject-39106.firebaseapp.com",
  projectId: "reactfinalproject-39106",
  storageBucket: "reactfinalproject-39106.appspot.com",
  messagingSenderId: "1067340539462",
  appId: "1:1067340539462:web:5f96a96fbd461292030c47",
  measurementId: "G-WHKF9H94TN"
};
firebase.initializeApp(firebaseConfig)

export default firebase;    
