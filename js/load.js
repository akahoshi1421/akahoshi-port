const lines = '<div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>';


let loading = function(){
    let container = document.querySelector(".loader2");
    
    let a = document.createElement("div");
    a.className = "line";
    a.innerHTML = lines
    container.appendChild(a);
}


$(document).on("click", ".btn", function(){
    let classes =  $(this).attr("class");

    let loadiv = setInterval(loading, 50);
    $(".loader-mask").addClass("loading");

    setTimeout(function(){
        clearInterval(loadiv);
        let classlist = classes.split(" ");
        for(let thisclass of classlist){
            switch(thisclass){
                case "about":
                    $("a[href='about.html']")[0].click();
                    break;
                case "contact":
                    $("a[href='contact.html']")[0].click();
                    break;
                case "works":
                    $("a[href='works.html']")[0].click();
                    break;
                case "skills":
                    $("a[href='skills.html']")[0].click();
                    break;
            }
        }
    }, 1200);
});
