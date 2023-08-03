import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC455XOgEQY4ZPfBXqqP7QyqcTeqmjo_h4",
  authDomain: "ciclistaeletronico-62b95.firebaseapp.com",
  projectId: "ciclistaeletronico-62b95",
  storageBucket: "ciclistaeletronico-62b95.appspot.com",
  messagingSenderId: "399252169098",
  appId: "1:399252169098:web:f59338d697886836456873"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
