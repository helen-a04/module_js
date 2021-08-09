// Объкет как свойство объекта
let person = {
    name: {
        first: "Alejandro",
        second: "Nesta"
    },
    birthd: {
        year: 1976,
        palce: "Italy"
    }
};

console.log(person.name.first);
person.birthd.place = "Rome, Italy";
console.log(person.birth.place);

// Функции как свойства объекта
// Функция внутри объекта - это метод объекта


let machine = {
    type: "Coffe grinder",
    makeSound: function() {
        console.log("Drrrr");
    }
}

machine.sayHello = function() {
    console.log("Hello!");
}

machine.makeSound();

//ES6: краткое объявление методов

let person = {
    getUser(){
        console.log('I\'m Grut!');
    }
}

person.getUser();


// Массив - тоже объект, с числовыми именами вместо свойств

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

// Функции - это тоже объект

// Испольщование  this  в методах объекта 
let user = {
    name: "oleg",
    introduce: function() {
        console.log("My name is" + this.name);
    }
}

user.introduce();

// this в глобавльной фунции

let circleA = {x: 10, y: 12};
let circleB = {x: -4, y: 2};

function coords(){
    console.log("x: " + this.x);
    console.log("y: " + this.y);
}

circleA.printXY = coords;
circleB.teelCoords = coords;

circleA.printXY();
circleB.teelCoords();