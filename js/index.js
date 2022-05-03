
var i = 0;

$(".container").hide();

let iv = setInterval(function(){
    let container = document.querySelector(".loader");
    
    let top = Math.floor(Math.random() * 90);
    let left = Math.floor(Math.random() * 90);
    const alt = '<div class="alert" style="top: ' + top + '%; left: ' + left + '%;"' + '><div class="alert-text"><p>宣伝</p><p>APPEAL</p></div></div>'
    let a = document.createElement("div");
    a.innerHTML = alt
    container.appendChild(a);
    i++;
    if(i > 40){
        clearInterval(iv);
        $(".loader").fadeOut(1000);
        $(".container").delay(1000).fadeIn(1000);
    }
}, 50);