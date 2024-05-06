

$(function(){
   verifyIsUserLogged()

  //  $('#login_form').submit(function(event){
          
  //        const email = $('#email').val()
  //         const password = $('#password').val()
  //       // console.log(`${email} : ${password} `); 
  //      //  validateFields(email,password)
  //       event.preventDefault()
  //   });
     
    $('#btn-login').click(function(){ 
            const email = $('#email').val()
            const password = $('#password').val()
           
           logarUsuario(email,password)

       })
});

function logarUsuario(email, passowrd){
  if (email.trim().length !=0 && passowrd.trim().length != 0)  {
    // const user = verifcaUserCadastrado(email);
    // console.log(user[0].email)
    // if (user[0].email === email) {
    //    window.location.href = './home.html'
    // }else{
    //   alert("Usuário não existente")
    //   console.log("Usuário não existente")
    // }
    showLoading()
    firebase.auth().signInWithEmailAndPassword(email,passowrd)
      .then((userCredential) => {
    
        const user = userCredential.user;
        console.log(user)
        hideLoading()
        window.location.href = 'home.html'
     
      })
      .catch((error) => {
        hideLoading()
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('error',error)
           alert(getUserError(error))
      });
    
  } else {
   alert("Email ou senha inválido,verifica os dados")
   return false;
 }
}

function getUserError(error){
     if(error.code == "auth/invalid-credential"){
      return "Usuário não encontrado";
     }
}

//  function validateFields(emailTag,passwordTag){
//        console.log(`${emailTag} : ${passwordTag}`);
//       if (emailTag.trim().length !=0 && passwordTag.trim().length != 0)  {
//          signInWithEmailAndPassword(auth,emailTag,passwordTag).then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user)
//             console.log(`${email} : ${password}`); 
//             window.location.href = 'home.html'
//             // ...
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(`Email ou senha inválido,verifica os dados ${errorCode} - ${errorMessage} `)
//           });
        
//       } else {
//          alert("Email ou senha inválido,verifica os dados")
//       }
      
      
//  }

// //  onAuthStateChanged(auth, (user) => {
// //    if (user) {
// //      // User is signed in, see docs for a list of available properties
// //      // https://firebase.google.com/docs/reference/js/auth.user
// //      const uid = user.uid;
// //      console.log(" user conected " + uid)
// //     window.location.href = 'home.html'
// //    } else {
// //        console.log("not user conected")
// //      // User is signed out
   
// //    }
// //  });

//   // signOut(auth).then(() => {
//   //   window.location.href ='../src/index.html'
//   //   console.log("User signout")
//   // }).catch((error) => {
//   //   // An error happened.
//   //   console.log(`erro ao  deslogar ${error.message}`)
//   // });
 


function verifyIsUserLogged(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      window.location.href = 'home.html'
    } else {
      // User is signed out
      // ...
    }
  });
}
 