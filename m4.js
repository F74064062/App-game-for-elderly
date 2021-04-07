var page1 = document.getElementById('page1');
var goal = document.getElementById('goal');
var why =document.getElementById('why');
var how = document.getElementById('how');
var mem1 = document.getElementById('member1');
var hide = document.getElementById('need_hide');
var next = document.getElementById('next_btn');
var prev = document.getElementById('prev_btn');


member();
function member(){
    page1.addEventListener('click', function(){
        page1.style.visibility = "hidden";
    })
    mem1.addEventListener('click', function(){
        page1.style.visibility = "visible";
        page1.innerHTML = 
        "<img src ='object/wang.jpg' id ='photo'>\
        <img src = 'object/brief.png' id = 'intro'>\
        <div id='intro_txt'>興趣 | 游泳 排球<br>\
        專長 | android APP設計<br>\
        主要負責部份 | </p></div>\
        ";
    });
}