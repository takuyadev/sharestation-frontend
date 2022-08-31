// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCLVRVUNC6AOcvE6FHIvXm_GW7bsmueHyM",
  
    authDomain: "sharestation-back.firebaseapp.com",
  
    projectId: "sharestation-back",
  
    storageBucket: "sharestation-back.appspot.com",
  
    messagingSenderId: "977197764114",
  
    appId: "1:977197764114:web:e1bbd82aab8d62e07a12cb",
      
    databaseURL: "https://database.firebaseio.com"
  
  };  


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

