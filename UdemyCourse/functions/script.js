// var output = document.getElementById('output');


var suits = ['spades', 'hearts', 'clubs', 'diams'];
var cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var cards = [];
var players = [];

function startDeal() {
    players = [];
    cards = [];
    var num = Number(document.getElementById('players').value);
    for (var i = 0; i < num; i++) {
        players[i] = [];
    }
    buildCards();
    shuffleCards(cards);
    deal(cards);
}

function buildCards() {
    for (s in suits) {
        var bgColor = (suits[s] == 'hearts' || suits[s] == 'diams') ? 'red' : 'black';
        for (c in cardFace) {
            var card = {
                suit: suits[s],
                num: cardFace[c],
                bgColor: bgColor
            }
            cards.push(card);
        }
    }
}

function shuffleCards(arr) {
    for (var x = arr.length - 1; x > 0; x--) {
        var holder = Math.floor(Math.random() * (x + 1));
        var temp = arr[x];
        arr[x] = arr[holder];
        arr[holder] = temp;
    }
}

function deal(cards) {
    var num = players.length;
    var output = document.getElementById('message');
    var p = 0;
    for (var i = 0; i < cards.length; i++) {
        players[p].push(cards[i]);
        p++;
        if (p >= num) {
            p = 0;
        }
    }
    for (var i = 0; i < num; i++) {
        output.innerHTML += '<br>Players: ' + (i + 1) + '<br>';
        for (var x = 0; x < players[i].length; x++){
            var p = players[i][x];
            output.innerHTML += "<span style=\"color:"+p.bgColor+"\">"+p.num+"&"+p.suit+';</span>';
        }
        output.innerHTML += "<br>";
    }
}









// var num1 = document.getElementById('code1');
// var num2 = document.getElementById('code2');
//
//
// function addBy() {
//     outC(num1.value, num2.value, "+", function (a, b) {
//         return a + b;
//     });
// }
//
// function substractBy() {
//     outC(num1.value, num2.value, "-", function (a, b) {
//         return a - b;
//     });
// }
//
// function multiplyBy() {
//     outC(num1.value, num2.value, "*", function (a, b) {
//         return a * b;
//     });
// }
//
// function divideBy() {
//     outC(num1.value, num2.value, "/", function (a, b) {
//         return a / b;
//     });
// }
//function moduleBy() {
//     outC(num1.value, num2.value, "%", function (a, b) {
//         return a % b;
//     });
// }
//
// function outC(a, b, s, cback) {
//     var result = cback(Number(a), Number(b));
//     output.innerHTML += a + " " + s + " " + b + " = " + result + "<br>";
// }
//





//function makeMessage(s1,s2,callback){
//    var result = callback(s1,s2);
//    output.innerHTML = result;
//}
//
//makeMessage('hello ', 'world', function(s1,s2){
//   var result2 = s1 + s2 +' worked';
//    return result2;
//});




//var myArray = [];
//
//function addItem() {
//    var output = document.getElementById('output');
//    var code = document.getElementById('code1');
//
//    myArray.push(code.value);
//
//    function addItemToDiv() {
//        output.innerHTML += myArray.length + ". " + myArray[myArray.length - 1] + "<br>";
//    }
//    addItemToDiv();
//
//}
//
//
//






//var a = 1000;
//
//function outside(){
//    var b = 2000;
//    function inside(){
//        b++;
//        return b;
//    }
//    var c = inside();
//    var d = function(){
//        b++;
//        return b;
//    }
//    d();
//    var e = d();
//    console.log(b);
//} 
//outside();
//
//









//
//var myArray = ['hello', 'world', 213, 41212, 23, 'javascript',123123,123,124543,23,12,12,'hello', 'world', 'javascript'];
//
//var myArrayClean = removeDup(myArray);
//output.innerHTML = myArray + '<br>' + myArrayClean;
//
//function removeDup(arr){
//    var cArray = [];
//    var cObject = {};
//    var z = '';
//    
//    for(var x = 0; x <arr.length; x++){
//        cObject[arr[x]] = 'whatever';
//    }
//    
//    for(z in cObject){
//        cArray.push(z);
//    }
//    return cArray;
//}
//
//
//




//
//var outsideFun = 'outside';
//
//function myFun() {
//    var insideFun = "inside";
//    console.log(outsideFun);
//    console.log(insideFun);
//}
//myFun();
//
//console.log(outsideFun);
//console.log(insideFun);



//var secretWord = ["javascript", 'java', 'polska', 'website', 'html', 443,44];
//
//function start(){
//    shuffleArr(secretWord);
//    output.innerHTML += secretWord+"<br>";
//}
//
//function shuffleArr(arr){
//    for(var x = arr.length-1; x>0; x--){
//        var holder = Math.floor(Math.random()*(x+1));
//        var temp = arr[x];
//        arr[x] = arr[holder];
//        arr[holder] = temp;
//    }
//    return arr;
//}




//function start(){
//    shuffleArray(secretWord);
//    output.innerHTML += secretWord+"<br>";
//}
//
//function shuffleArray(arr){
//   for(var x =arr.length-1; x > 0; x--){
//       var holder = Math.floor(Math.random()*(x+1));
//       var temp = arr[x];
//       arr[x] = arr[holder];
//       arr[holder] = temp;
//   }
//    return arr;
//}




//var secretWord = ["javascript", 'java', 'polska'];
//
//function start() {
//    getSecret(prompt('what is the word?'));
//}
//
//function getSecret(secret) {
//    if (secretWord.indexOf(secret) > -1) {
//        output.innerHTML = "You are correct";
//    } else {
//        getSecret(prompt('guess again?'));
//    }
//}





//var a = "World";
//
//(function(){
//    var a = "Hello ";
//     output.innerHTML = a;
//})();
//
//output.innerHTML += a;



//var a = function(b){
//    output.innerHTML = "Welcome to an anonymous function "+b;
//}






//var cCode = [];
//var count = 0;
//var c1 = document.getElementById('code1');
//var c2 = document.getElementById('code2');
//var c3 = document.getElementById('code3');
//
//for (var x = 0; x < 3; x++) {
//    cCode.push(Math.floor(Math.random()*9));
//}
//
//
//
//function crack(){
//    count = 0;
//    var guess = [c1.value, c2.value, c3.value];
//    for(var x = 0; x < cCode.length; x++){
//        output.innerHTML += checkNum(guess[x], cCode[x]);
//    }
//    if(count === 3){
//        output.innerHTML += ' You guees it <br>'
//    } else{
//        output.innerHTML += '<br>'
//    }
//}
//
//function checkNum(a,b){
//    if(a > b){
//        return "L";
//    } 
//    if(a<b){
//        return "H";
//    }
//    if(a==b){
//        count++;
//        return a;
//    }
//}




//var code1 = document.getElementById('code1');
//var code2 = document.getElementById('code2');
//var code3 = document.getElementById('code3');
//
//var num1 = Math.floor(Math.random() * 9);
//var num2 = Math.floor(Math.random() * 9);
//var num3 = Math.floor(Math.random() * 9);
//
//function crack() {
//
//
//    if (code1.value > num1) {
//        output.innerHTML += 'L';
//    } else if (code1.value < num1) {
//        output.innerHTML += 'H';
//    } else {
//        output.innerHTML += code1.value;
//    }
//    
//    if (code2.value > num2) {
//        output.innerHTML += 'L';
//    } else if (code2.value < num2) {
//        output.innerHTML += 'H';
//    } else {
//        output.innerHTML += code2.value;
//    }
//    
//    if (code3.value > num3) {
//        output.innerHTML += 'L';
//    } else if (code3.value < num3) {
//        output.innerHTML += 'H';
//    } else {
//        output.innerHTML += code3.value;
//    }
//    output.innerHTML += '<br>';
//    
//    if(code1.value == num1 && code2.value == num2 && code3.value == num3){
//        output.innerHTML += " You got it";
//    }
//}







//function hi(par = "hi"){
//    output.innerHTML += par;
//}
//hi('hello');



//var a = myFunNew();
//
//function myFunNew(para = "Hello World"){
//    output.innerHTML += para;
//    return para;
//}
//
//function myFunOld(para){
//    if(typeof para === 'undefined'){
//        para = "Hello World";
//    }
//    output.innerHTML += para;
//    return para;
//}
//
//






//var num1 = document.getElementById('num1');
//var num2 = document.getElementById('num2');

//function addBy() {
//    var a = Number(num1.value);
//    var b = "+";
//    var c = Number(num2.value);
//    var d= a+c;
//    outHTML(a, b, c,d)
//}
//
//function substractBy() {
//    var a = Number(num1.value);
//    var b = "-";
//    var c = Number(num2.value);
//    var d= a-c;
//    outHTML(a, b, c,d)
//}
//
//function multiplyBy() {
//    var a = Number(num1.value);
//    var b = "*";
//    var c = Number(num2.value);
//    var d= a*c;
//    outHTML(a, b, c,d)
//}
//
//function divideBy() {
//    var a = Number(num1.value);
//    var b = "/";
//    var c = Number(num2.value);
//    var d= a/c;
//    outHTML(a, b, c,d)
//}
//
//function outHTML(a, b, c,d) {
//    output.innerHTML += a + " " + b + " " + c+" = "+d+'<br>';
//}






//var adj = ['super', 'extra', 'wonderful', 'bad', 'angry', 'careful']
//
//
//function myFun() {
//    var random = Math.floor(Math.random()*adj.length);
//    var question = prompt('what is your name?');
//    output.innerHTML +=adj[random]+" "+ question +"<br>";
//}

//function myFun(){
//    var question = prompt('what is your name?')
//}


//function myFunction(a, b, c) {
//    var response = a + b + c;
//    output.innerHTML = response;
//    return response;
//}
//myFunction(4,5,6);

//var a = 'Hello';
//
//function myFun() {
//    var b = " World";
//    var c = a+b;
//    output.innerHTML =c;
//}
//myFun();
