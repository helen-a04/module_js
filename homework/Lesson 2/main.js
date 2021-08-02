// Задание 1 //
var a = prompt ('Введите первое число', '') ;
var b = prompt ('Введите второе число', '') ;

    if (a > b){
        console.log(a);
    } else if (b > a){
        console.log(b);
    } else {
        console.log('Числа равны');
    }

// 1.1 //
var c = a > b ? console.log(a) : console.log(b);

// 1.2 //

var x = prompt ('Введите число', '');
switch (x){
    case 1:
        console.log('Первое сообщение');
        break;
    case 2:
        console.log('Второе сообщение');
        break;
    case 3:
        console.log('Третье сообщение');
        break;
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        console.log('Соощение для остальных чисел');
        break;
}

// Задание 2 //

let x = prompt ('Введите число', '');
let sum = 0;
for ( let i = 1; i >= x; i++){
    sum = sum + i;
} 
console.log(sum);

//2.1//

let x = prompt ('Введите число', '');

for ( let i = 0; i <= x; i++);{
    if (i % 2 == 0) {
        console.log(i);
    }
}
