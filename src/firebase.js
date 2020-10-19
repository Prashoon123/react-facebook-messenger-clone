import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // ENTER YOUR APP'S FIREBASE CONFIG HERE
});

const db = firebaseApp.firestore();
export default db;
