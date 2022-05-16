// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDckDQ2qrtT3MYORHb5_xLcDCKU9F-RegU",
    authDomain: "tezsat-3060e.firebaseapp.com",
    projectId: "tezsat-3060e",
    storageBucket: "tezsat-3060e.appspot.com",
    messagingSenderId: "150362253628",
    appId: "1:150362253628:web:c2bc8cb1fe048a3d251639",
    measurementId: "G-5P2V094LYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);