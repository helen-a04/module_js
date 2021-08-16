let countLetters = document.querySelector('.letters');

document.querySelector('textarea').oninput = function(e){
    let value = e.target.value;

    countLetters.innerHTML = value.length
}