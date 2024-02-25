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

function getUser(user){
    console.log(user.name)
}

const pessoa = new User('teestt',"tet","teest","rwrw");
getUser(pessoa);
