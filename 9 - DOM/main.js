// 
// Глобальный объект window
// 
var a = 10;
let b = 20;
console.log(window.a);
console.log(window.b);

// 
// Структура дерева DOM
//

// Получение всего html 
let html = document.documentElement;
console.log(html);

// Получение head
let head = document.head;
console.log(head);

// Получение body
let body = document.body;
console.log(body);


// 
// Навигация по DOM
// 

// Получение дочерних элементов
let childNotes = document.body.childNodes;
console.log(childNotes);

// Получение первого дочернего элемента
let firstChild = document.body.firstChild;
console.log(firstChild);

// Получение последнего дочернего элемента
let lastChild = document.body.lastChild;
console.log(lastChild);

// Получение первого дочернего элемента (без комм. и тексовых узлов)
let firstElementChild = document.body.firstElementChild;
console.log(firstElementChild);


//
// Поиск по id
// 
let searchId = document.getElementById('idText');
console.log(searchId);

// 
// Поиск по тегу
// 
let searchTag = document.getElementsByTagName('p')[0];
console.log(searchTag);

// 
// Поиск по классу
// 
let searchClass = document.getElementsByClassName('child');
console.log(searchClass);

// 
// Поиск по селектору
// 
let searchQueryAll = document.querySelectorAll('.child');
console.log(searchQueryAll);

let searchQueryOne = document.querySelector('.child');
console.log(searchQueryOne);

// 
// tagName
// 
let tagClass = document.getElementsByClassName('text');
console.log(tagClass[0].tagName);

// 
// Изменить или получить содержимое
// 
console.log(searchClass[0].innerHTML);
searchClass[0].innerHTML = '<p>Hello world</p>';
console.log(searchClass[0].textContent);


// 
// Работа с атрибутами
// 
let input = document.getElementById('lastname');

// Проверка наличия атрибута
console.log(input.hasAttribute('name'));
console.log(input.hasAttribute('class'));

// Получение значения атрибута
console.log(input.getAttribute('name'));

// Изменение значения атрибута
input.setAttribute('name', 'email');


// Свойство по атрибутам
let link = document.getElementsByClassName('link')[0];
console.log('До href: ' + link.href);

link.id = 'linkAdukar';
link.href = 'https://adukar.by';

console.log('После href: ' + link.href);


// 
// Изменение страницы
// 

// Создание нового элемента
let create = document.createElement('div');

create.id = 'car';
create.className = 'car auto';
create.textContent = 'It is autos';

link.before(create);

// 
// Работа с классами
// 

let auto = document.getElementById('car');

auto.className = 'cars autos';

// Проверка существования класса
console.log(auto.classList.contains('cars'));

// Добавление нового класса
auto.classList.add('good');

// Удаление класса
auto.classList.remove('cars');

// Добавляет класс если его нету, и удаляет класс, если он есть
auto.classList.toggle('good');

// Замена класса
auto.classList.replace('autos', 'automobile');


// 
// Работа со стилями
// 

auto.style.color = '#fff';

console.log(auto.style.color);

auto.style.textTransform = 'uppercase';
auto.style.background = '#444';

let radio = 50;

auto.style.borderRadius = radio + '%';




let div = {
    innerHTML: '<p>It is good!</p>',
    textContent: 'It is good!',
    id: '#text',
    className: 'textGood',
    classList: {
        add: function(newClass){
            console.log(newClass);
        },
        remove: function(deleteClass){

        }
    }
}

div.innerHTML = '<p>It is not good!</p>'
div.classList.add('qwe')