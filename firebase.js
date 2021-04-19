import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgZ6DcNXascX73YVO5eNRopYmwSnwCvKw",
  authDomain: "chat-2-5d971.firebaseapp.com",
  projectId: "chat-2-5d971",
  storageBucket: "chat-2-5d971.appspot.com",
  messagingSenderId: "775610568614",
  appId: "1:775610568614:web:fc60ad479ad51db3cc4967",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
