import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



// ...
var firebaseConfig = {
    apiKey: "AIzaSyDOf6xLMkzPlSe3ZCSenNrVjZTB8jtJK3s",
authDomain: "metroeye-a7286.firebaseapp.com",
projectId: "metroeye-a7286",
storageBucket: "metroeye-a7286.appspot.com",
messagingSenderId: "1040248375006",
appId: "1:1040248375006:web:f52162214322f4540a644f",
measurementId: "G-BL5B0SZ88Q"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export default firebase

