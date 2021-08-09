// Метод toString

let number = 123;
let boolean = false;
let str = 'Hello!';

console.log(number.toString(), boolean.toString(), str.toString());


// parseInt() & parseFloat()

let px = '14px';
let rem = '1.6rem';
let e = '1px2rem';

console.log(parseInt(px), parseFloat(rem), parseInt(e));


// toFixed();

let fixed = 12345.54321;

console.log(fixed.toFixed(), fixed.toFixed(2), fixed.toFixed(4));


// Math 

let PI = Math.PI;
let E = Math.E;

console.log(PI, E);

// Другие методы Math

let random = Math.random();
let max = Math.max(123, 2, -256, 400);
let min = Math.min(123, 4, -567, 89);

console.log(random, max, min);

// Тригонометрия Math

// Неточные вычисления 

// String.length

let string = 'Hellow world!'

console.log(string.length);

// escape

let newStr = 'Эта строчка \n будет \r перенесена';

console.log(newStr);


// Доступ к отдельным символам

let word = 'Adukar';

console.log(word.charAt(3), word[0], word[word.length -1]);


// toLowerCase & toUpperCase

let lower = 'Я хочу работать';
let upper = 'Я не хочу работать';

console.log(lower.toLowerCase, upper.toUpperCase);


// String: repeat & trim

let repeat_and_strim = 'Эта           строка           скопирована';

console.log(repeat_and_strim.repeat(10), repeat_and_strim.trim());

// String: indexOf & lastIndexOf

let index = 'Я сегодня встал в 8:00';

console.log(index.indexOf(сегодня));
console.log(index.lastIndexOf(в));


// Новые методы поиска String

let include = 'todaay is a good day'

console.log(include.includes(da));

// CharCodeAt

let x = 'x';

console.log(x.charCodeAt);


// сравнение строк 

console.log("a > A,");

// Интерполяция

console.log(`Сегодня ${temp > 25 ? `warm` : `cold`}`);

// Дата и время

let date = new Date();

console.log(`
Год: ${date.getFullYear()},
Месяц: ${date.getMonth()},
День: ${date.getDay()},
`);

// momentjs.com - библиотека для работы со временем

// Выводы даты с разных форматах 

let dates = new Date();

console.log(dates.toLocaleDateString());
console.log(dates.toISOString());

// Date: милисекунды от  1 января 1970 года

console.log(`
${Date.parse('2000-09-09')}
`);