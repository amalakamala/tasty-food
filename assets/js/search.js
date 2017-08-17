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
	    		response.restaurants.forEach(function(e){
	    			//console.log(e.restaurant); 
	    			//console.log(e.restaurant.name); 
	    			$('.imprime').append(`
						<div class="col s4 caja-resultados" id="${e.restaurant.id}">
							<a href="#" class="footer-fixed" id="img-${e.restaurant.id}">
								<img src="${e.restaurant.featured_image}" class="responsive-img" alt="">
							</a>
							<div class="texto-resultado">

								<div class="row">
									<div class="col s10 col-resultado">
										<p class="nombre-rest">${e.restaurant.name}</p>
									</div>
									<div class="col s2 col-resultado">
										<a href="#" id="btn-${e.restaurant.id}"><i class="fa fa-cutlery" aria-hidden="true"></i></a>
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

	    			/* COMPARAR PRECIOS */
	    			//ACÁ LLAMO POR EL ID
	    			var abierto = false;
					$('#btn-'+e.restaurant.id).click(function(){
						 if (!abierto) {
							$('.footer-comparacion').removeClass('hide');
							$('#name-rest-uno').empty();
							$('#name-rest-uno').append(`${e.restaurant.name}`);
							$('#cocina-uno').empty();
							$('#cocina-uno').append(`${e.restaurant.cuisines}`);
							$('#costo-uno').empty();
							$('#costo-uno').append(`${e.restaurant.average_cost_for_two}`);
							$('#valor-uno').empty();
							$('#valor-uno').append(`${e.restaurant.user_rating.aggregate_rating}`);
                			abierto = true;
              			}else {
							$('#name-rest-dos').empty();
							$('#name-rest-dos').append(`${e.restaurant.name}`);
							$('#cocina-dos').empty();
							$('#cocina-dos').append(`${e.restaurant.cuisines}`);
							$('#costo-dos').empty();
							$('#costo-dos').append(`${e.restaurant.average_cost_for_two}`);
							$('#valor-dos').empty();
							$('#valor-dos').append(`${e.restaurant.user_rating.aggregate_rating}`);
                			abierto = false;
              			}
              			$('.close').click(function(){
              				$('.footer-comparacion').addClass('hide');
              			});
					});


                    $('#img-'+ e.restaurant.id).click(function(event){
                    	$('.section-img-foter').removeClass('hide');
                    	$('#imprimeFooter').empty();
                    	$('#imprimeFooter').append(`
                        	<div class="titleFooter center">
                                <h6>${e.restaurant.name}</h6>
                                <a href="#" class="heart" id="fav-${e.restaurant.id}"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                <a href="#" class="close">x</a>
                            </div>
                            <div class="row">
	                            <div class="col s12">
	                                <div class="datosFooter center-align">
	                                    <h6>Adress</h6>
	                                    <p>${e.restaurant.location.address}</p>
	                                    <h6>Price</h6>
	                                   	<p>${e.restaurant.average_cost_for_two}</p>
	                                    <h6>Rating</h6>
	                                    <p>${e.restaurant.user_rating.aggregate_rating}</p>
	                                </div>
	                            </div>
                            </div>
                        `);
              			$('.close').click(function(){
              				$('.section-img-foter').addClass('hide');
              			});                        
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
