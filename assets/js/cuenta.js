$(document).ready(function() {
    //$(".button-collapse").sideNav();
	/*Validación de cuenta*/
	var correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var contra = /^[0-9]+(\.[0-9])?$/;

	$(".crear").click(function(){			

		/*var nombre = $("#name").val(); 
		var email = $("#email").val();
        var pass = $("#password").val();

        if(nombre == "" || nombre == contra){
           $(".mensaje").append('<div id="mensaje" class="errores">Ingrese nombre</div>');           
               return false;
        }else{
            $("#mensaje").remove();
            localStorage.setItem('nom', nombre);
            console.log(nombre);
        }
        if(email == "" || correo.test(email) == false){
            $(".mensaje1").append('<div id="mensaje1" class="errores">Ingrese correo</div>');
               return false;
        }else{
            $("#mensaje1").remove();
            localStorage.setItem('correo', email);
            console.log(email);
        }
        if(pass == "" || contra.test(pass) == false){
            $(".mensaje2").append('<div id="mensaje2" class="errores">Ingrese sólo números</div>');
               return false;
        }else{
            $("#mensaje2").remove();
            localStorage.setItem('contra', pass);
            console.log(pass);
        } 

        return true; */
	})

	/*local storage*/
	var nombre2 = localStorage.getItem('nom');
	var email2 = localStorage.getItem('correo');
	var pass2 = localStorage.getItem('contra');
	
});