var myArray = ['John', 'Mike', 'Laurence', ' Kim', 'Lisa', 'Jane', 'Joanne'];

window.onload = build;

document.getElementById('addNew').addEventListener('click', addN, false);

function addN() {
    var a = document.getElementById('addFriend').value;
    myArray.push(a);
    build();
}



function build() {
    var html = '<h1>ClickTable</h1><table>';
    for (var x = 0; x < myArray.length; x++) {
        html += '<tr id="id' + x + '" data-row="' + x + '"><td>' + myArray[x] + '</td><td><a href="#" data-action="delete">Del</a></td><td><a href="#" data-action="edit">Edit</a></td></tr>';
    }
    document.querySelector('.output').innerHTML = html;


    var dad = document.querySelectorAll('[data-action="delete"]');
    for (var x = 0; x < dad.length; x++) {
        dad[x].addEventListener('click', function () {
            event.preventDefault();
            var iValue = this.closest('[data-row]').getAttribute('data-row');
            var r = myArray.splice(iValue, 1);
            build();
            console.log(r);
        });
    }

    var dae = document.querySelectorAll('[data-action="edit"]');
    for (var x = 0; x < dae.length; x++) {
        dae[x].addEventListener('click', function () {
            event.preventDefault();
            var row = this.closest('[data-row]');
            var rid = row.getAttribute('data-row');
            row.style.backgroundColor = 'yellow';

            var td = row.firstElementChild;
            var input = document.createElement('input');
            input.type = "text";
            input.value = td.innerText;
            td.innerHTML = '';
            td.appendChild(input);
            input.focus();
            input.onblur = function () {
                td.removeChild(input);
                td.innerHTML = input.value;
                myArray[rid] = input.value;
                row.style.backgroundColor = 'white';
            };


        });
    }

    console.log(dad);
}









//    var input = document.getElementById('myT');
//    input.addEventListener('select', myFunction);
//
//
//    function myFunction() {
//        var e = event.target;
//        var str = event.target.value;
//        var result = str.substring(e.selectionStart, e.selectionEnd);
//        document.getElementById('output').innerText = result;
//    }
//
//





//var d = document.getElementsByTagName('div');
//
//function bup(){
//    console.log(this.innerText);
//}
//
//
//for(var i = 0; i < d.length; i++){
//    d[i].addEventListener('click', bup,true);
//}









//var holder = document.querySelector('.holder');
//var output = document.getElementById('output');
//
//holder.addEventListener('mouseover', function () {
//    this.classList.add('active');
//});
//
//holder.addEventListener('mouseout', function () {
//    this.classList.remove('active');
//});
//
//holder.addEventListener('mousemove', coordin);
//
//function coordin() {
//    output.innerHTML = 'X: ' + event.clientX + '<br>';
//    output.innerHTML += 'Y: ' + event.clientY;
//}








//var i = document.getElementById('imgSwap');
//var imgHolder = 'http://via.placeholder.com/350x150/fff000/fff?text=Image10';
//var t;
//window.onload = function () {
//    i.src = imgHolder;
//}
//i.addEventListener('click', function () {
//    console.log(event);
//    message('Clicked');
//});
//
//i.addEventListener('mouseover', function () {
//    t = this.src;
//    this.src = 'http://via.placeholder.com/350x150/ff0000/fff?text=Image2';;
//    console.log(event);
//    message('Over');
//});
//
//i.addEventListener('mouseout', function () {
//    this.src = t;
//    console.log(event);
//    message('Out');
//});
//
//function message(p) {
//    document.getElementById('wrapper').innerHTML = p;
//}





//var addNew = document.getElementById('addNew');
//
//addNew.onclick = function () {
//    var item = document.getElementById('addItem');
//    var li = document.createElement('li');
//    var ol = document.getElementById('sList');
//    li.appendChild(document.createTextNode(item.value));
//    ol.appendChild(li);
//
//}









// window.onload = build;
// var myArray = ["Laurence", "Mike", "John", "Larry", "Kim", "Joanne", "Lisa", "Janet", "Jane"];
// var message = document.getElementById('message');
// var addNew = document.getElementById('addNew');
//
// addNew.onclick = function () {
//     //value from input
//     var q = document.getElementById('addFriend').value;
//
//     //add it to the HTML
//     var tr = document.createElement('tr');
//     tr.setAttribute('data-vote', myArray.length);
//     tr.setAttribute('data-row', 0);
//     tr.innerHTML = '<td class="">' + (myArray.length + 1) + '</td><td>' + q + '</td><td>0</td>';
//     /*
//     var td = document.createElement('td');
//     tr.appendChild(td);
//     td.appendChild(document.createTextNode(myArray.length + 1));
//     td = document.createElement('td');
//     
//     tr.appendChild(td);
//     td.appendChild(document.createTextNode(q));
//     
//       td = document.createElement('td');
//     
//     tr.appendChild(td);
//     td.appendChild(document.createTextNode(0));
//     */
//     var container = document.querySelector('#output table');
//
//     container.appendChild(tr);
//     //add it to the array
//     myArray.push(q);
//     voteCount();
// }
//
//
//
// function build() {
//     var html = "<h1>My Friends Table</h1><table>";
//     for (var x = 0; x < myArray.length; x++) {
//         html += '<tr data-row="' + x + '" data-vote="0"><td class="box" >' + (x + 1) + '</td><td>' + myArray[x] + '</td><td>0</td></tr>';
//     }
//     html += '</table>';
//     document.getElementById('output').innerHTML = html;
//     voteCount();
//
// }
//
// function voteCount() {
//     var elbox = document.querySelectorAll('#output .box');
//     var a;
//     var v;
//     for (var x = 0; x < elbox.length; x++) {
//         elbox[x].onclick = function () {
//             //a = this.parentElement.getAttribute('data-row');
//             a = this.closest('[data-row]').getAttribute('data-row');
//             message.innerHTML = myArray[a] + " is on row #" + a;
//             v = this.closest('[data-vote]').getAttribute('data-vote');
//             v++;
//             console.log(this.parentElement.lastElementChild);
//             this.parentElement.lastElementChild.innerText = v;
//             this.parentElement.setAttribute("data-vote", v);
//         }
//     }
// }





//var output = document.getElementById('output');
// window.onload = build;
//
// var el = document.getElementById('message');
//
// var myArray = ['Laurence', 'mike', 'John', 'Lary', 'Kim', 'Joane', 'Lisa', 'Jane', ' James'];
//
// function build() {
//     var html = '<h1>My friends Table</h1><table>';
//     for (var i = 0; i < myArray.length; i++) {
//         html += '<tr><td>' + myArray[i] + '</td><td class="box" data-row="' + i + '">' + (i + 1) + '</td><td></td></tr>';
//     }
//     html += '</table>';
//     document.getElementById('output').innerHTML = html;
//     var elBox = document.querySelectorAll('#output .box');
//     var a;
//     for (var x = 0; x < elBox.length; x++) {
//         elBox[x].onclick = function () {
//             a = this.getAttribute('data-row');
//             console.log(myArray[a]);
//         }
//     }
// }



//var aTitle = document.querySelectorAll('.acc');
//var con = document.querySelectorAll('.con');
//
//for (var i = 0; i < aTitle.length; i++) {
//    aTitle[i].onclick = function () {
//        cCon(this.nextElementSibling);
//        this.nextElementSibling.classList.toggle('active');
//    }
//}
//
//function cCon(t) {
//    for (var i = 0; i < con.length; i++) {
//        if (t != con[i]) {
//            con[i].classList.remove('active');
//        }
//    }
//}









//var divs = document.querySelectorAll('.myClass');
//
//for (var i = 0; i < divs.length; i++) {
//    divs[i].onclick = function () {
//        this.classList.toggle('box1');
//        if (this.className.includes('active')) {
//            this.classList.remove('active');
//        } else {
//            this.classList.add('active');
//        }
//    }
//}







//var one = document.getElementById('one');
//var two = document.getElementById('two');
//var three = document.getElementById('three');
//
//
//one.onclick = function () {
//    one.className = 'box1';
//}
//two.onclick = function () {
//    two.className = 'box2';
//}









//var message = document.getElementById('message');
//var bgColor = ['yellow', 'green', 'blue', 'red', 'pink', 'purple'];
//
//var overLap = document.getElementById('overlap');
//var btn = document.getElementById('oLay');
//
//btn.onclick = function(){
//    overLap.style.visibility = (overLap.style.visibility == 'visible') ? 'hidden' :'visible';
//}
//



//var output = document.querySelectorAll('.output');
//var bgColor = ['yellow', 'green', 'blue', 'red', 'pink', 'purple'];
//var c;
//
//
//
//function start() {
//    setInterval(swapBg, 1000);
//}
//
//function swapBg() {
//    for (var i = 0; i < output.length; i++) {
//        c = bgColor[Math.floor(Math.random()*bgColor.length)]
//        output[i].style.backgroundColor = c;
//    }
//}

//
//output[0].style.backgroundColor = 'red';
//output[1].style.backgroundColor = 'yellow';
//output[2].style.backgroundColor = 'green';








//var message = document.getElementById('message');
//var message1 = document.getElementById('message1');
//
//var el = qs('.output');
//
//for(var i = 0; i < el.length; i++){
//    el[i].innerHTML = 'polsza';
//}
//
//function qs(el){
//    return document.querySelectorAll(el);
//}



//var el = document.querySelector('input[name="first"]');
//
//el.value = 'Its worked';







//var elClass = document.getElementsByClassName('output');
//var highClass = document.getElementsByClassName('highlight');
//
//for(var x = 0; x < elClass.length; x++){
//    var el = elClass[x];
//    var message = document.getElementById('message');
//    el.onclick = function(e){
//        message.innerHTML = e.target.innerHTML;
//    }
//}
//
//for(var i = 0; i < highClass.length; i++){
//    var high = highClass[i];
//    var message1 = document.getElementById('message1');
//    high.onclick = function(){
//        message1.innerHTML = event.target.innerHTML;
//    }
//}


//var divList = document.getElementsByTagName('div');
//var highlightList = document.getElementsByClassName('highlight');
//divList[7].innerHTML = 'Welcome';
//
//
//function myFun1() {
//    var html = "highlight list<br>";
//
//    for (var i = 1; i < highlightList.length; i++) {
//        if (highlightList[i].firstElementChild) {
//            html += highlightList[i].innerText;
//        } else if (highlightList[i].value) {
//            html += highlightList[i].value + '<br>';
//        }
//    }
//    output.innerHTML += html;
//}




//var a = document.body.children.myForm.childNodes[9].children[3];
//console.log(a.nextElementSibling.id);
//
