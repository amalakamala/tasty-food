$(document).ready(function() {
	/*Validación de cuenta*/
	var correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var contra = /^[0-9]+(\.[0-9])?$/;

	$(".crear").click(function(){			

		var nombre = $("#name").val(); 
		var email = $("#email").val();
        var pass = $("#password").val();

        if(nombre == "" || nombre == contra){
           $("#mensaje").fadeIn("slow");           
               return false;
        }else{
            $("#mensaje").fadeOut();
        }

        if(email == "" || !correo.test(email)){
            $("#mensaje1").fadeIn("slow");
               return false;
        }else{
            $("#mensaje1").fadeOut();
        }

        if(pass == "" || !contra.test(pass)){
            $("#mensaje2").fadeIn("slow");
               return false;
        }else{
            $("#mensaje2").fadeOut();
        } 

        return true; 
	})

});