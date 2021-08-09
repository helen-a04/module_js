
//FUNCTION DECLARATION - когда пишем функцию а потом её вызываем 

function seyHello(){
    console.log('hello World');
}

seyHello();


function calc(n, x, y){
    console.log(n * x * y);
}

calc(2, 5, 3);


//FUNCTION EXPRESSION  - обьявляем функцию в переменной

let car = function(x){
    return x**x;
}

console.log(car(3));


function fabric(user = 'Andrey', car = 'Opel', position = 'Manager'){
    console.log("Hello," + user +
    ' you are - ' + position +
    ' you have - ' + car);
}

fabric('Angelina');


//РЕКУРСИЯ

let x = 0;
function recurs(){
    if(x <= 3){
        x++;
        console.log('Глубина рекурсии' + x);
        recurs();
    }
}

recurs();



function shop(param){
    return param + 'был в магазине!';
};

function jobs(param){
    return shop(param)
};

console.log(jobs('Andrey'));