// Importa los módulos necesarios desde la SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATbbgZSQ3b6tfvjthYnum9J_jNY_eiNHQ",
  authDomain: "liquiya-a9175.firebaseapp.com",
  databaseURL: "https://liquiya-a9175-default-rtdb.firebaseio.com",
  projectId: "liquiya-a9175",
  storageBucket: "liquiya-a9175.appspot.com",
  messagingSenderId: "409233252084",
  appId: "1:409233252084:web:13295f425c84287e3d08a1"
};

// Inicializa Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);

// Exporta `appFirebase` como un export default y `auth` como un export nombrado
export default appFirebase;
export { auth };
