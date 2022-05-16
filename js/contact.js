$(document).on("click", ".to-foreign", function(){
    let to =  $(this).attr("to");
    window.open(to);
});

$(document).on("click", ".email", function(){
    $(this).find(".emailTitle").toggleClass("emailUp");
    $(this).find(".mymail").toggleClass("emailDown");
});