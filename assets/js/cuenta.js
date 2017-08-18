$(document).ready(function() {
    $(".button-collapse").sideNav();
    /*Validación de creación de cuenta*/
    var nombreIngreso = /^([a-z]|[A-Z])+ ([a-z]|[A-Z])+$/;
    var correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/; //valido para cualquier correo
    var contra = /^[a-zA-Z0-9.\-_$@*!]{3,20}$/;  //contraseña con num y letras max 20 dígitos
    $(".crear").click(function(){         
        var nombre = $("#name").val(); 
        var email = $("#email").val();
        var pass = $("#password").val();
        /*Vane lo bkn de las expresiones regulares que por defecto si esta vacia
        te tira que es incorrecta
        */
        if(!nombreIngreso.test(nombre)){
           $("#mensaje").fadeIn("slow");           
               return false;
        }else{
            $("#mensaje").fadeOut();
            localStorage.setItem('nom', nombre);/*ingreso de datos al local storage*/
            console.log(nombre);
        }
        if(!correo.test(email)){
            $("#mensaje1").fadeIn("slow");
               return false;
        }else{
            $("#mensaje1").fadeOut();
            localStorage.setItem('correo', email);/*ingreso de datos al local storage*/
            console.log(email);
        }
        if(!contra.test(pass)){
            $("#mensaje2").fadeIn("slow");
               return false;
        }else{
            $("#mensaje2").fadeOut();
            localStorage.setItem('contra', pass);/*ingreso de datos al local storage*/
            console.log(pass);
            $("#btn-crear").attr("href","login.html");
        } 
        return true; 
        $("#name").val(""); 
        $("#email").val("");
        $("#password").val("");
    })
    /*local storage*/
    /*** Acá llamas local storage pero se puede poner de inmediato el el value de los input de cuenta ***/
    var nombre2 = localStorage.getItem('nom'); /*llamada del los datos guardados en el local storage*/
    var email2 = localStorage.getItem('correo'); /*llamada del los datos guardados en el local storage*/
    var pass2 = localStorage.getItem('contra'); /*llamada del los datos guardados en el local storage*/


    $('#name2').val(localStorage.getItem('nom'));
    $('#password2').val(localStorage.getItem('contra'));
    /*Validación del login*/
    $(".ingresar").click(function(){
        var nuevoNom = $("#name2").val();
        var nuevoPass = $("#password2").val();
        if(nuevoNom != nombre2){
             $("#mensaje3").fadeIn("slow");          
               return false;
        }else{
            $("#mensaje3").fadeOut();
            console.log(nuevoNom, nombre2);
        } 
        if(nuevoPass != pass2){
             $("#mensaje4").fadeIn("slow");          
               return false;
        }else{
            $("#mensaje4").fadeOut();
            console.log(nuevoPass, pass2);
            $(".ingresar").attr("href","search.html");
        } 
        return true;
    })
    /*Agregado de los datos en perfil*/
    /* Se imprime por pantalla en el index llamado perfil, los datos del nombre y del correo del usuario en los div con clase
    box-a y box-b*/
    $(".box-a").append(nombre2);
    $(".box-b").append(email2);
    /**------PARTE DE SUBIR IMG------**/
    $('#seleccion').click(function(e){
        e.preventDefault();    
        $('#file').click();
    })
    $('input[type=file]').change(function(){
        var file = (this.files[0]);
        var reader = new FileReader();
        $('#info').text('');
        $('#info').text(file);
        reader.onload = function(e){
            $('#box img').attr('src', e.target.result);         
        }
        reader.readAsDataURL(this.files[0]);
    })
});
