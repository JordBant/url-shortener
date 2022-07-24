const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();
const userRef = db.collection("User");

const cheese = () => {
  userRef.get().then((querySnapshot)=>{
     querySnapshot.forEach(document => {
      console.log(document.data())
     })
  })
}

module.exports = {
  cheese
}

// const { initializeApp } = require("firebase-admin/app");
// const { getFirestore, collection } = require("firebase-admin/firestore");
// require('dotenv').config()

// import { getAnalytics } from "firebase/analytics";
// const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
// import userReq from 'server.js upon verification of valid info'

// const firebaseConfig = {
//   apiKey: process.env.FB_API_KEY,
//   authDomain: process.env.FB_AUTH_DOMAIN,
//   projectId: process.env.FB_PROJECT_ID,
//   storageBucket: process.env.FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
//   appId: process.env.FB_APP_ID,
//   measurementId: process.env.FB_MEASUREMENT_ID
// };

// Initialize Firebase
// const analytics = getAnalytics(app);

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// // const auth = getAuth();

// const addUser = async() => {
  // const {
  //   firstName, 
  //   lastName,
  //   email,
  //   password,
  //   username
  // } = user 

  // const docRef = db.collection('myUsers').doc('aLovelace');
  // const docRef = {
  //   name: 'Los Angeles',
  //   state: 'CA',
  //   country: 'USA'
  // };

  // const docRef = db.collection('Users').doc('aturing');
    // try {
    //   const res = await db.collection('cities').doc('LA').set(docRef);
    //   console.log("Document written with ID: ", docRef.id);

    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

  // emailAndPassword(email, password)
// }

// const emailAndPassword = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// }


// firebase Schemas

// module.exports = {
//   addUser
// }