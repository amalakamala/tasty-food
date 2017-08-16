$(document).ready(function() {

	$('select').on('change',function(){
		alert(this.value);
	});

	var cousine = "italian";
	var apiKey = '6cc3db9f6f73c4a770e8ddde5284d1fb'; 
	//var entityId = '83';

	var callbacksAjaxSearchItalian = function(){
    	$.ajax({
    		url:'https://developers.zomato.com/api/v2.1/search',
      		type: 'GET',
      		beforeSend: function(request) {
				request.setRequestHeader("user-key", apiKey);
			},
      		dataType: 'json',
      		data:{
      			'entity_id' : ciudad,
      			'entity_type': 'city',
      			'cuisines' : cousine
      		}
    	})
    	.done(function(response){
    		//console.log(response);
    		response.restaurants.forEach(function(e){
    			//console.log(e.restaurant); 
    			//console.log(e.restaurant.name); 
    			$('.imprime').append(`<p>${e.restaurant.name}</p>`);
    		});
    	})
    	.fail(function(error){
    		//console.log(error);
            alert('Fail');
        })
        .always(function() {
            console.log('OK');
        })				
	}
	callbacksAjaxSearchItalian();
});