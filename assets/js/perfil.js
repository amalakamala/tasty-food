$(document).ready(function() {
    $(".modal-upload").hide();
    $("#guardar").click(function() {
        $(".modal-upload").hide();
    });
    $(".button-upload").click(function(){
        $(".modal-upload").show();
    })    
});
