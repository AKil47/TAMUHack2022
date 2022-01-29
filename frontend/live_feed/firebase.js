import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'



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

async function get() {
  const querySnapshot = await getDocs(collection(db, "timestamps"));
  console.log("done")

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()[10]}`);
  });
}

await get()