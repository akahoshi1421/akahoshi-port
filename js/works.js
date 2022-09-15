$(document).on("click", "img", function(){
    if($(this).attr("to")){
        window.open($(this).attr("to"));
    }
    
});

let nowTagList = [];

$(document).on("click", ".one-tag", function(){
    $(`.one-tag[data-class=${$(this).attr("data-class")}]`).toggleClass("tag-active");

    const a = $(this).attr("data-class");
    const dataClassComplete = $(".works-discription").map((i, n) =>{
        return $(n).attr("data-discription");
    });

    if($(this).hasClass("tag-active")){
        nowTagList.push(a);

        dataClassComplete.map((i, one) =>{
            if(one.split(" ").indexOf(a) == -1){
                $($(".works-discription")[i]).fadeOut(1000);
            };
        })
    }
    //消す時
    else{
        const index = nowTagList.indexOf(a);
        if(index == 0) nowTagList.shift();
        else nowTagList.splice(index, index);

        nowTagList.sort();
        console.log(nowTagList);

        //タグ全て消したときの処理
        if(nowTagList.length == 0){    
            $(".works-discription").fadeIn(1000);
        }
        else{
            dataClassComplete.map((i, one) =>{
                let splited = one.split(" ");
                splited.sort();
                const stringArraySplited = splited.reduce((sum, val) => {
                    return sum + val;
                });
                const stringNowTagList = nowTagList.reduce((sum, val) => {
                    return sum + val;
                });

                if(stringArraySplited.indexOf(stringNowTagList) != -1){
                    $(`.works-discription:nth-child(${i + 1})`).fadeIn(1000);
                }
            });
        }

        
    }
})