var output = document.getElementById('output');


var shoppingList = [];
var howManyTimes = prompt('How many items would you like to add?');

for (var x = 0; x < howManyTimes; x++) {
    var addItem = prompt('What do you want to add?');
    if(addItem == "no"){
        break;
    }
    shoppingList.push(addItem);
}

for(myItem of shoppingList){
    output.innerHTML += myItem + "<br>";
}




//var userNames = {
//    a: "mike",
//    b: 'john',
//    c: 'larry'
//};

//for (var x in userNames){
//    output.innerHTML += x+ " ";
//    output.innerHTML += userNames[x]+"<br>";
//}

//for(var x in document){
//    output.innerHTML +=x+" "+ document[x]+"<br>";
//}





//var userNames = ['mike', 'john', 'larry']
//
//for (var x = (userNames.length-1); x >= 0; x--) {
//    output.innerHTML += userNames[x] + "<br>";
//}

//var x = 0;
//while (userNames[x]) {
//    output.innerHTML += userNames[x] + "<br>";
//    x++;
//}





//var sum = 0;
//
//for(x = 0; x <1000; x++){
//    if(x%5 == 0){
//        output.innerHTML += "Value = "+x+"<br>";
//        sum += x;
//    }
//}
//
//output.innerHTML += 'Sum of all numbers = '+sum;
//



//var html = '<table>';
//
//for(var row = 0; row < 10; row++){
//    if(row === 5){
//        continue;
//    }
//    html+= '<tr>';
//    for(var col = 0; col < 5; col++){
//        html+= '<td>Cell = '+((col+1)+(row*5))+'</td>';
//    }
//    html+= '</tr>'
//}
//html += '</table>';
//
//output.innerHTML = html;
//


//var calories = 89;
//var howMany = prompt('How many bananas?');
//var total = 0;
//
//for(var x = 1; x <= howMany; x++){
//    total += calories;
//    output.innerHTML += x+" banana have "+total+" calories"+'<br>';
//    
//}

//for (var x = 0; x <= 31; x++) {
//    if (x % 2 !== 0) {
//        output.innerHTML += 'value of x = ' + x + "<br>";
//    }
//
//}





//var x = 0;
//var q = prompt('Guess the secret word');
////var q = prompt('How many values?');
//
//var secret = 'javascript';
//
//while (q != secret) {
//    q = prompt('guess again?');
//}
//
//output.innerHTML += "Final value of x = "+x;







//do {
//    x+=2;
//    output.innerHTML += 'value x = ' + x + "<br>";
//}
