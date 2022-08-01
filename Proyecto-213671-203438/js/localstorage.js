$(document).ready(function(){
    $("#box-form").submit(function(){
        var txt_nombre = $("#txt-nombre").val();
        var txt_mail = $("#txt-mail").val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem("nombre",txt_nombre);
        localStorage.setItem("mail",txt_mail);
    });

    var txt_nombre = localStorage.getItem("nombre");
    var txt_mail =localStorage.getItem("mail");
    //window.location="index2.html";

    if(txt_nombre != null && txt_nombre != ""){
        //llamamos al documento .html
        window.location = "index2.html";
    }
});

