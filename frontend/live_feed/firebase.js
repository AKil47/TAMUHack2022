import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js'
import { getFirestore, collection, getDocs, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'



const firebaseConfig = {
  apiKey: "AIzaSyD9Gs-iOkKLbSbmvgsKlC2YprAtDkdO_f0",
  authDomain: "tamuhack2022.firebaseapp.com",
  projectId: "tamuhack2022",
  storageBucket: "tamuhack2022.appspot.com",
  messagingSenderId: "312576345352",
  appId: "1:312576345352:web:6f133bb3ca1aa3d15998bd",
  measurementId: "G-R4Y83D55CN"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore();

export async function get_call_data(call_id) {
    const docRef = doc(db, "user_1", call_id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
}