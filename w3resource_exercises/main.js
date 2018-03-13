function check() {
    var str = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 1; j < i; j++) {
            str = str + '*';
            console.log(str);
        }

    }
}
check();




//function multi() {
//    for (let i = 0; i < 100; i++) {
//        if (i % 5 == 0 && i % 3 == 0) {
//            console.log(i+' FizzBuzz');
//        } else if (i % 3 == 0) {
//            console.log(i+' Fizz');
//        } else {
//            console.log(i+' Buzz');
//        }
//    }
//}
//
//multi();






//function check(){
//    for(let i = 0; i <=15; i++){
//        if(i ===0){
//            console.log(i +' is even');
//        }
//        else if(i ===1){
//            console.log(i +' is odd');
//        }
//        else if(i %2 ===0){
//            console.log(i+' is even')
//        } else if(i % 2 != 0){
//            console.log(i+' is odd');
//        }
//    }
//}
//check();



//function check(a, b, c, d, e) {
//    var max = a;
//    if (b > max) {
//        max=b;
//    }
//    if (c > max) {
//        max=c;
//    }
//    if (d > max) {
//        max=d;
//    }
//    if (e > max) {
//       max=e;
//
//    }
//   console.log(max);
//
//}
//
//check(1, 43, 35, 43, 3);

//function check(num1,num2){
//    if(num1 > num2){
//        console.log(num1);
//    } 
//    else if(num1 === num2){
//        console.log('Same numbers');
//    }
//    else{
//        console.log(num2);
//    }
//}
//
//check(3,2);


//function cr() {
//    let ctn = document.getElementById('content');
//    for (let i = 0; i < 9; i++) {
//        let div = document.createElement('div');
//        div.className = 'a';
//        ctn.appendChild(div);
//    }
//    for (let i = 0; i < 9; i += 2) {
//        let div = document.getElementsByClassName('a');
//        div[i].className += " b";
//    }
//}
//cr();


//let div = document.getElementsByTagName('div')
//for(let i = 0; i < div.length; i+=2){
//    div[i].classList.add('b');
//}
//



//function check(arr){
//    if(toString.call(arr) === "[object Array]"){
//        console.log(true);
//    } else{
//        console.log(false);
//    }
//}
//check([1,2,3]);
//
//function repeatStringNumTimes(str, num) {
//  // repeat after me
//      var string = "";
//  if(num > 0){
//    
//    while(num > 0){
//       string += str;
//        num--;
//    }
//      return string;
//  } else{
//    return "";
//  }
//}
//
//console.log(repeatStringNumTimes("abc", 3));
//
//
//

//
//function confirmEnding(str, target) {
//  // "Never give up and good luck will find you."
//  // -- Falcor
//
//  if(str.substring(str.length-1, str.length) === target){
//      return true;
//  } 
//    str = str.split(" ");
//    if(str.substring[str.length-1, str.length] === target){
//        return true;
//    }
//    else{
//      return false;
//  }
//
//}
//console.log(confirmEnding("He has to give me a new name", "name"));



//function largestOfFour(arr) {
//    // You can do this!
//    let array = [];
//    for (var i = 0; i < arr.length; i++) {
//        array.push(arr[i]);
//        for (var j = 0; j < array.length; j++) {
//            
//            }
//    }
//   
//     
//    array.sort(function (a, b) {
//        return b - a;
//    });
//     console.log(array);
//}
//
//
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//



//     
//function check(arr) {
//   let max;
//        let min;
//
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] < min){
//            arr[i] = min;
//                    console.log('Min: '+min);
//        } else if(arr[i] > max){
//            arr[i] = max;
//               console.log('Max: '+max);
//        }
//     
//
//    }
//}
//check([4,1,2,3,4]);


//function check(arg){
//    return typeof(arg);
//}
//
//console.log(check(2));


//function check(num) {
//    if (num === 1) {
//        console.log('Liczba nie jest pierwszą');
//    } else if (num === 2) {
//        console.log('Liczba pierwsza');
//
//    } else {
//        for (var i = 2; i < num; i++) {
//            if (num % i === 0) {
//                console.log('Liczba nie jest pierwsza');
//            }
//        }
//
//        console.log('Liczba pierwsza');
//
//    }
//}
//check(7);
//check(8);
//check(17);
//check(29);
//check(43);
//check(100);



//function vowels(str){
//    let count = 0;
//    str.split("");
//    for(let i = 0; i < str.length; i++){
//        if(str[i] == 'a'|| str[i] == 'e'|| str[i] == 'i'|| str[i] == 'u'|| str[i] == 'y'|| str[i] == 'o'){
//           count++;
//           }
//    }
//    console.log('Liczba samogłosek: '+count);
//}
//vowels('aeioujd');


//function reverse(str){
//   return str.split("").sort().join("");
//}
//console.log(reverse('webmaster'));

//function check(str) {
//    let reverse = str.split("").reverse().join("");
//    for (let i = str.length; i > 0; i--) {
//        console.log(str.slice(str.length - [i], str.length));
//    }
//    for (let i = str.length; i > 0; i--) {
//        console.log(reverse.slice(reverse.length - [i], reverse.length));
//    }
//}
//check('polska');

//function check(str){
//    let pali = str.split('').reverse().join("");
//    if(str === pali){
//        console.log('palindrome');
//    } else{
//        console.log('not palindrome');
//    }
//}
//
//check('bob');
//check('madam');
//check('polska');


//function reverse(n){
//   n = n+ "";
//   n = n.split('');
//  n =   n.reverse();
//   n=  n.join("");
//    console.log(n);
//}
//reverse(928228);



//function check(arr) {
//    if (arr[0] == 1 || arr[arr.length - 1] ==1 ) {
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//check([12,2,3,2])
//



//function check(str){
//    str = str.slice(str.length-6, str.length)
//    
//    if(str === 'script'){
//        console.log(true);
//    } else{
//        console.log(false);
//    }
//}
//check('Javasript');
//





//function change(str1,str2){
//    if(str1.length === str2.length){
//        console.log(str1+str2);
//    } else if(str1.length < str2.length){
//        let n = str1.length;
//      str2 = str2.slice(0, str1.length);
//         console.log(str1+str2);
//    } else{
//        let n = str2.length;
//      str1 = str1.slice(0, str2.length);
//         console.log(str1+str2);
//    }
//}
//change('1234', '123');



//function change(str) {
//
//    let string = str.slice(str.length - 3, str.length);
//    str = str.slice(0, str.length - 3);
//    let newStr = string + str;
//    console.log(newStr);
//}
//change('Polskaaaaad');


//function change(str1,str2){
//    str1 = str1.slice(1, str1.length)
//    str2 = str2.slice(1, str2.length)
//    
//    str1 = str1.concat(str2);
//    console.log(str1);
//}
//
//change('Polska', 'Niemcy');




//function change(str){
//   str = str.slice(1,str.length-1);
//    console.log(str);
//}
//
//change('Polska');

//function check(str) {
//
//    str.split("");
//    let countP = 0;
//    let countT = 0;
//    for (let i = 0; i < str.length; i++) {
//        if (str[i] === 'p') {
//            countP++;
//        }
//        if (str[i] === 't') {
//            countT++;
//        }
//    }
//    if (countP === countT) {
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//    console.log("Ilość p: "+countP);
//    console.log("Ilość t: "+countT);
//    console.log(str);
//}
//check('pppttkkdj');

//function check(str) {
//    let count = 0;
//    str.split('');
//    for (let i = 0; i < str.length; i++) {
//        switch (str[i]) {
//            case 'a':
//                count++;
//                break;
//            case 'e':
//                count++
//                break;
//            case 'y':
//                count++
//                break;
//            case 'i':
//                count++
//                break;
//            case 'o':
//                count++
//                break;
//            case 'u':
//                count++
//                break;
//            default:
//                break;
//        }
//    }
//    console.log('ilość samogłosek: ' + count);
//}
//
//check('polskaauioutetbdhdjjkeka');


//function change(str){
//    str = str.split('').sort().join("");
//    console.log(str);
//}
//change('polska');




//function change(num){
//    const hours = Math.floor(num/60);
//    const minutes = num % 60;
//    
//    num = hours + ':' + minutes;
//   
//    console.log(num);
//}
//
//change(5200);

//function reverse(str){
//    str = str.split('');
//    str = str.reverse();
//    str = str.join("");
//    console.log(str);
//}
//reverse('string');

//function check(num1, num2, num3){
//    if(num1 < num2 && num2 < num3 || num1 < num3){
//        console.log('true')
//    } else{
//        console.log(false);
//    }
//}
//
//check(10,15,31);
//check(24,22,31);
//check(22,22,31);
//check(10,9,10);



//function check(num1,num2,num3){
//    if(num1 === num2 && num1 === num3){
//        console.log(30);
//    } else if(num1 === num2 || num1 === num3 || num2 ==num3){
//        console.log(20);
//    } else{
//        console.log(40);
//    }
//}
//check(10,10,10);
//check(10,20,10);
//check(10,20,20);
//check(20,10,10);
//check(20,30,10);
//



//function check(num1,num2){
//    if(num1 === 8 || num2 ===8 || num1+num2===8 || num1-num2===8 || num2-num1 ===8){
//        console.log(true);
//    } else{
//        console.log(false);
//    }
//}
//
//check(8,1);
//check(8,4);
//check(4,8);
//check(1,8);
//check(1,9);
//check(1,10);


//function sum(num1,num2){
//    if(num1+num2 >=50 && num1+num2 <=80){
//        console.log(65);
//    } else{
//        console.log(80);
//    }
//}
//
//sum(30,40);
//
//sum(10,10);



//function check(exam, result){
//    if(exam === 'normal' && result >=89){
//        console.log('A+')
//    } else if(exam === 'final' && result >=90){
//        console.log('A+');
//    } else{
//        console.log('false');
//    }
//}
//
//check('normal', 89);
//check('normal', 88);
//check('final', 89);
//check('final', 90);
//




//function change(str){
//    if(str.length <3){
//        console.log(str.toUpperCase());
//    }else{
//        console.log(str.toLowerCase());
//    }
//}
//change('po');


//function check(num1,num2,num3){
//    let max = num1;
//    
//    if(num2>max){
//        max=num2;
//    }
//    if(num3>max){
//        max=num3;
//    }
//    console.log(max);
//}
//check(30,30,30);
//check(40,40,30);
//check(10,50,50);



//function check(num1,num2){
//    if(num1 >= 50 && num1 <=99 || num2 >= 50 && num2 <=99 ){
//        console.log(true);
//    }
//    else console.log(false);
//}
//
//check(30,99);
//check(50,100);
//check(49,100);
//check(60,70);


//function check(str) {
//    if (str.length < 4) {
//        console.log(false);
//    } else if (str.substring(0, 4) == 'Java') {
//        console.log(true);
//    }
//}
//
//check('Javasadsda');



// adding first letter to the start and the and of the string
/*function add(str){
    var first = str[0];
    str = first+str+first;
    console.log(str);
}
add('string');
*/



//zmiana ostaniej z pierwszą literą
/*function change(str){
   var char = str.substring(1, str.length -1);
    console.log(str.charAt(str.length-1)+char+str.charAt(0));
}
change('string');
*/




/*function check(str){
    if(str.substring(0,2) === 'PY'){
        console.log(str);
    } 
    else{
        console.log('PY' + str) ;
    }
}
check('PaYsk')
*/

/*function check(num1){
    if(num1 >=20 && num1 <=200 || num1 === 400){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
check(300);
*/

//checking if sum of two integers are 50 or one of them is 50
/*function check(num1,num2){
    if(num1 === 50 || num2 === 50){
        return true;
    }
    else if(num1+num2 === 50){
        return true;
    } 
    else{
        return false;
    }
}
console.log(check(51,-1));
*/



//dodawanie dwoch liczb. jesli sa rowne ich suma razy 3
/*function sum(num1,num2){
    
    if(num1 === num2){
        let sum = (num1+num2)*3;
        console.log(sum)
    }
    else {
    let sum = num1+num2;
    console.log(sum);
    }
}

console.log(sum(3,2));
*/


//roznica miedzy 13 a podana liczba. jesli sa takie same podwajana jest ich suma.
/*let number = 13;

let ask = prompt('Give me a number: ');
ask = parseFloat(ask);
if(ask > number){
    let sum = ask-number;
    sum*=2;
    console.log(sum);
} else{
    let sum = number -ask;
    console.log(sum);
}
*/









//CELSUJESZE NA FAHRENHAITY
/*
let celc = 0;
function change(celc){
    let fahr = (celc*1.8) + 32;
    console.log(fahr);
}


*/



// DZIELENIE I MNOŻENIE
/*let div = document.getElementById('div');
const multi = document.getElementById('multi');
const division = document.getElementById('division');


multi.addEventListener('click', multiplication);
division.addEventListener('click', divis);

function multiplication() {
    const first = document.getElementById('first').value;
    const second = document.getElementById('second').value;
    let sum = first * second;
    div.innerHTML = `The result is ${sum}`;
}

function divis() {
    const first = document.getElementById('first').value;
    const second = document.getElementById('second').value;
    if (second == 0) {
        div.innerHTML = `You can't divide by 0`;
    } else {
        let sum = first / second;
        div.innerHTML = `The result is ${sum}`;
    }

}
*/







//GUESSGAME
/*
let div = document.getElementById('div');
const btn = document.querySelector('button');


function guess() {

    let number = Math.floor(Math.random() * 10) + 1;
    number = parseFloat(number);

    for (let i = 0; i < 3; i++) {
        switch (i) {
            case 0:
                let ask = prompt('Guess the number between 1 and 10');
                ask = parseFloat(ask);
                if (ask === number) {
                    alert('Good Work');
                    return;
                } else if (ask > number) {
                    alert('Number is lower');
                } else {
                    alert('Number is higher');
                }
                console.log(number);
                break;
            case 1:
                let ask1 = prompt('Guess the number between 1 and 10');
                ask1 = parseFloat(ask1);
                if (ask1 === number) {
                    alert('Good Work');
                    return;
                } else if (ask1 > number) {
                    alert('Number is lower');

                } else {
                    alert('Number is higher');

                }
                console.log(number);
                break;
            case 2:
                let ask2 = prompt('Guess the number between 1 and 10');
                ask2 = parseFloat(ask2);
                if (ask2 === number) {
                    alert('Good Work');
                    return;

                } else if (ask2 > number) {
                    alert('Number is lower');

                } else {
                    alert('Number is higher');
                }
                console.log(number);
                break;
        }

    }
}
guess();
*/



//ODWRÓCENIE STRINGA
/*
let string = 'w3resource';
let array = [];

string = string.split("");
string = string.reverse();
string = string.join("");
console.log(string);
*/





//POLE TRÓJKĄTA
/*let div = document.getElementById('div');
const btn = document.querySelector('button');
//btn.addEventListener();

function area(a,b,c){
    let triangle = (a*b*c) / (4*Math.PI);
    console.log(triangle.toFixed(2));
}
area(5,6,7);
*/









// ODLICZANIE CZASU

//------------------------------------------------------------
/*function change(){

let div = document.getElementById('div');

let date = new Date();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (seconds < 10) {
    seconds = "0" + seconds;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (hours < 10) {
    hours = "0" + hours;
}

switch (day){
        case 1: {
        day = "Monday";
            break;
    }
        case 2: {
        day = "Thusday";
             break;
    }
        case 3: {
        day = "Wednesday";
             break;
    }
    case 4: {
        day = "Thursday";
         break;
    }
        case 5: {
        day = "Friday";
             break;
    }
        case 6: {
        day = "Saturday";
             break;
    }
        case 7: {
        day = "Sunday";
             break;
    }
}
    div.innerHTML = ` Today is: ${day} ${hours} / ${minutes} / ${seconds}`;

setTimeout('change()', 1000)

}
change();
*/
