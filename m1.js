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
        "<img src ='object/hu.jpeg' id ='photo'>\
        <img src = 'object/brief.png' id = 'intro'>\
        <div id='name_txt'><b>/ 張禾姈</b></div>\
        <div id='intro_txt'>興趣 | 密室逃脫.解謎遊戲<br>\
        專長 | 物件導向設計<br>\
        主要負責部份 | </p></div>\
        ";
    });
    mem2.addEventListener('click', function(){
        page1.style.visibility = "visible";
        hide.style.visibility = "hidden";
        page1.innerHTML = 
        "<img src ='object/fun.jpg' id ='photo'>\
        <img src = 'object/brief.png' id = 'intro'>\
        <div id='name_txt'><b>/ 范瑀文</b></div>\
        <div id='intro_txt2'>興趣 | 看電影 攝影<br>\
        專長 | 剪片 平面製作<br>\
        主要負責部份 | 介面美術設計\
        ";
    });
}