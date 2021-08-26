let newCategory = document.querySelector('.js-category');
let btnNewCategory = document.querySelector('.js-add-Category');

let listCategory = document.querySelector('.category__list');

btnNewCategory.addEventListener('click', addCategory);

function addCategory (e) {
    e.preventDefault();

    let value = newCategory.value;

    // Валидация новой категории
    if(!validateCategory(value)) {
        return
    }

    // Добавление категории в глобальную переменнную
    categories.push(newCategory.value)
    renderCategory();

    console.log(categories);
}

function validateCategory (category) {
    let hasErrors = false;

    if(category === "") {
        hasErrors = true;
    }

    return hasErrors;
}

function renderCategory () {
listCategory.innerHTML = '';

    categories.forEach(function(category) {
        listCategory.innerHTML = '';
        listCategory.appendChild(category);
    })
}

function templateItemCategory(name) {
    let wrapperItem = documet.createElement('div');
    wrapperItem.className = 'categories__item';

    let textItem = document.createElement('p');
    textItem.className = 'categories__name'
    textItem.textContent = name;

    let editItem = document.createElement('button');
    editItem.className = 'categories__edit';
    editItem.textContent = 'Edit';

    return create;
}