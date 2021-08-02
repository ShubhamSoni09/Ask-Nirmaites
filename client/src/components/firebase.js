import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdjRbulL59kK2v6eSOzB67tU0Uk2s524w",
    authDomain: "quora-dd89f.firebaseapp.com",
    projectId: "quora-dd89f",
    storageBucket: "quora-dd89f.appspot.com",
    messagingSenderId: "211722600861",
    appId: "1:211722600861:web:bad663713a4940e2ac6f74",
    measurementId: "G-7XQ7C6RJBB"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export{auth,provider}
  export default db