// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATbbgZSQ3b6tfvjthYnum9J_jNY_eiNHQ",
  authDomain: "liquiya-a9175.firebaseapp.com",
  databaseURL: "https://liquiya-a9175-default-rtdb.firebaseio.com",
  projectId: "liquiya-a9175",
  storageBucket: "liquiya-a9175.appspot.com",
  messagingSenderId: "409233252084",
  appId: "1:409233252084:web:13295f425c84287e3d08a1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;