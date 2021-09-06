// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA-FnIc3RRMBO2c9vknwKvylza7YzUlsSs",
  authDomain: "quora-e1c75.firebaseapp.com",
  projectId: "quora-e1c75",
  storageBucket: "quora-e1c75.appspot.com",
  messagingSenderId: "667251816062",
  appId: "1:667251816062:web:3eb9e87d479bf80e44ca2f",
  measurementId: "G-7TCNNRVVKP"
}

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.token.email.matches('.*nirmauni[.]ac[.]in');
    }
  }
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
