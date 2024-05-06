 function showLoading(){
     
    $(function(){
       var divMain = $('<div>',{
            class :"position-fixed  h-100 w-100 top-0 end-5 d-flex flex-column align-items-center justify-content-center bg-loading",
            id : "loadding",
        })
     
     var divLoading = $('<div>',{
            class : "spinner-border m-4",
            style :  "color: rgb(23, 148, 23);",
            ariaHidden:"true"

        }).append();

    var text  = $('<strong>',{
        role:"status", 
        style:"color: rgb(231, 236, 231);",
        text :"Loading"  
    })

    $('body').append(divMain.append(divLoading ).append(text))
    
    })
 
 }

 function hideLoading(){
     
    $('#loadding').remove()
 }