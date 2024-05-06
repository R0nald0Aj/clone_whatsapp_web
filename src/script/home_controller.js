
const contact =''
usuarios = []
usuarioLogado ={}
var showConversationList = true

async function main(){
  var uid = verifyIsUserLogged()
  console.log(uid) 
  findAllConversations(listaDeConversa)
}
  
$( function(){
    main()

   // userLogged();

    // $.get("https://jsonplaceholder.typicode.com/users",function(data){
    //        data.forEach(element => {
    //        var user = new User(element.id,element.name,element.username,element.email)
    //            createLiUser(user)
    //        });

    // }).catch((e)=>{
    //       console.log(e.status)
    // })

    $('#bt_send_messager').click(()=>{
        var  myMessager = $('#input_messager').val()
         
         if(myMessager.trim().length  != 0){
            var sendedMessage = new Message(usuarioLogado,contact, "12:32",false,myMessager)
            sendMessageToBd(sendedMessage)
         //    $('#ul_messeger').append(`
         //    <li id="list_messeger" class="border w-75 rounded p-2 list-group-item float-start">${myMessager}</li>`
         // )
         myMessager = ""
         $('#input_messager').val("")
         console.log(conversas)
         }else{
            alert("Digite uma mensagem valida")
         }
    })

    $("#btn_sair").click(function(){
      logutUserController()
    })


    $('#btn-addreessbook').click(() =>{
      $("#ul_name_contatc").empty()
    
       if (showConversationList) {
          //mostrarLista
          findAllContacts(usuarios)
          showConversationList = !showConversationList
          $('#title_list').text('Contatos')
          
       }else{
         findAllConversations(listaDeConversa) 
         showConversationList = !showConversationList
         $('#title_list').text('Conversas')
       }
    
     
    });

})


function createLiUserContacts(user){
   var span = $('<span>',{
      class:"badge bg-success rounded-pill",
      text :`${user.email}`
   })
   
   var link = $('<a>',{
      id: 'li-user',
      href: '#',
      text : `${user.nome}`,
   });
   

  var liUser  = $('<li>',{
        id: 'lis',
        class: "lis list-group-item d-flex justify-content-between align-items-center",
        click: ()=>{clickContactCreateConversation(user)}
     })  
     
     $("#ul_name_contatc").append(
        liUser.append(link ,span)
      )
   //  $("#ul_name_contatc").append(
   //      `  <li class="lis list-group-item d-flex justify-content-between align-items-center" 
   //         id='${user.id} onclick='getId(${user.id})'>
   //           <a id="li-user"  href="#">${user.nome}</a>
   //          <span class="badge bg-success rounded-pill">${user.email}</span>            
   //      `
   //  )
}
 
function createLiConversations(conversation){
       var span = $('<span>',{
      class:"badge bg-success rounded-pill",
      text :`${conversation.msg}`
   })
   
   var link = $('<a>',{
      id: 'li-user',
      href: '#',
      text : `${conversation.remetenteNome}`,
   });
   

  var liUser  = $('<li>',{
        id: 'lis',
        class: "lis list-group-item d-flex justify-content-between align-items-center",
        click: ()=>{getUniqueConversation(conversation.idDestinatario)}
     })  
     
     $("#ul_name_contatc").append(
        liUser.append(link ,span)
      )
}

 //TODO criar metodo para buscar conversas no bando quando clicado em um elemento da lista de conversa
 // criar verificação de lista de conversar vazias
 // criar metodo para iniciar uma conversa 
function clickContactCreateConversation(contact){
          
      console.log(contact)
        const actualConversa =new Conversa( 
       )
      
       $('#contactName').text(contact.nome)
       contact = actualConversa.nomeDestinatario
       escolhaLiConversa(actualConversa.messages)
       
       // createDatabaseConversation(actualConversa)
       // criar conversar e buscar mensagen da conver 
}

function getUniqueConversation(idConversation){
   console.log(idConversation)
     const conversa  = listaDeConversa[Number.parseInt(idConversation)]
     console.log(conversa)
      
     $('#contactName').text(contact.de)

}
   
async function getUserData(user){
   console.log(user)
   const resuult =  await findUserById(user)
  
   usuarioLogado = {
      email : resuult.data().email,
      fotoPerfil : resuult.data().fotoPerfil,
      nome : resuult.data().nome
  }
  
   if (usuarioLogado != null ) {
      
      $('#name_user').text(usuarioLogado.nome)
      usuarios  = await getAllDocs()
   }
}
 

function findAllContacts(userList){
   userList.forEach((user)=> {
      if(user.email === resuult.email){return}
       createLiUserContacts(user)
   });
}

function findAllConversations(listaDeConversa){
   listaDeConversa.forEach((convers)=>{
      createLiConversations(convers)
   });
}

function escolhaLiConversa(myMessager){
   for (var message in myMessager) {
      if ( usuarioLogado === myMessager[message].nomeRemetente) {
          createLiConversation(myMessager[message].message)
      } else {
          createLiConversationDestinatario(myMessager[message].message)
      }
   }
   
}

 function createLiConversation(mensagem){
  
      console.log(mensagem)
         var liMessage = $('<li>',{
            class :"border w-75 rounded p-2 list-group-item float-start",
            id:"list_messeger",
            text:mensagem
         })
         $('#ul_messeger').append(liMessage)
      
}

function createLiConversationDestinatario(mensagem){
         var liMessage = $('<li>',{
            class :"border w-75 my-3 list-group-item rounded p-2 float-end",
            id:"list_messeger",
            text:mensagem
         })
         $('#ul_messeger').append(liMessage)
      
}


listaDeConversa =[
   {   
      idDestinatario :"197m2UPLYugLvPhz1ETRS7hZ3zF3",
      idRemetente : "321",
      remetenteNome :"Bob",
      msg :"oi",
      fotoUrl :"",
      tipo:"text",
      urlImagenConversa :"",
      data :"12/32/12",
   },
   {
      idDestinatario :"",
      idRemetente : "F1H88k3BuwSuy6rE9JTdDTIas9u2",
      remetenteNome :"Miau Silva",
      msg :"oi",
      fotoUrl :"",
      tipo:"text",
      urlImagenConversa :"",
      data :"12/32/12",
    
   },
   {
      idDestinatario :"rM3DBslgMMeVYagqrCbLI2p1Anz2",
      idRemetente : "321",
      remetenteNome :"tuth",
      msg :"oi",
      fotoUrl :"",
      tipo:"text",
      urlImagenConversa :"",
      data :"12/32/12",
    
   }
]