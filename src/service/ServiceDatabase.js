// import {appInit} from '../app.js';
// import { getAuth,onAuthStateChanged,signOut } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
// import { getFirestore, collection,query, doc,getDoc,getDocs, setDoc  } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// const auth =  getAuth(appInit);
// const dbFireStore = getFirestore(appInit)
// const docCollectionUsers ="usuario"

// const citiesRef = collection(dbFireStore,docCollectionUsers );
// var userIdClicked = ''

// await setDoc(doc(citiesRef, "01"),  {
//     id: 1,
//     name :'bob',
//     userName :"bob dog",
//     email:'bob@gmail.com'
//   });


const db = firebase.firestore();
usuarioLogado ={}
 
 function getAllDocs(){
  return  firebase.firestore().collection("usuario").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const user = new User(doc.data().email,doc.data().fotoPerfil,doc.data().nome)
       // console.log(doc.id, " => ", doc.data().nome);
        usuarios.push(user)
    });
    return usuarios;
 });
}

function getAllDocsConversation(){
    return  firebase.firestore().collection("conversa")
    .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const user = new User(doc.data().email,doc.data().fotoPerfil,doc.data().nome)
         // console.log(doc.id, " => ", doc.data().nome);
          usuarios.push(user)
      });
      return usuarios;
   });
  }
function getConversationById(){
    
}

function createDatabaseConversation(conversa){
    return  firebase.firestore().collection("conversas").add(conversa).then(
        (docRef)=>{
            console.log(docRef)
        })
        .catch((error)=>{
            console.log(error)
        });
  }
 
 function findUserById(idUser){
    const ref =  db.collection("usuario").doc(idUser)
    return  ref.get().then(
      (doc) =>{
        if (doc.exists) {
            return doc
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
 }



function sendMessageToBd (message) {
   conversas.push(message)
  }

// async function findAllDocs(){
//     const q = query(collection(dbFireStore, docCollectionUsers));
  
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
    
//       const contact = new User(
//           doc.data().email,
//           doc.data().fotoPerfil,
//           doc.data().nome,
//         )
      
//         createLiUser(contact)
//     });
//   }