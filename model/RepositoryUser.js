
var allUser = [];
function getAllUser(){
    $(function(){
        $.get("https://jsonplaceholder.typicode.com/users",function( data){
            data.forEach(element => {
            var user = new User(element.id,element.name,element.username,element.email)
            allUser.push(user)
            });
            
            console.log(allUser)
            return allUser;
       }).catch((e)=>{
        console.log(e.status)
    })
});
}




