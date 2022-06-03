var skillCnt = 0;

const SKILLDISCRIPT = [
    [
        {
            title: "Python",
            discript: "大学で学びました。データ解析、WEB開発(サーバサイド)、ツール作成等幅広い範囲で使っています。"
        },
        {
            title: "JavaScript",
            discript: "大学で学びました。jQueryも使えます。最近大学のオンライン教育システムに様々な機能を追加するWEBサイトのChrome拡張機能を作成し、100名を超えるユーザが利用していることを確認しています。(ChromeWebStoreより)"
        },
        {
            title: "HTML+CSS",
            discript: "大学で基礎的な範囲を学びました。最近は独学でCSSアニメーションやSass等発展的な範囲を勉強し、当サイトでもそこで学んだ技術をふんだんに使っています。"
        }
    ],
    [
        {
            title: "PHP",
            discript: "独学で学びました。WEB開発全般に興味があるのでバックエンドを勉強するために学習を行いました。"
        },
        {
            title: "Ruby",
            discript: "独学で学びました。Ruby on Rails(後述)を勉強するために学習を行いました。"
        },
        {
            title: "C",
            discript: "大学で学びました。アルゴリズムやOSの勉強、組み込みプログラミングに使用しています。"
        }
    ],
    [
        {
            title: "C#(Unity)",
            discript: "高校の時軽く学びました。大学でも講義で利用したので軽くではありますが触れます。"
        },
        {
            title: "Django",
            discript: "大学で学びました。バックエンドで一番使えます。スケジュール管理アプリなど様々なアプリケーションを作っています。"
        },
        {
            title: "Ruby on Rails",
            discript: "独学で学びました。Django以外のWebアプリケーションフレームワークがどのようになっているのかを知るために学習を行いました。"
        }
    ]
];

const INSERTHTML = '<div class="myskill-discript tpskill" cnt="1">                            <div class="myskill-discript-mask">                                <p class="title"></p><p class="discript"></p>                            </div>                        </div>                        <div class="myskill-discript midskill" cnt="2">                            <div class="myskill-discript-mask">                                <p class="title"></p><p class="discript"></p>                            </div>                        </div>                        <div class="myskill-discript btmskill" cnt="3">                            <div class="myskill-discript-mask">                                <p class="title"></p><p class="discript"></p>                           </div>                        </div>';

$(document).on("click", ".prevnext", function(){
    let which = "";
    if($(this).attr("which") == "prev"){
        skillCnt--;
        if(skillCnt == -1) skillCnt = 2; 
        which = "prev";
    }
    else{
        skillCnt++;
        which = "next";
    }

    $(".discription-container").empty().append(INSERTHTML);

    for(let i = 0; i < 3; i++){
        let txt = SKILLDISCRIPT[skillCnt % 3][i];
        $(`.myskill-discript[cnt=${i + 1}] .title`).text(txt.title);
        $(`.myskill-discript[cnt=${i + 1}] .discript`).text(txt.discript);
    }

    $(".myskill-discript").removeClass("prev next").addClass(which);
});

$(document).on("click", ".myskill-discript", function(){
    $(this).toggleClass("big");
});