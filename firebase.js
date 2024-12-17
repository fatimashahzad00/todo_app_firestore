import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js'
import { getFirestore, collection, addDoc, onSnapshot , serverTimestamp, orderBy, query } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js'


const firebaseConfig = {
  apiKey: "AIzaSyDmmKi_XvB8gjD6HVxFMUlpEJyAQOaeTmQ",
  authDomain: "testing-5a1e3.firebaseapp.com",
  projectId: "testing-5a1e3",
  storageBucket: "testing-5a1e3.firebasestorage.app",
  messagingSenderId: "887289243209",
  appId: "1:887289243209:web:33cac74b240d2f7138c198",
  measurementId: "G-MZQ59W0HNF"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app)
export {collection, addDoc, db, onSnapshot, serverTimestamp, orderBy , query}