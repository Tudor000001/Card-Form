var numeInput = document.getElementById('nome');
var locNume = document.getElementById('noome');
var cardNrInput = document.getElementById('cardNrInput');
var cardNr = document.getElementById('cardNr');
var mmInput = document.getElementById('mm');
var yyInput = document.getElementById('yy');
var mmCard = document.getElementById('mmCard');
var yyCard = document.getElementById('yyCard');
var cvcInput = document.getElementById('cvcInput');
var cvcCard = document.getElementById('cvcCard');
var formular = document.getElementById('formular');
var succes = document.getElementById('da');


numeInput.addEventListener('keyup', function () {
    locNume.innerHTML = numeInput.value;
});

var nr = 0;
function addSpacesEveryFourCharacters(str) {
    return str.replace(/(.{4})/g, '$1 ');
}


cardNrInput.addEventListener('keyup', function () {
    cardNr.innerHTML = addSpacesEveryFourCharacters(cardNrInput.value);
});

const telInput = document.querySelector('input[type="tel"]');

mmInput.addEventListener('keyup', function () {
    mmCard.innerHTML = mmInput.value;
});

yyInput.addEventListener('keyup', function () {
    yyCard.innerHTML = yyInput.value;
});

cvcInput.addEventListener('keyup', function () {
    cvcCard.innerHTML = cvcInput.value;
});

const container = document.getElementById('formular'); // Replace 'container' with the ID of the parent element containing the input fields

container.addEventListener('keydown', function (event) {
    const target = event.target;
    const key = event.key;
    const isLetter = /[a-zA-Z]/.test(key);
    const isBackspace = key === 'Backspace';

    if (target.tagName === 'INPUT' && target.type !== 'text' && isLetter && !isBackspace) {
        event.preventDefault();
    }
});

formular.addEventListener('submit', function (event) {
    event.preventDefault();
    formular.style.display = 'none';
    succes.style.display = 'block';
});

numeInput.addEventListener('submit', function (event) {
    event.preventDefault;
});