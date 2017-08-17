$(document).ready(function() {
	//$(".button-collapse").sideNav();

	$('#select-city').on('change',function(){
		//La ciudad será variabla por eso se ingresa lo del select
		var ciudad =  $('#select-city').val() ;
		console.log(ciudad);
		var cousine = "italian";
		var apiKey = '6cc3db9f6f73c4a770e8ddde5284d1fb'; 
		//var entityId = '83';

		/*------- Callbacks -------*/
	    	$.ajax({
	    		url:'https://developers.zomato.com/api/v2.1/search',
	      		type: 'GET',
	      		//beforeSend es para pasar la seguridad con el API
	      		beforeSend: function(request) {
					request.setRequestHeader("user-key", apiKey);
				},
	      		dataType: 'json',
	      		data:{
	      			'entity_id' : ciudad,
	      			'entity_type': 'city'
	      			//'cuisines' : cousine
	      			//'cuisines' esta comentado, porque deseo que me traiga todo indiferente el tipo.	      			
	      		}
	    	})
	    	.done(function(response){
	    		//console.log(response);
	    		//.empty() me borra lo anterior para realizar una nueva busqueda

	    		$('.imprime').empty();
	    		$('#imprimeFooter').empty();

	    		response.restaurants.forEach(function(e){
	    			//console.log(e.restaurant); 
	    			console.log(e.restaurant); 
	    			$('.imprime').append(`
						<div class="col s4 caja-resultados" id="${e.restaurant.id}">
							<a class="footer-fixed" id="img-${e.restaurant.id}">
								<img src="${e.restaurant.featured_image}" class="responsive-img" alt="">
							</a>
							<div class="texto-resultado">

								<div class="row">
									<div class="col s10 col-resultado">
										<p class="nombre-rest">${e.restaurant.name}</p>
									</div>
									<div class="col s2 col-resultado">
										<a id="btn-${e.restaurant.id}"><i class="fa fa-cutlery" aria-hidden="true"></i></a>
									</div>
								</div>	
								<div class="row">
									<div class="col s11 col-resultado">
										<p class="nombre-ubicacion">${e.restaurant.location.locality}</p>
									</div>
								</div>
							</div>
						</div>
	    			`);

	    			$('#img-' + e.restaurant.id).click(function(event){
	    				$('#imprimeFooter').append(
	    					`<div class="container">
									<div class="row">
										<div class="col s12">
											<div class="titleFooter">
												<h3>${e.restaurant.name}</h3><span><a href=""><i class="fa fa-heart" aria-hidden="true"></i></a></span>
											</div>
											<div class="datosFooter center-align">
												<h4>Adress</h4>
												<p>${e.restaurant.location.address}</p>
												<h4>Price</h4>
												<p>${e.restaurant.average_cost_for_two}</p>
												<h4>Rating</h4>
												<p>${e.restaurant.user_rating.aggregate_rating}</p>
											</div>
										</div>
									</div>
								</div>
	    					`);
	    			});
	    		});
	    	})
	    	.fail(function(error){
	    		//console.log(error);
	            alert('Fail');
	        })
	        .always(function() {
	            console.log('OK');
	        })				

	});
});