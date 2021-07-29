import firebase from "firebase/app";
import flamelink from "@flamelink/sdk-app";
// Flamelink app is always required
//import flamelink from "flamelink/app";
// Add additional modules that you want to use
//import "flamelink/content";
//import "flamelink/storage";
// import 'flamelink/settings'
// import 'flamelink/navigation'
// import 'flamelink/users'

const flconfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const firebaseApp = firebase.default.initializeApp(flconfig);

const flApp = flamelink({
  firebaseApp, // required
  dbType: "cf", // can be either 'rtdb' or 'cf' for Realtime DB or Cloud Firestore
  env: "production", // optional, default shown
  locale: "en-US", // optional, default shown
  precache: true // optional, default shown. Currently it only precaches "schemas" for better performance
});

export default flApp;
