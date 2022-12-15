// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkx7GcgUZuwcvQBqeCyMHJH10wqIFVkSg",
  authDomain: "tedx-71668.firebaseapp.com",
  projectId: "tedx-71668",
  storageBucket: "tedx-71668.appspot.com",
  messagingSenderId: "573916814284",
  appId: "1:573916814284:web:04a239cd70f3b41d7edb69",
  measurementId: "G-LR4J6WY88T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


// const mmongoclient=require('mongodb').MongoClient
function logSubmit(event) {

    console.log("form is submitted")
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
    const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  if(formProps.fname==""||formProps.lname==""||formProps.college==""||formProps.branch==""||formProps.contact==""){
    alert("enter all valid details")
  }
  else{  try {
    const docRef =  addDoc(collection(db, "users"), {
      firstname: formProps.fname,
      lasttname: formProps.lname,
      college: formProps.college,
      branch: formProps.branch,
      contact: formProps.contact,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }}
  console.log(formProps)


  }
  
  const form = document.getElementById('register');
//   const log = document.getElementById('log');
  
  form.addEventListener('submit', logSubmit);