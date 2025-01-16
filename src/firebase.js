
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyANwoMuuiejxQJU5Ol40aS18-CcZ5OPOjw",
  authDomain: "clone-95666.firebaseapp.com",
  projectId: "clone-95666",
  storageBucket: "clone-95666.appspot.com",
  messagingSenderId: "592923983249",
  appId: "1:592923983249:web:caa745c2385cf707caae30",
  measurementId: "G-ETQCPGHJ2K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth()

  export {db, auth};

