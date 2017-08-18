var photo_url = ''; //save pictures
$(document).ready(function () {
   $("#btn-upload").click(handleFileSelect);//handleFileSelect, extract the files on input
   $("#sign-session").click(saveToLocalStorage); //guarda a local storage
   getFromLocalStorage(); //obtener local storage
});
//This function save to local storage
function saveToLocalStorage() {
   if (typeof (Storage) !== "undefined") {//soporte del navegador
       if (photo_url != '') {//si la foto es diferente de vacìo
           localStorage.setItem('photo', photo_url);
       }         
   } else {
       //No hay soporte de navegador
       console.log('Sorry there is not support for local storage.')
   }
}
function getFromLocalStorage() {
   console.log('getting info for: ' + localStorage.getItem('#photo'));
   $('#photo').attr('src', localStorage.getItem('photo'));
}
//Function to save images in local storage
function handleFileSelect() {
   var files = $('#files')[0].files;
   // Gets the image selected on input and assign them to image. Get from https://www.html5rocks.com/en/tutorials/file/dndfiles/
   for (var i = 0, file; file = files[i]; i++) {
       // Si la imagen coincide, proseguir
       if (!file.type.match('image.*')) {
           continue;
       }
       var reader = new FileReader(); //object js to process the image
       // when load image
       reader.onload = (function (theFile) {
           return function (e) {
               // Render thumbnail.
               $('#photo').attr('src', e.target.result);//assign the image to the function
               photo_url = e.target.result;
           };
       })(file);
       // lee la imagen como una URL
       reader.readAsDataURL(file);
   }
}
