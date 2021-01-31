import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0vvUto4L8gfqdeV8daHyiN1Rbkq1oo94",
    authDomain: "locataire-contact-form.firebaseapp.com",
    projectId: "locataire-contact-form",
    storageBucket: "locataire-contact-form.appspot.com",
    messagingSenderId: "349123189224",
    appId: "1:349123189224:web:65f619b85fd8e9f6bb6c5d"
 });

 var db = firebaseApp.firestore();
 
 export { db };
 
  