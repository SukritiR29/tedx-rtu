// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDocs, getFirestore, query, where } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
async function getdata() {
  return;
}
const firebaseConfig = {
  apiKey: "AIzaSyBkx7GcgUZuwcvQBqeCyMHJH10wqIFVkSg",
  authDomain: "tedx-71668.firebaseapp.com",
  projectId: "tedx-71668",
  storageBucket: "tedx-71668.appspot.com",
  messagingSenderId: "573916814284",
  appId: "1:573916814284:web:04a239cd70f3b41d7edb69",
  measurementId: "G-LR4J6WY88T",
};

// Initialize Firebase
const app = initializeApp(process.env.firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// if there is already user with same email
async function isvaliddata(q2) {
  const querySnapshot = await getDocs(q2);
  console.log(querySnapshot.docs.length);
  return querySnapshot.docs.length;
}
// function to adduser details to firebase
async function adduser(fname, lname, college, branch, contact, email) {
  const docRef = await addDoc(collection(db, "users"), {
    firstname: fname,
    lasttname: lname,
    college: college,
    branch: branch,
    contact: contact,
    email: email,
  });
  console.log("Document written with ID: ", docRef.id);
}

function logSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  // if any of the field is empty
  if (
    formProps.fname == "" ||
    formProps.lname == "" ||
    formProps.college == "" ||
    formProps.branch == "" ||
    formProps.contact == ""
  ) {
    alert("enter all valid details");
  } else {
    try {
      var contact = formProps.email;
      const docref = collection(db, "users");
      const q2 = query(collection(db, "users"), where("email", "==", contact));
      // function will return promise
      let l = isvaliddata(q2);
      l.then(
        function (value) {
          if (value == 0) {
            adduser(
              formProps.fname,
              formProps.lname,
              formProps.college,
              formProps.branch,
              formProps.contact,
              formProps.email
            );
            alert("your response has been accepted ");
            document.getElementById("register").reset();
          } else {
            alert("user is already registered use different mail");
          }
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

const form = document.getElementById("register");

form.addEventListener("submit", logSubmit);
