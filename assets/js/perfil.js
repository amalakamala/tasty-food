$(document).ready(function() {
    $(".modal-upload").hide();
    $("#guardar").click(function() {
        $(".modal-upload").hide();
    });
    $(".button-upload").click(function(){
        $(".modal-upload").show();
    })
    /*local storage*/
    /*** Acá llamas local storage pero se puede poner de inmediato el el value de los input de cuenta ***/
    var nombre2 = localStorage.getItem('nom'); /*llamada del los datos guardados en el local storage*/
    var email2 = localStorage.getItem('correo'); /*llamada del los datos guardados en el local storage*/
    var pass2 = localStorage.getItem('contra'); /*llamada del los datos guardados en el local storage*/
    /*
    Así puedes dejar pre llenado los campos de ingreso de login: 
    $('#name2').val(localStorage.getItem('nom'));
    $('#password2').val(localStorage.getItem('contra'));
    */
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
        } 
        return true;
    })
    /*Agregado de los datos en perfil*/
    /* Se imprime por pantalla en el index llamado perfil, los datos del nombre y del correo del usuario en los div con clase
    box-a y box-b*/
    $(".box-a").append("Nombre: "+nombre2);
    $(".box-b").append("Email: "+email2);
    /**Parte de subir imagen**/
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