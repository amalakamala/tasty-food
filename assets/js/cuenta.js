$(document).ready(function() {
    $(".button-collapse").sideNav();
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
            localStorage.setItem('nom', nombre);
            console.log(nombre);
        }

        if(email == "" || !correo.test(email)){
            $("#mensaje1").fadeIn("slow");
               return false;
        }else{
            $("#mensaje1").fadeOut();
            localStorage.setItem('correo', email);
            console.log(email);
        }

        if(pass == "" || !contra.test(pass)){
            $("#mensaje2").fadeIn("slow");
               return false;
        }else{
            $("#mensaje2").fadeOut();
            localStorage.setItem('contra', pass);
            console.log(pass);
        } 

        return true; 

        $("#name").val(""); 
		$("#email").val("");
        $("#password").val("");
	})

	/*local storage*/
	var nombre2 = localStorage.getItem('nom');
	var email2 = localStorage.getItem('correo');
	var pass2 = localStorage.getItem('contra');
	
});