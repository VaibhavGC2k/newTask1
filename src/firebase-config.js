import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDsUNhb0_CWXuxTmwlTMbxjdLvExEZFSOw",
  authDomain: "authentication-demo-ddce2.firebaseapp.com",
  projectId: "authentication-demo-ddce2",
  storageBucket: "authentication-demo-ddce2.appspot.com",
  messagingSenderId: "1079608092761",
  appId: "1:1079608092761:web:1e6ea6f08ab07fe92da948"
};

const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const auth = getAuth(app)