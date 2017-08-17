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