import  firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9Ke9B1-lmpxzVkDAMdVQ1ITGCukAit1E",
  authDomain: "react-crudo.firebaseapp.com",
  databaseURL: "https://react-crudo-default-rtdb.firebaseio.com",
  projectId: "react-crudo",
  storageBucket: "react-crudo.appspot.com",
  messagingSenderId: "199226546353",
  appId: "1:199226546353:web:a5c637e32dd3d86772aa90"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
 export default firebase;