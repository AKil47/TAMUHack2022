const db = firebase.getFirestore();

const querySnapshot = firebase.getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});