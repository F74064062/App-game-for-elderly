var page1 = document.getElementById('page1');
var goal = document.getElementById('goal');
var why =document.getElementById('why');
var how = document.getElementById('how');
var mem1 = document.getElementById('member1');
var mem2 = document.getElementById('member2');
var hide = document.getElementById('need_hide');
var next = document.getElementById('next_btn');
var prev = document.getElementById('prev_btn');

var count = 0;


intro();

function intro(){
    page1.addEventListener('click', function(){
        page1.style.visibility = "hidden";

    })
    goal.addEventListener('click', function(){
        page1.style.visibility = "visable";
        page1.innerHTML=
        "<img src='./object/14.png' id='content_title'>\
             <img src='./object/17.png' id='content_bg'>\
             <div id ='goal_txt'><b>目的</b></div>\
             <div id='content'>讓銀髮族多出外走走，預防慢性疾病，擁有健康的身心靈。</div>";
    });
    why.addEventListener('click', function(){
        page1.style.visibility = "visible";
        page1.innerHTML = 
        "<img src='./object/15.png' id='content_title'>\
         <img src='./object/18.png' id='content_bg'>\
         <div id ='why_txt'><b>為甚麼?</b></div>\
         <div id='content'>我們想給銀髮族們最健康快樂的老年生活，越活越年輕！</div>";
    });
    how.addEventListener('click', function(){
        page1.style.visibility = "visible";
        page1.innerHTML = 
        "<img src='./object/16.png' id='content_title'>\
         <img src='./object/19.png' id='content_bg'>\
         <div id ='how_txt'><b>如何</b></div>\
         <div id='content'>以任務的方式，誘導銀髮族出外互動，任務達成後，給予獎勵。</div>";
    });
}

