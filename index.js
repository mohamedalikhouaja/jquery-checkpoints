$(document).ready(function(){
    $("#main  div div").hover(function(){
        $(this).fadeTo("opacity",0.5);
        $(this).find("button").fadeTo("opacity","100");
    },
    function(){
        $(this).fadeTo("opacity",1);
        $(this).find("button").fadeTo("opacity","0");
    } 
    )
});