import { doc, updateDoc, arrayUnion, getFirestore, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'

const db = getFirestore();
const happy = document.getElementById("happy")
const sad = document.getElementById("sad")
const drowsy = document.getElementById("drowsy")
const engaged = document.getElementById("engaged")

const ref = doc(db, "user_1", "call_1");
async function update() {
    await setDoc(ref, {
        Drowsy: [parseInt(drowsy.value)],
        Sad: [parseInt(sad.value)],
        Happy: [parseInt(happy.value)],
        Engaged: [parseInt(engaged.value)]
    });
}

await update()

const interval = setInterval(async function() {
    console.log(happy.value, sad.value, drowsy.value, engaged.value)
    await update()
  }, 500);