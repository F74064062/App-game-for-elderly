var page1 = document.getElementById('page1');
var goal = document.getElementById('goal');
var why =document.getElementById('why');
var how = document.getElementById('how');
var mem1 = document.getElementById('member1');
var mem2 = document.getElementById('member2');
var hide = document.getElementById('need_hide');
var next = document.getElementById('next_btn');
var prev = document.getElementById('prev_btn');


member();
function member(){
    page1.addEventListener('click', function(){
        page1.style.visibility = "hidden";
        hide.style.visibility = "visible";
    })
    mem1.addEventListener('click', function(){
        page1.style.visibility = "visible";
        page1.innerHTML = 
        "<img src ='object/fan.jpg' id ='photo'>\
        <img src = 'object/brief.png' id = 'intro'>\
        <div id='name_txt'><b>/ 方藝璇</b></div>\
        <div id='intro_txt'>興趣 | 登山 探險 攀岩 看書<br>\
        專長 | 插畫 平面設計<br>\
        主要負責部分 | 訪談 美術設計<br>\
        </div>\
        ";
    });
    mem2.addEventListener('click', function(){
        page1.style.visibility = "visible";
        hide.style.visibility = "hidden";
        page1.innerHTML = 
        "<img src ='object/ting.jpg' id ='photo'>\
        <img src = 'object/brief.png' id = 'intro'>\
        <div id='name_txt'><b>/ 郭庭嘉</b></div>\
        <div id='intro_txt2'>興趣 | 追劇 KPOP<br>\
        專長 | Deep Learning<br>\
        主要負責部份 | ";
    });
}