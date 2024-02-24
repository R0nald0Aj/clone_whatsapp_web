 class Post{
    userId = ""; 
    id;
    title;
    body;

    constructor(nome,id,title,body){
        this.userId =id;
        this.id =id;
        this.title= title;
        this.body = body;
    }
}

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

const url = "127.0.0.1:5500/home.html/"
var m =""

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

})


function createLiUser(user){
    $("#ul_name_contatc").append(
        `<li class="list-group-item d-flex justify-content-between align-items-center" id="li-user">
        <a id="li-user" href=# onclick=getUser(${user.id}) >${user.name}</a>
        <span class="badge bg-primary rounded-pill">${user.id}</span>`
    )
}

function getUser(user){
       console.log(user)
       m = user;
       $('#contactName').text(user)
    
}


