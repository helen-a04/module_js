// Данные о браузере
console.log(window.navigator)

// Тукущая локация
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    })
}else{
    console.log('Navigation is not defender!');
}

// Работа с хранилищем
let userWrapper = document.querySelector('.user');
let form = document.querySelector('.form');

document.querySelector('.auth').onclick = function(e){
    e.preventDefault();

    let username = form.elements.login.value;
    let password = form.elements.pass.value;

    if(username === ''){
        return alert('Error login!');
    }

    if(password === ''){
        return alert('Error pass!');
    }

    if(username !== 'Alex' && password !== '1234'){
        return alert('Error Log in!');
    }

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    isLogin();
};

function isLogin(){
    let user = localStorage.getItem('username');
    let pass = localStorage.getItem('password');

    if(user && pass){
        userWrapper.textContent = user;
        form.style.display = 'none';
    }
}

isLogin();

document.querySelector('.back').onclick = function(){
    history.back();
}

document.querySelector('.go').onclick = function(){
    history.go(1);
}


// Задачка *
console.log(summa(1)(2)(3)(4)(5)(5)(5)(5)(5)(5)());

function summa(x){
    return function(y){
        if(y){
            return summa(x + y)
        }

        return x
    }
}