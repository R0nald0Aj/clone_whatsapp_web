
$(function(){

    $("#formCadastro").submit((event)=>{
        const nome = $("#name").val()
        const email =  $("#email").val()
        const password = $("#password").val()

        const isValidate = validateFields(nome,email,password)
        console.log(isValidate)
       
       
        if(isValidate){
          
    
        }else{
            event.preventDefault()
        }
       
        
 
    })


}) 

function validateFields(nome,emailTag,passwordTag){
   if (emailTag.trim().length !=0 && passwordTag.trim().length != 0 && nome.trim().length != 0)  {
       return criarUsuario(nome,emailTag,passwordTag);
   } else {
      alert("Email ou senha inválido,verifica os dados")
      return false;
    }
}


function criarUsuario(nome,emailTag,passwordTag){
   try {
    const user=createUser(nome,emailTag,passwordTag);
    salvarUsuarioBanco(user);0
    return true;
   } catch (error) {
     alert(error.message)
     return false;
   }
}