import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//myfirebase config
const firebaseConfig = {
    apiKey: "AIzaSyCv9p50W0RZrqDIwusKU92MgYza3MbZKV8",
    authDomain: "fir-demo-1af9a.firebaseapp.com",
    projectId: "fir-demo-1af9a",
    storageBucket: "fir-demo-1af9a.appspot.com",
    messagingSenderId: "846707372478",
    appId: "1:846707372478:web:9c77509fe1b717ce8e89ef",
    measurementId: "G-3SGG56LXWK"
};

//initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

//export the features needed
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);