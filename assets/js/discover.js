$(document).ready(function() {
	$(".button-collapse").sideNav();

	$('#select-cuisines').on('change',function(){
		//La cocineria será variabla por eso se ingresa lo del select
		//var ciudad =  "83";
		//console.log(ciudad);
		var cousine = $('#select-cuisines').val();
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
	      			'entity_id' : "83",
	      			'entity_type': 'city',
	      			'cuisines' : cousine
	      			//'cuisines' esta comentado, porque deseo que me traiga todo indiferente el tipo.	      			
	      		}
	    	})
	    	.done(function(response){
	    		//console.log(response);
	    		//.empty() me borra lo anterior para realizar una nueva busqueda
	    		$('.imprimeme').empty();
	    		response.restaurants.forEach(function(e){
	    			//console.log(e.restaurant); 
	    			console.log(e.restaurant.name); 
	    			$('.imprimeme').append(`
	    				<span> info: ${e.restaurant.name} </span>
	    				<p> lat: ${e.restaurant.location.latitude}, long: ${e.restaurant.location.longitude}</p>
						<br>
	    			`);
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

/*
function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});
	/
	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	window.addEventListener("load",buscar);/

	var latitud, longitud;

	var funcionExito = function(posicion){
		latitud= posicion.coords.latitude;
		longitud= posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat: latitud, lng: longitud},
			animation: google.maps.Animation.DROP,
			map: map,
			icon: "assets/img/icon.png"
		});	
	map.setZoom(15);
	map.setCenter({lat:latitud, lng:longitud});
	}

	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tus cocinerias")
	}

google.maps.event.addDomListener(window, 'load', initialize);


}
*/
function initMap() {
	//italian
	var golfo = {
		info: '<strong>Golfo di Napole</strong><br>',
		lat: -33.4555240000,
		long: -70.6061760000
	};
	var burguesia = {
		info: '<strong>La burguesia</strong><br>',
		lat: -33.4204027778,
		long: -70.6096944444
	};
	var bistrot = {
		info: '<strong>Le bistrot</strong><br>',
		lat: -33.4208361451,
		long: -70.6098714843
	};
	var maestranza = {
		info: '<strong>La Maestranza</strong><br>',
		lat: -33.3946816803,
		long: -70.5790374801
	}
	var taipai = {
		info: '<strong>Pad Thai</strong><br>',
		lat: -33.4307700850,
		long: -70.6190942600
	}
	var tiramisu = {
		info: '<strong>Tiramisú</strong><br>',
		lat: -33.4144441433, 
		long: -70.5974679440
	}
	var baco = {
		info: '<strong>Baco</strong><br>',
		lat: -33.4204259025, 
		long: -70.6105121970
	}
	var uncle = {
		info: '<strong>Uncle Fletch</strong><br>',
		lat: -33.4328932224, 
		long: -70.6335631013
	}
	var fuente = {
		info: '<strong>Fuente Mardoqueo</strong><br>',
		lat: -33.4389016884, 
		long: -70.6743859872
	}
	var vietnam = {
		info: '<strong>Vietnam Discovery</strong><br>',
		lat: -33.4295814635, 
		long: -70.6419450045
	}
	var daniel = {
		info: "<strong>Daniel's Bakery & Cafe</strong><br>",
		lat: -33.4402272720, 
		long: -70.5766798183
	}
	var ciudadv = {
		info: '<strong>Ciudad Vieja</strong><br>',
		lat: -33.4332337366, 
		long: -70.6346557662
	}
	var ostia = {
		info: '<strong>De La Ostia</strong><br>',
		lat: -33.4227706396, 
		long: -70.6123803556
	}
	var vapiano = {
		info: '<strong>Vapiano</strong><br>',
		lat: -33.4013234083, 
		long: -70.5779914185
	}
	var diana = {
		info: '<strong>La Diana</strong><br>',
		lat: -33.4506880000, 
		long: -70.6490770000
	}
	var antojeria = {
		info: '<strong>La Antojería</strong><br>',
		lat: -33.4338229880, 
		long: -70.6207719818
	}
	var cabras = {
		info: '<strong>Las Cabras</strong><br>',
		lat: -33.4179728014, 
		long: -70.6036956981
	}
	var tea = {
		info: '<strong>Tea Connection</strong><br>',
		lat: -33.4225963046, 
		long: -70.6135149300
	}
	var azotea = {
		info: '<strong>Azotea Matilde</strong><br>',
		lat: -33.4319050000, 
		long: -70.6344370000
	}
	var horizon = {
		info: '<strong>New Horizon</strong><br>',
		lat: -33.4380256953, 
		long: -70.6450966001
	}




	var locations = [
      [golfo.info, golfo.lat, golfo.long, 0],
      [burguesia.info, burguesia.lat, burguesia.long, 1],
      [bistrot.info, bistrot.lat, bistrot.long, 2],
      [maestranza.info, maestranza.lat, maestranza.long, 3],
      [taipai.info, taipai.lat, taipai.long, 4],
      [tiramisu.info, tiramisu.lat, tiramisu.long, 5],
      [baco.info, baco.lat, baco.long, 6],
      [uncle.info, uncle.lat, uncle.long, 7],
      [fuente.info, fuente.lat, fuente.long,8],
      [vietnam.info, vietnam.lat, vietnam.long, 9],
      [daniel.info, daniel.lat, daniel.long, 10],
      [ciudadv.info, ciudadv.lat, ciudadv.long, 11],
      [ostia.info, ostia.lat, ostia.long, 12],
      [vapiano.info, vapiano.lat, vapiano.long, 13],
      [diana.info, diana.lat, diana.long, 14],
      [antojeria.info, antojeria.lat, antojeria.long, 15],
      [cabras.info, cabras.lat, cabras.long, 16],
      [tea.info, tea.lat, tea.long, 17],
      [azotea.info, azotea.lat, azotea.long, 18],
      [horizon.info, horizon.lat, horizon.long, 19]

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: new google.maps.LatLng(-33.4319535, -70.5140595),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}

