

const url = "127.0.0.1:5500/home.html/"
var m =""

class User {
    id ="";
    name ="";
    username ="";
    email = "";
    
    constructor(id,name,username,email){
        this.email=email;
        this.id = id;
        this.username = username;
        this.name = name
    }
}


$(function(){
    
    $.get("https://jsonplaceholder.typicode.com/users",function( data){
           data.forEach(element => {
           var user = new User(element.id,element.name,element.username,element.email)
               createLiUser(user)
           });

    }).catch((e)=>{
          console.log(e.status)
    })
   
    
    $("li").click(function(){
         $(this).toggleClass("active")
         if ($(this).hasClass('active')) {
            $('#li-user').css( "color" , "white" );
         } else {
            $('#li-user').css( "color" , "blue" );
         }
      }
    )

    $('#bt_send_messager').click(()=>{
        var  myMessager = $('#input_messager').val()
         
         if(myMessager.trim().length  != 0){
            $('#ul_messeger').append(`
            <li id="list_messeger" class="border w-75 rounded p-2 list-group-item float-start">${myMessager}</li>`
         )
         myMessager = ""
         $('#input_messager').val()
         console.log(myMessager)
         }else{
            alert("Digite uma mensagem valida")
         }
    })

})




function createLiUser(user){
    const userJson = JSON.stringify(user)
    $("#ul_name_contatc").append(
        `
            <li class="list-group-item d-flex justify-content-between align-items-center" id="li-user">
            <a id="li-user" href="#"onclick='getUser(${userJson})'>${user.name}</a>
            <span class="badge bg-primary rounded-pill">${user.id}</span>            
        `
    )
}

function getUser(user){
       console.log(user.id)
       $('#contactName').text(user.name)
}




 

    function sendMessager(){ 
        var  myMessager = $('#input_messager').val()
         
         if(myMessager.trim().length  != 0){
            $('#ul_messeger').append(`
            <li id="list_messeger" class="border w-75 rounded p-2 list-group-item float-start">${myMessager}</li>`
         )
         myMessager = ""
         $('#input_messager').val("")
         console.log(myMessager)
         }
        
 }  
    

