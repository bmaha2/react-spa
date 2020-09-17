import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCk797fP0ialJjFMJgODI4IPkBeEfzr6ek",
    authDomain: "react-spas-991ba.firebaseapp.com",
    databaseURL: "https://react-spas-991ba.firebaseio.com",
    projectId: "react-spas-991ba",
    storageBucket: "react-spas-991ba.appspot.com",
    messagingSenderId: "845322226077",
    appId: "1:845322226077:web:e991428d48d599015e4774",
    measurementId: "G-CJCJPBLFZ5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;