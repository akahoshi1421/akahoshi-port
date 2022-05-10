$(document).on("click", ".to-foreign", function(){
    let to =  $(this).attr("to");

    let loadiv = setInterval(loading, 50);
    $(".loader-mask").addClass("loading");

    setTimeout(function(){
        clearInterval(loadiv);
        window.location = to;
    }, 1200);
});

$(document).on("click", ".email", function(){
    $(this).find(".emailTitle").toggleClass("emailUp");
    $(this).find(".mymail").toggleClass("emailDown");
});