import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = { 
  apiKey : "AIzaSyDAh0dld2zG-1MdMM2DEX869dswTuTPOXI", 
  authDomain : "todoapp-firebase-9578f.firebaseapp.com", 
  projectId : "todoapp-firebase-9578f", 
  storageBucket : "todoapp-firebase-9578f.appspot.com", 
  messagingSenderId : "924282942268" , 
  appId : "1:924282942268:web:aab32dd5de6d1467e5a439" 
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getAllTodos = async () => {
  const snapshot = await db.collection("todos").get();
  try {
    let res = [];
    snapshot.docs.forEach(item => {
      res.push({
        ...item.data(),
        id: item.id
      })
    })
    return res;
  } catch (e) {
    return [{id: 0, done: false, text: 'No data'}];
  }
}

export const addTodo = async (item) => {
  try {
    await db.collection("todos").add(item);
  } catch (e){
    alert("failed to add your new todo: " + e.toString());
  }
}

export const updateTodo = async (item, id) => {
  try {
    await db.collection("todos").doc(id).update(item);
  } catch (e) {
    alert("failed to update your todo: " + e.toString());
  }
} 

export default db;