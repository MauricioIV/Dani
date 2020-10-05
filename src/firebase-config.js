import firebase from "firebase/app";
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDHrWbbEaaMjB-EqzYD5Yfm5FwwIHY-4iA",
    authDomain: "entheus-portal.firebaseapp.com",
    databaseURL: "https://entheus-portal.firebaseio.com",
    projectId: "entheus-portal",
    storageBucket: "entheus-portal.appspot.com",
    messagingSenderId: "491874216487",
    appId: "1:491874216487:web:658f6bbdabfd85ae937c02",
    measurementId: "G-8002BRYX04"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
 