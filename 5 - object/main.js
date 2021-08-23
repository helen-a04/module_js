//Создание объекта

let passport = {
    number: "MC093404",
    name: "Anais",
    surname: "Specimen",
    birthday: "1954-07-12"
};

let car = {};

//Получение доступа к объекту
//1 способ
console.log(passport.number);

let name = passport.name;
console.log(name);

//2 способ
let surname = passport["surname"];
console.log(surname);

//Наполнение объекта данными
car.name = "audi";
car.color = "red";
car.age = "10";

car["DTP"] = "2";

console.log(car);

//Проверка наличия свойства
console.log("name" in car);

//Доступ к несуществующим свойствам
console.log(car.headlights); //--> undefined

//Объявление свойств с плохими именами
let country = {
    name: "America",
    "10count car": 999999  //--> обернуть в кавычки
}
console.log(country["10count car"]);

//Удаление свойств
delete car.DTP;

console.log(car);

// Перебор свойств объекта

for(let key in car){
    console.log(key + ": " + car[key]); 
}


//Объект - ссылочный тип данных
let person = {
    name: "Lui",
    age: "23",
}

let newPerson = person; //--> присвается не сам объект, а только ссылка на имя

console.log(person, newPerson);

// Клонирование объекта

let personCountry = {};

for( let key in person){
    personCountry[key] = person[key];
}
person.name = "Dima";
console.log(person, personCountry);