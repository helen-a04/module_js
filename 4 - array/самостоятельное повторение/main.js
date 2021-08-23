// Создание массива 

let arr = new Array(); // используется редко
let arr = [];

// Значения массива (его элементы) - заполняются через запятую 

let arrOne = [
    'Red',
    'Blue',
    'Green', // висячая запятая
];

// или 
let arrOne = [ 'Red', 'Blue', 'Green', ];

//Значения массива

// Различные типы значений

let arrTwo = [
    "Orange", // простая строка
    {
        type: "Fruit", // отдельный объект со своими элементами
        country: "Spain",
    }, 
    true, // булевское значение
    function () { // функция
        console.log('It is fruit from Spain');
    }
];

console.log(arrTwo); // используем переменную, чтобы вывести массив в консоль
console.log(arrTwo[0]);
console.log(arrTwo[1].type); // ключ объекта для получения его свойств
console.log(arrTwo[2]);
arrTwo[3](); // вызов фунции 


// Многомерные массивы - где элемент массива является отдельным массивом

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log(matrix[0][1]); // в первых скобках - элемент массива, вторые скобки - позиция в массиве 


// Получение значений

// Можно использовать квадратные скобки. 
// Нам необходимо обратиться к переменной, к которой присвоем данный массив 
// Внутри квадратных скобок указываем ключ либо позицию переменной, 
// значение которой хотим получить

let arrThree = [
    'Red', //0я позиция
    'Blue', // 1я позиция
    'Green', // 2я позиция
];
console.log(arrThree[1]);
console.log(arrThree[5]); // undefined


// Длина массива. Свойство Length

let arrThree = ['Red', 'Blue', 'Green', ];
console.log(arrThree);
console.log(arrThree.length); // выводит длину массива

// Доступ к массиву
/* Массив является объектом и, следовательно, ведёт себя как объект. 
   Например, копируется по ссылке
*/

let arrThree = ['Red', 'Blue', 'Green', ];
console.log(arrThree);

let arrNew = arrThree;

arrNew.length = 2; // укоротили массив 
console.log(arrThree);

// Изменение значений 
let arrThree = ['Red', 'Blue', 'Green', ];
// Меняем существующее 
arrThree[0] = 'Pink';
console.log(arrThree);
// Добавляем новое 
arrThree[3] = 'Yellow';
console.log(arrThree);

// Методы массивов 

// Метод push - добавляет элемент в конец массива

let arr = ['Red', 'Blue', 'Green', ];
arr.push('Yellow');
console.log(arr);

arr.push('Pink', 'Purple');
console.log(arr);

// итог - ('Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple')

// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым

let arr = ['Red', 'Blue', 'Green', ];
arr.shift();
console.log(arr);

// Метод pop - удаляет последний элемент в массиве

let arr = ['Red', 'Blue', 'Green', ];
arr.pop();
console.log(arr);

// Метод unshift - добавляет элемент в начало масства

let arr = ['Red', 'Blue', 'Green', ];
arr.unshift('Pink');
console.log(arr);

arr.unshift('Yellow', 'Purple');
console.log(arr);

// Удаление - добавление - изменение конкретных элементов

let arr = ['Red', 'Blue', 'Green', ];

delete arr[1]; // удаление Blue (заменяется на empty)
console.log(arr); 
console.log(arr[1]); // undefined
console.log(arr.length); // длина остается та же (3)

// Метод splice. 
// Позволяет добавлять, удалят и заменять элементы.
// Синтаксис arr.slice(index[, deleteCunt, elem1, ..., elemN])

// Удаляет элемент
let arr = ['Red', 'Blue', 'Green', ];
// Начиная с первой позиции (Blue), удаляем один элемент
arr.splice(1, 1);
console.log(arr);

// Удаляем элемент и возвращаем его в переменную
let arrOne = ['Red', 'Blue', 'Green', ];
let removed = arrOne.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrTwo = ['Red', 'Blue', 'Green', ];
// Начиная с нулевой позиции (Red), заменяем один элемент 
arrTwo.splice(0, 1, 'Pink');
console.log(arrTwo);
// итог вывода - ('Pink', 'Blue', 'Green')

//Добавляем элементы
let arrThree = ['Red', 'Blue', 'Green', ];
// Начиная с первой позиции (перед Blue), добавляем два элемента
arrThree.splice(1, 0, 'Pink', 'Yellow'); // ноль значит мы что-то добавляем
console.log(arrThree);

// Удаляем элемент
let arrFour = ['Red', 'Blue', 'Green', ];
// Начиная с последней позиции (Green), удаляем один элемент
arrFour.splice(-1, 1); // -1 значит начало с конца
console.log(arrFour);


// Метод slice
// Создаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) не включая [end]

// Копируем часть массива
let arr = ['Red', 'Blue', 'Green', ];

// Начиная с 1й позиции Blue
// До второй позиции Green (не включая)
let arrOne = arr.slice(1, 2);
console.log(arrOne);

// Начиная с предпоследней позиции Blue
// до последней не включая Green
let arrTwo = arr.slice(-2, -1);
console.log(arrTwo);

// Копируем весь массив
let arrThree = arr.slice();
console.log(arrThree);


// Метод concat
// Создаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения ( в конце массива )
// синтаксис arr.concat(arg1, arg2...)

let arr = ['Red', 'Blue', 'Green', ];
let arrOne = arr.concat('Pink');
console.log(arrOne);


// Поиск в массиве 

// Методы indexOf / lastIndexOf / included
// аналоги строковым методам
/* 
1. arr.indexOf (item, from) ищет item, начиная с индекса from, 
   и возвращает индекс, на котором был найден искомый элемент, 
   в противном случае -1. 

2. arr.lastIndexOf (item, from) - то же самое, но ищет справа налево
3. arr.includes (item, from) - ищет item, начиная с индекса from,
   и возвращает true, если поиск успешен 
*/

let arr = ['Mark', 'Oleg', 'Alisa',];

// indexOf
console.log(arr.indexOf('Oleg')); // 1
console.log(arr.indexOf('Pavel')); // -1
console.log(arr.indexOf('Oleg', 2)); // -1 (2 - значит начиная со второй позиции)

// includes
console.log(arr.includes('Oleg')); // true
console.log(arr.includes('Pavel'));  // false
console.log(arr.includes('Oleg', 2)); // false


// Методы find / findIndex
// Поиск в массиве объектов с определенным условием
/* 
// Синтаксис 
let result = arr.find(function(item, index, array) {
  // true - возвращает текущий элемент и перебор прерывается
  // undefined - если все итерации оказались ложными
});
*/

let arr = [
    {name: 'Mark', age: 18},
    {name: 'Oleg', age: 23},
    {name: 'Alisa', age: 'Не скажу'},
]

let result = arr.find(function (item, index, array){
    return item.age === 18;
});

console.log(result); // {name: 'Mark', age: 18}

// findIndex - возвращает номер позиции 

let resultOne = arr.findIndex(item => item.age === 18);
console.log(resultOne); // 0


// filter
// Метод ищет все элементы, на которых функция-колбэк вернет true
/*
let result = arr.filter(function (item, index, array) {
    // true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});
*/

let arr = [
    {name: 'Mark', age: 18},
    {name: 'Oleg', age: 23},
    {name: 'Alisa', age: 'Не скажу'},
]

let result = arr.filter(function (item, index, array) {
    return item.age >= 18;
});
console.log(result);