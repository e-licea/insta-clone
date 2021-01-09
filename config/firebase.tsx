import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
require('firebase/firestore')

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB4w4wJ7ay4kYe0iWbEGpWfrNlegCpWSI4",
    authDomain: "insta-clone-82a92.firebaseapp.com",
    projectId: "insta-clone-82a92",
    storageBucket: "insta-clone-82a92.appspot.com",
    messagingSenderId: "229907171197",
    appId: "1:229907171197:web:ea42935e99df43ef65ae14"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db;