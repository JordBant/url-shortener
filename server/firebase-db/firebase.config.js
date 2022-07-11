import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import userReq from 'server.js upon verification of valid info'

const firebaseConfig = {
  apiKey: "AIzaSyCiTD9cHkHHX85NmccEZYRywGQ58lQ4pCc",
  authDomain: "urshort-bc834.firebaseapp.com",
  projectId: "urshort-bc834",
  storageBucket: "urshort-bc834.appspot.com",
  messagingSenderId: "495136889485",
  appId: "1:495136889485:web:722d2f3f5f24e4ebc1e0c4",
  measurementId: "G-HJWMZGH3V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()
const colRef = collection(db, myCollection);

// const addBookForm=document.querySelector('.add')
// addBookForm.addEventListener('submit',(e)=>{
//  e.preventDefault()
//   addDoc(colRef,{
//     title:addBookForm.title.value,
//     author:addBookForm.author.value,
//  })
//   .then()
// })

// // get collection data
// getDocs(colRef)
//   .then((snapshot)=>{
    
//   })
//   .catch(err=>{
//     console.log(err.message)
//   })

// module.exports = Users