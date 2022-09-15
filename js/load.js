const lines = '<div class="title">                <p>LOADING</p>            </div>';

const pcHeight = window.screen.height;
const pcWidth = window.screen.width;

let loading = function(){
    let container = document.querySelector(".loader2");
    
    let a = document.createElement("div");
    a.className = "line";
    let insertalt = "";
    for(let height = 0; height < pcHeight * 3; height += 70){
        insertalt += lines;
    }

    a.innerHTML = insertalt;

    container.appendChild(a);
}


$(document).on("click", ".btn", function(){
    let to =  $(this).attr("to");

    let loadiv = setInterval(loading, 50);
    $(".loader-mask").addClass("loading");

    let default_time = 900;
    let plus_time = 300 * Math.floor(document.body.clientWidth / 600);
    default_time += plus_time;

    setTimeout(function(){
        clearInterval(loadiv);
        $(`a[href='${to}.html']`)[0].click();
    }, default_time);
});


$(document).on("ready", function(){
    $(".loader-mask").removeClass("loading");
    $(".line").remove();
});



history.pushState(null, null, location.href);
window.addEventListener('popstate', (e) => {
  setTimeout(() => {
    window.location.reload()
  })
});