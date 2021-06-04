import firebase from "firebase/app"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDYqNnbxEVGe7WSzJmHox4WTIQn86gU4FA",
    authDomain: "perfectsecurityapplication.firebaseapp.com",
    databaseURL: "https://perfectsecurityapplication-default-rtdb.firebaseio.com",
    projectId: "perfectsecurityapplication",
    storageBucket: "perfectsecurityapplication.appspot.com",
    messagingSenderId: "228413106775",
    appId: "1:228413106775:web:270d6b74829b032f4a5112",
    measurementId: "G-T1F6XS6CX1"
  })
  }

  export default firebase
