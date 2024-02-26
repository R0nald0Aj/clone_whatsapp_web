$(function(){
    $('#login_form').submit(function(event){
          
        // const email = $('#email').val()
        // const password = $('#password').val()
        // console.log(`${email} : ${password} `); 
        // // validateFields(email,password)
        //event.preventDefault()
    
    });

    $('#btn-login').click(function(){  
        
    })

});

 function validateFields(emailTag,passwordTag){
         const email = $(`#${emailTag}`).val()
         const password = $(`#${passwordTag}`).val()
      if (email.trim().length !=0 && password.trim().length != 0)  {

         console.log(`${email} : ${password} `); 
         window.location.href = 'home.html'
        
      } else {
         alert("Email ou senha inválido,verifica os dados")
      }
 }