// Создание массива
let arr = [];

let arrNumbers = [1, 2, 3, 4, 5];
let arrWord = ['Coffe', 'Tea', 'Milk'];

let arrType = [1, 'Tea', true];

console.log(arrWord);

// Доступ к элементам массива
// имяМассива[индекс_элемента]

console.log(arrWord[2]);

// Изменение массива

arrWord[0] = "Water";
console.log(arrWord);

// Длина массива

let summer = ["June", "July", "August", "September"];
summer[4] = "November";
summer.length = 2;
console.log(summer);
console.log(summer.length);


// Методы массивов
let names = ["Bill", "Bob", "Joe", "Lukas"];

// pop/push
// pop() - Удаляет последний элемент массива и возвращает его
let lastElementArr = names.pop();
console.log(lastElementArr, names);

// push() - Добавляет элемент в конец массива
names.push("Michel");
console.log(names);


// shift/unshift
// shift() - удаляет первый элемент массива и возвращает его
let firstElementArr = names.shift();
console.log(firstElementArr, names);

// unshift() - добавляет элемент в начало массива
names.unshift("Duo");
console.log(names);


// Перебор элементов массива

let autos = ["Audi", "BMW", "Reno", "Peugot", "Tesla", "Subaru"];

for(let x = 0; x < autos.length; x++){
    console.log(autos[x]);
}

// Модифицирование массива

for(let x = 0; x < autos.length; x++){
    autos[x] = autos[x] + ' :auto ' + x;
}

console.log(autos);


// Многомерные массивы

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(matrix[0]);
// console.log(matrix[0][0]);
// console.log(matrix[0][1]);
// console.log(matrix[0][2]);

console.log(matrix[1][1]);



// Метод массива: join();
// Склеивает элементы массива в одну строку
let autoArr = ["Audi", "BMW", true, "Peugot", "Tesla", "Subaru"];
let arrJoin = autoArr.join('-');
console.log(arrJoin);

// Метод массива: split();
// Разбивает строку на массив
let arrSplit = arrJoin.split('-', 3);
console.log(arrSplit);


// Метод массива: slice(start, end);
// Копирует часть массива от индекс start (включительно) до конца end (не включая);
let letters = ["a", "b", "c", "d", "e", "f"];

let part = letters.slice(1, 3);
let part2 = letters.slice(2);

console.log(part);
console.log(part2);



// Метод массива: splice(start, deleteCount, elem1, ..., elemN);

// deleteCount - количество удаляемыех элементов из массива
// начиная с индекса start
// вставляет на их место элементы elem1, ..., elemN
// возвращает массив из удаленных элементов
let newLetters = ["a", "b", "c", "d", "e", "f"];

let deleteLetters = newLetters.splice(1, 2, "O", "Q", "P");
console.log(newLetters); // ["a", "d", "e", "f"]
console.log(deleteLetters); // ["b", "c"]


// Метод массива: сoncat()
// Создаёт и возвращает новый массив, в который копируются все элементы из animal и все аргументы
let animal = ["cat", "dog"];
let newAnimal = animal.concat("Cow", "Horse");
console.log(newAnimal);

animal = animal.concat(newLetters);
console.log(animal);


// Метод массива: revers();
let country = ["Belarus", "Russia", "India", "China"];
console.log(country.reverse());

// Метод массива: sort();
let words = ["abf", "abc", "lol", "cat"];

console.log(words.sort());



// Задачка на собеседовании
// Вывести строку "Я люблю JavaScript" в обратном порядке?

let str = "Я люблю JavaScript";
console.log(str.split('').reverse().join(''));