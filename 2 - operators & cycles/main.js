// условные операторы

var year = 1980;

if (1990 > year){
    console.log('Пора на работу!');
}
console.log('Условие закончилось');

//if(1990 || false){
//    console.log('Yes!');
//}

var year = 1980;

if(2000 > year && 1990 < year){ //true && false -> false
    console.log('Пора на работу!');
}else if(1990 > year){ // ture
    console.log('Пора в школу');
}else{
    console.log('Пора в дет сад!');
}


var year = 2002;
var test = 1900 > year ? console.log('Пора в школу') : console.log('Пора на работу!');

var x = 2 + 2;
switch(x){
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
}


var a = alert('Atantion!'); 
var p = prompt('Enter a namber');
var c = confirm('Yes or not?');
console.log(a, p, c);

//циклы

var i = 0;
while (i < 10){
    console.log(1);
    i++;
}

var x = 0;
 while(x < 10);{
     console.log(x);
     x++;
 }

 console.log(x);

 var x = 10;
 do{
     console.log(x);
     x--;
 }while(x > 0);

 console.log('hello');


 for(var x = 0; x < 10; x++){
     console.log(x);
 }

 console.log('Good');


 for(var x = 0; x < 10; x++){
     if(x == 5){
         console.log('It is 5')
     }
     
     console.log('It is ' + x);
 }