import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDAh0dld2zG-1MdMM2DEX869dswTuTPOXI",
  authDomain: "todoapp-firebase-9578f.firebaseapp.com",
  projectId: "todoapp-firebase-9578f",
  storageBucket: "todoapp-firebase-9578f.appspot.com",
  messagingSenderId: "924282942268",
  appId: "1:924282942268:web:aab32dd5de6d1467e5a439"
};

const app = firebase.initializeApp(firebaseConfig);

