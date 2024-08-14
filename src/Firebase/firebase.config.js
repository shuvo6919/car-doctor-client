// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBSymq2dvWFhIbGI6ODnX98wsBz1XzgR1I",
//     authDomain: "car-doctor-2-1362a.firebaseapp.com",
//     projectId: "car-doctor-2-1362a",
//     storageBucket: "car-doctor-2-1362a.appspot.com",
//     messagingSenderId: "320619194516",
//     appId: "1:320619194516:web:6119327d10289bb569ac81"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;