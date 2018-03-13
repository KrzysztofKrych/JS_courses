var output = document.getElementById('wrapper');

var myArray = [];
var people = ['Laurence', 'John', 'Mike', 'Larry', 'Kim', 'Joanne', 'Lisa', 'Janet', 'Jane'];
var key;

function start() {
    myArray = people.slice();
    myArray.sort(function (a, b) {
        return 0.5 - Math.random();
    });
    console.log(myArray);
    build();
    findPerson();
    //Build out game area
    //run find the name
}

function findPerson() {
    key = myArray[Math.floor(Math.random() * myArray.length)];
    message1('Find this name ' + key);
}

function build() {
    var html = '<h1>Name Game</h1>'
    for (var i = 0; i < myArray.length; i++) {
        var str = myArray[i];
        var shuffled = str.split("").sort(function () {
            return 0.5 - Math.random();
        }).join("");
        html += '<div class="box" onmouseover="uText(this,\'' + shuffled + '\')" onmouseout="uText(this,\'Hidden ' + (i + 1) + '\')" onclick="eEle(this,\'' + str + '\')" >Hidden ' + (i + 1) + '</div>';
    }
    output.innerHTML = html;
}

function uText(t, mes) {
    t.innerHTML = mes;
}

function eEle(t, s) {
    if (s == key) {
        var n = myArray.indexOf(s);
        message2('correct');
        t.parentNode.removeChild(t);
        myArray.splice(n, 1);
        findPerson();
    } else {
        message2('wrong');
    }
    if (myArray.length <= 0) {
        message1('GAME OVER!');
    }
}

function message1(m) {
    document.getElementById('message1').innerHTML = m;
}

function message2(m) {
    document.getElementById('message2').innerHTML = m;
}









//var holderItem;
//
//function dStart() {
//    message('drag started');
//    holderItem = event.target;
//}
//
//function dDrop(){
//     event.preventDefault();
//     message('Drop it');
//    if(event.target.className == 'box'){
//        
//        event.target.appendChild(holderItem);
//    }
//    
//}
//
//function nDrop(){
//    event.preventDefault();
//}
//
//function message(m) {
//    output.innerHTML = m;
//}



//function valForm() {
//    var p = event.target.children;
//    if (p.firstName.value == "") {
//        message('Needs a first Name!!');
//        return false;
//    }
//    if (p.lastName.value == "") {
//        message('Needs a last Name!!');
//        return false;
//    }
//    if (p.age.value == "") {
//        message('Needs your age!');
//        return false;
//    }
//
//    return true;
//}

//function message(m) {
//    output.innerHTML = m;
//}







//function numCheck() {
//    message(!isNaN(event.key));
//    return !isNaN(event.key);
//}
//
//function textCheck(){
//    message(isNaN(event.key));
//    return isNaN(event.key);
//}
//
//function message(m) {
//    output.innerHTML = m;
//}
//








//CAROUSEL
//var imagePlace = 0;
//var images = ['1', '2', '3', '4', '5', '6', '7'];
//var imagesC = ['111', '222', 'ff0000', '00ff00', '0000ff', '000', '333'];
//
//window.onload = startImg();
//
//function startImg() {
//    swapImage();
//    setInterval(swapImage, 2000);
//}
//
//function swapImage() {
//
//    var myImage = document.getElementById('myImage');
//    myImage.src = "http://via.placeholder.com/350x150/" + imagesC[imagePlace] + '/fff?text=Image' + images[imagePlace];
//    imagePlace++;
//    if (imagePlace >= images.length) {
//        imagePlace = 0;
//    }
//}









//var iColor = "222";
//var iText = "Image1";
//var iSize = "350x150";
//
//function imgU() {
//    if (event.target.type == 'select-one') {
//        iSize = event.target.value;
//    } 
//     else if(event.target.type == 'text'){
//         iText = event.target.value;
//     }
//       else if(event.target.type == 'color'){
//           var nColor = event.target.value;
//         iColor = nColor.replace('#',"");
//     }
//    var imSrc = 'http://via.placeholder.com/'+iSize+"/"+iColor+"/fff?text="+iText;
//    message(imSrc);
//    event.target.parentElement.myImage.src = imSrc;
//}
//
//
//function message(m) {
//    output.innerHTML = m;
//}





//function cFun() {
//    var input = event.target;
//    if (input.name == 'e1') {
//        message("First name change to " + input.value);
//    } else {
//        message("Last name change to " + input.value);
//    }
//
//}
//
//
//function sendInfo() {
//    var input = event.target.parentElement;
//    message(input.e1.value + " " + input.e2.value);
//}


//var imgHolder = "http://via.placeholder.com/350x150";
//document.getElementById('imgSwap').onclick = function(){
//  message('clicked');  
//};
//
//
//window.onload = function(){
//    document.getElementById('imgSwap').src = imgHolder;
//}
//
//function cImg(t){
//    message(t.src);
//    t.src = "http://via.placeholder.com/300x300/ff0000/";
//}
//
//function message(m){
//    output.innerHTML = m;
//}
//
//function bImg(t){
//    t.src = imgHolder;
//}







//window.onload = function(event){
//    myFun('window');
//};
//
//window.onload = function(){
//    document.getElementById('id2').value = 'load';
//}
//
//function myFun(a){
//    output.innerHTML = 'Welcome'+a;
//}




//document.getElementById('id1').onclick = myFun;
//document.getElementById('id2').onclick = myFun;
//document.getElementById('id3').onclick = myFun;

//function myFun() {
//    console.dir(this);
//    output.innerHTML = 'Worked';
//    this.value = "Clicked";
//}



//function myFun(t) {
//    output.innerHTML = t.value;
//    t.value = t.value.toUpperCase();
//}
//    function clickFun(t) {
//        t.value = t.value.toUpperCase();
//    }






//document.myForm.children[2].value = "Hello";

//function goUrl(){
//   var url = document.getElementById('url').value;
//    window.location = url;
//}
//



//output.innerHTML = navigator.userAgent;



//window.setTimeout(update, 2000);
//
//function update(){
//    output.innerHTML = "Welcome to my site";
//}



//var change;
//
//function change() {
//    change = window.setTimeout(function(){
//          output.innerHTML = 'Welcome';
//    }, 2000);
//}

//var myTimer;
//
//function startInt() {
//    myPopup();
//    myTimer = window.setTimeout(startInt, 1000);
//}
//
//function clearInt() {
//    window.clearInterval(myTimer);
//}
//
//function myPopup() {
//    alert("Hello");
//}
//
//
//




//function goBack(){
//    window.history.go(-1);
//}

//
//output.innerHTML +="Height: "+ window.innerHeight;
//output.innerHTML +="Width: "+ window.innerWidth;
//output.innerHTML += window.location;
//

//window.open('index.html');

//console.dir(window);

//for(var prop in window){
//    document.write(prop + " "+window[prop]+"<br>")
//}
