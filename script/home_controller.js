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



$(function(){
    $.get("https://jsonplaceholder.typicode.com/users",function( data){
           data.forEach(element => {
           var user = new User(element.id,element.name,element.username,element.email)
            $("#ul_name_contatc").append(
                ` <li class="list-group-item d-flex justify-content-between align-items-center" id="li-user">
                <a id="li-user" href="#">${user.name}</a>
                <span class="badge bg-primary rounded-pill">${user.id}</span> `
            )
           });

    }).catch((e)=>{
          console.log(e.status)
    })
   
     $("#li-user").click(function(){
          console.log("clicou")
          $("#lis").toggle('active')
     }) ;
})




