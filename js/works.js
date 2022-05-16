$(document).on("click", "img", function(){
    if($(this).attr("to")){
        window.open($(this).attr("to"));
    }
    
});