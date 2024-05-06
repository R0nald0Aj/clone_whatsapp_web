class Message{
    nomeRemetente ="";
    nomeDestinatario ="";
    horarioMensagem ="";
    isImage = false;
    message =""

    constructor(nomeRemetente,nomeDestinatario,horarioMensagem,isImage,message){
        this.nomeRemetente = nomeRemetente,
        this.nomeDestinatario =nomeDestinatario,
        this.horarioMensagem =horarioMensagem,
        this.isImage =isImage,
        this.message = message
    }
}