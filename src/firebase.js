// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBKTKtfhC7UG1JpsRZPaXsDNNN6RM_Z04E",
//   authDomain: "tinder-clone-a37ee.firebaseapp.com",
//   databaseURL: "https://tinder-clone-a37ee-default-rtdb.firebaseio.com",
//   projectId: "tinder-clone-a37ee",
//   storageBucket: "tinder-clone-a37ee.appspot.com",
//   messagingSenderId: "1006544579078",
//   appId: "1:1006544579078:web:ac7349decff0c1c3397187",
//   measurementId: "G-LRCQ6HH0FF",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const database = firebaseApp.firestore();

// export default database;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBKTKtfhC7UG1JpsRZPaXsDNNN6RM_Z04E",
  authDomain: "tinder-clone-a37ee.firebaseapp.com",
  databaseURL: "https://tinder-clone-a37ee-default-rtdb.firebaseio.com",
  projectId: "tinder-clone-a37ee",
  storageBucket: "tinder-clone-a37ee.appspot.com",
  messagingSenderId: "1006544579078",
  appId: "1:1006544579078:web:ac7349decff0c1c3397187",
  measurementId: "G-LRCQ6HH0FF",
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
export default database;
