import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAsGmpH-3RIhaDpcWqtO_s0R9ES6tXL17E",
  authDomain: "tq-mvp.firebaseapp.com",
  projectId: "tq-mvp",
  databaseURL: "https://tq-mvp.firebaseio.com",
  storageBucket: "tq-mvp.appspot.com",
  messagingSenderId: "1038123056680",
  appId: "1:1038123056680:web:6857950fe8ca3ba35f7f1d",
  measurementId: "G-XGWCBTW0P0"
});

// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();

//export default db;
//export { firebase, FirebaseApp };
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();
