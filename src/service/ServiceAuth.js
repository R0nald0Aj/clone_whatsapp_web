

function verifyIsUserLogged(){
   firebase.auth().onAuthStateChanged( (user) => {
     if (user) {
      var uid = user.uid;
       uid
       getUserData(uid)
     } else {
      window.location.href = 'index.html'
     }
     
   });
 }


 function logutUserController(){
   firebase.auth().signOut().then(() => {
      window.location.href = 'index.html'
    }).catch((error) => {
      alert("errro ao deslogar" + error)
    });
}
