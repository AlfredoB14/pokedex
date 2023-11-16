import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCMIUAKGDY07Nmst5rLalo-YmCkoA96Dlk",
    authDomain: "pokedex-441bd.firebaseapp.com",
    projectId: "pokedex-441bd",
    storageBucket: "pokedex-441bd.appspot.com",
    messagingSenderId: "485096425714",
    appId: "1:485096425714:web:431d8876a433dd0672286b"
  });

//Inicialización de Firebase
const db = getFirestore()

export default db