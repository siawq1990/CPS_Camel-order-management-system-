import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyCq0sufX02vj7ve6MwSjV6ZMNd7P6r-Q_c",
  authDomain: "cps-camel.firebaseapp.com",
  databaseURL: "https://cps-camel-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cps-camel",
  storageBucket: "cps-camel.appspot.com",
  messagingSenderId: "576237060438",
  appId: "1:576237060438:web:1cc6d37dbdd0d0a49bd6f7",
  measurementId: "G-JXFXMEVCBK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;