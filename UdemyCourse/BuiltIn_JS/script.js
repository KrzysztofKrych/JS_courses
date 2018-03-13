window.onload = build;
var computer;
var offices = 6;
var timer;
var sCom;
var score = 0;
function build(){
    var html = "<h1>Hit the computer</h1>";
    for(var x = 0; x < offices; x++){
        html += '<div class="office"><div class="desk"></div><div class="computer"></div></div>';
    }
    document.querySelector('.gameboard').innerHTML = html;
    computer = document.querySelectorAll('.computer');
    for(var x = 0; x < computer.length; x++){
        computer[x].addEventListener('click', hitcomputer,false);
    }
}

function popup(){
    sCom = computer[Math.floor(Math.random()*computer.length)];
    sCom.classList.add('popup');
    var rTime = (Math.floor(Math.random()*10)*100)+200
    timer = setTimeout(hidecomputer, rTime);
}

function hidecomputer(){
    sCom.classList.remove('popup');
    popup();
}

function hitcomputer(){
    event.target.classList.remove('popup');
    score++
    document.querySelector('.gameboard').innerHTML = score;
}

function start(){
    popup();
}















//function test(){
//    var x = 500;
//    try{
//        if(x >100){
//            throw 'Yes its greter than 100';
//        }
//        if(x <100){
//            throw 'no is less than 100';
//        }
//        concole(x);
//    } catch(e){
//        document.getElementById('message').innerHTML = e.message;
//        console.log(e);
//    }
//}
//
//
//













//COLOR GAME
//var arr1 = [];
//var arr2 = [];
//var myT;
//var loop = 0;
//var output = document.getElementById('output');
//var message = document.getElementById('message');
//var guess = document.getElementById('guess');
//var gameplay = false;
//
//function start() {
//    var colorArr = ['red', 'yellow', 'green', 'blue'];
//    var html = '';
//    arr1 = [];
//    arr2 = [];
//    guess.innerHTML = '';
//    gameplay = true;
//    message.innerHTML = 'Game started';
//    for (var x = 0; x < colorArr.length; x++) {
//        html += '<div class="' + colorArr[x] + '" style="background-color:' + colorArr[x] + '" onclick="oGuess()">' + colorArr[x] + '</div>';
//    }
//    document.getElementById('cButtons').innerHTML = html;
//
//    for (var x = 0; x < 4; x++) {
//        var r = colorArr[Math.floor(Math.random() * colorArr.length)];
//        arr1.push(r);
//    }
//    loop = 0;
//    myT = setTimeout(goWhite, 200);
//}
//
//function goWhite() {
//    output.style.backgroundColor = 'white';
//    myT = setTimeout(goColor, 200);
//}
//
//function goColor() {
//    output.style.backgroundColor = arr1[loop];
//    loop++;
//    if (loop >= arr1.length) {
//        clearTimeout();
//    }
//    myT = setTimeout(goWhite, 1000);
//}
//
//function oGuess() {
//    if (gameplay) {
//
//
//        var g = event.target.className;
//        var d = document.createElement('div');
//        d.className = 'box';
//        d.style.backgroundColor = g;
//        d.dataset.v = arr2.length;
//        d.onclick = function () {
//            if (gameplay) {
//                var iRemove = event.target.getAttribute('data-v');
//                arr2.splice(iRemove, 1);
//                event.target.parentNode.removeChild(event.target);
//                console.log(iRemove);
//            }
//        }
//        guess.appendChild(d);
//
//
//        arr2.push(g);
//        if (arr2.length == arr1.length) {
//            gameplay = false;
//            if (arr1.toString() == arr2.toString()) {
//                message.innerText = 'you were correct';
//            } else {
//                message.innerText = 'you were wrong <br> Your guess ' + arr2 + ' <br>correct order was ' + arr1;
//            }
//        }
//    }
//}










//var cDate, eDate, s, m, h, d, t;
//var output = document.getElementById('output');
//
//function start() {
//    var tDate = event.target.valueAsDate;
//    message.innerHTML = tDate;
//    eDate = new Date(tDate);
//
//    outputUpdate();
//
//    t = window.setTimeout(update, 1000);
//}
//
//function update() {
//    outputUpdate();
//    t = window.setTimeout(update, 1000);
//}
//
//function outputUpdate() {
//    cDate = new Date();
//    var dur = eDate - cDate;
//    s = Math.floor((dur % (1000 * 60)) / 1000);
//    s = s <10 ? "0"+s : s;
//    m = Math.floor((dur % (1000 * 60 * 60)) / (1000 * 60));
//    m = m <10 ? "0"+m : m;
//    h = Math.floor((dur % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    d = Math.floor(dur /(1000 * 60 * 60 * 24));
//    output.innerHTML = d + ":" + h + ":"+m + ":" + s;
//}









//var message = document.getElementById('message');
//var d = new Date('1995-08-13');
//var t = d.getTime();
//message.innerHTML += '<br> ' + t;
//
//
//
//





//var m = Math.PI;
//
//var random = Math.floor(Math.random()*99+1)
//
//console.log(random);
//









//var message = document.getElementById('message');
//var myArr = ['javascript', 'Hello', 'world', 'course'];
//
//window.onload = sWord;
//var randomWord;
//
//function sWord() {
//    //random item from the array
//    var random = Math.floor(Math.random() * myArr.length);
//
//    var item = myArr[random];
//    randomWord = item;
//    item = item.toLowerCase();
//    var s = '';
//    var wLength = item.length;
//    for (var x = 0; x < wLength; x++) {
//        var i = Math.floor(Math.random() * item.length);
//        s += item[i];
//        item = item.substr(0, i) + item.substr(i + 1);
//    }
//    message.innerHTML = s;
//}
//
//function rGuess() {
//    //check to see if correct
//    var guess = document.getElementById('myString').value;
//    if(guess.toLowerCase() == randomWord.toLowerCase()){
//        message.innerHTML = 'Correct';
//    } else{
//        message.innerHTML = 'Wrong it was '+randomWord;
//    }
//}







//var holder = 'JavaScript';
//
//function rHeading() {
//
//    var m = document.getElementById('myString').value;
//    var c = message.innerText;
//    
//    c = c.replace(holder, m);
//    holder = m;
//    message.innerText = c;
//}

//
//var a = 'Hello World';
//var b = new String('World Hello');




//
//var message = document.getElementById('message');
//var holder = '';
//var holder2 = '';
//holder = message.innerHTML.substr(0,8);
//holder2 = message.innerHTML.substr(19,8);
//message.innerHTML = holder+holder2;


//function checkGuess() {
//    var myString = document.getElementById('myString').value;
//    var myGuess = document.getElementById('guess').value;
//    if (myString.length == myGuess) {
//        message.innerHTML = 'Correct it was ' + myString.length;
//    } else {
//        message.innerHTML = 'Wrong it was ' + myString.length;
//    }
//}




//var output = document.getElementById('message');
//var input = document.createElement('input');
//var input2 = document.createElement('input');
//
//output.appendChild(input);
//output.appendChild(input2);
//
//var btn = document.createElement('button');
//output.appendChild(btn);
//btn.innerText = 'Click';
//
//btn.addEventListener('click', function(){
//   if(input.value.length === input2.value.length){
//       output.innerHTML += 'Correct';
//   } else{
//       output.innerHTML += 'Wrong';
//   }
//});






//var a = 400;
//var b = 'Hello World';
//var c= 'http://www.google.com?id=1000&n=500';
//var d = '400';







//function popup() {
//    var url = 'index.html?id=100';
//    window.open(url, '_blank', 'top=0,left=400,width=200,height=500');
//}
//
//function popclose() {
//    window.close();
//}
