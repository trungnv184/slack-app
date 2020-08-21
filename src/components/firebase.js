import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6a6nXHk_MBvmhHhAALlAEMPKZjwMqOHs",
  authDomain: "slack-app-dev.firebaseapp.com",
  databaseURL: "https://slack-app-dev.firebaseio.com",
  projectId: "slack-app-dev",
  storageBucket: "slack-app-dev.appspot.com",
  messagingSenderId: "63791076420",
  appId: "1:63791076420:web:796e2e876d2bced8655811",
  measurementId: "G-3HMKNK0J5X",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
