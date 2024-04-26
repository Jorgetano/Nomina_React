import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB8jbfFIs90qaV_lFf-BG7ut5Ku7IpXnCQ",
  authDomain: "nomina-react.firebaseapp.com",
  projectId: "nomina-react",
  storageBucket: "nomina-react.appspot.com",
  messagingSenderId: "57641971625",
  appId: "1:57641971625:web:e4550c47f866a47f271eb8",
  measurementId: "G-DZCH7K4YTB"
};

const app = initializeApp(firebaseConfig);
export const connDatabase = getFirestore(app)