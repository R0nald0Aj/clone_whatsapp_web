class Conversa{
     idDestinatario ="";
     idRemetente= "";
     remetenteNome ="";
     msg ="";
     fotoUrl ="";
     tipo="";
     urlImagenConversa ="";
     data ="";

    constructor(idDestinatario,idRemetente,remetenteNome,msg,fotoUrl,tipo,urlImagenConversa,data){
       this.data =data
       this.fotoUrl = fotoUrl
       this.idDestinatario = idDestinatario
       this.idRemetente =idRemetente
       this.msg = this.msg
       this.remetenteNome = remetenteNome
       this.tipo = tipo
       this.urlImagenConversa =urlImagenConversa
    }
}