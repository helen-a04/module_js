// Задание 1 

const arr = [];
for (i = 2; i <=20; i++) {
    if (i % 2 == 0) {
    console.log(i);
}
}
console.log(arr);

// Задание 2 

const newArr = arr.map((item, index) => item * index);

console.log(newArr);

// Задание 3

let result1;
let result2;
let result3;

result1 = +prompt("Enter first number");
while (isNaN(result1)) {
  result1 = +prompt("It is not a number. Enter first number");
};

result2 = +prompt("Enter second number");
while (isNaN(result2)) {
  result2 = +prompt("It is not a number. Enter second number");
};

result3 = +prompt("Enter third number");
while (isNaN(result3)) {
  result3 = +prompt("It is not a number. Enter third number");
};

const arrayOfNumbers = [result1, result2, result3];

let maxNumber;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (i === 0) {
    maxNumber = arrayOfNumbers[i]; 
  } else {
    if (maxNumber < arrayOfNumbers[i]) {
      maxNumber = arrayOfNumbers[i];
    };
  }
}
console.log(maxNumber);