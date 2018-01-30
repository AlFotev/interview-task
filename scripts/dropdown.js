$(function(){
    $('#drop').click(function(event){
        event.preventDefault();
        $(this).parent().toggleClass("dropup");
        $('.hide').toggle();
    })  
    });