import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMa4iYxRzjiFPpcJxuFMiYjg5Wj-tkm2g",
  authDomain: "wooricnt-81ee7.firebaseapp.com",
  projectId: "wooricnt-81ee7",
  storageBucket: "wooricnt-81ee7.appspot.com",
  messagingSenderId: "34857040323",
  appId: "1:34857040323:web:48d286120eab01b437a576",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const specialCollectionRef = firestore.collection("special");

export { specialCollectionRef };
