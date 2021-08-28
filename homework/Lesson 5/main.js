
// Задание 1

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

// Способ 1
console.log(obj.c);

// Способ 2
let c = obj["c"];
console.log(c);

// Все св-ва объекта через цикл 
for (let key in obj) {
    console.log(key + "," + obj[key]);
}


// Задание 2 

const city = {
    name: "Sevilla",
    population: "688 711",
}

// Задание 3

const arrOfCities = [];

arrOfCities.push({
    name: "Minsk",
    population: "2 020 600"
});

arrOfCities.push({
    name: "Brest",
    population: "343 985"
});

arrOfCities.push({
    name: "Vitebsk",
    population: "364 800"
});

arrOfCities.push({
    name: "Grodno",
    population: "368 710"
});

arrOfCities.push({
    name: "Mogilev",
    population: "357 100"
});

arrOfCities.push({
    name: "Gomel",
    population: "510 300"
});

console.log(arrOfCities);

// Задание 4

const logCities = (arr) => {
    arr.forEach(city => {
        console.log(city);
    })
}

logCities(arrOfCities);