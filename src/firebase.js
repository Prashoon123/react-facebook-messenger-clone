import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4g_tptwCC819EN64ha5fxxfU691dRHU0",
    authDomain: "messenger-clone-abc.firebaseapp.com",
    databaseURL: "https://messenger-clone-abc.firebaseio.com",
    projectId: "messenger-clone-abc",
    storageBucket: "messenger-clone-abc.appspot.com",
    messagingSenderId: "262601146388",
    appId: "1:262601146388:web:641e295a61b2d49912e701",
    measurementId: "G-0BSN7MFQQ1",
});

const db = firebaseApp.firestore();
export default db;