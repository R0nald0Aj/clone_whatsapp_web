// Import the functions you need from the SDKs you need
 
 import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWW_0iM_Ace5w3GKzU1Q9D4YNbgawNL6I",
  authDomain: "whats-app-clone-a2c50.firebaseapp.com",
  projectId: "whats-app-clone-a2c50",
  storageBucket: "whats-app-clone-a2c50.appspot.com",
  messagingSenderId: "518737294596",
  appId: "1:518737294596:web:8b672a67645f5b1804cc51"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const auth = getAuth(appInit)


//  onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       console.log(" user conected " + uid)
//       // ...
//     } else {
//         console.log("not user conected")
//       // User is signed out
    
//     }
//   });

  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log(user)
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });


  // signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
  //   // Signed in 

  //   const user = userCredential.user;
  //   console.log(user)
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
