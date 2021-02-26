import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQisrOYmxroh_lxWET07zummDfl0idRjc",
    authDomain: "slack-clone-cd917.firebaseapp.com",
    projectId: "slack-clone-cd917",
    storageBucket: "slack-clone-cd917.appspot.com",
    messagingSenderId: "78788287217",
    appId: "1:78788287217:web:d78465e05c8b5d3610a750",
    measurementId: "G-GRVL642JTJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, db, auth, provider }