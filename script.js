const submitButton = document.querySelector('#submit'); // подключили кнопку рассчёта
const resetButton = document.querySelector('#reset'); // подключили кнопку сброса
const resultSection = document.querySelector('#result'); // подключили секцию с результатом

let gender = 0; // это счётчик индекса пола
let stress = 0; // это счётчик индекса нагрузки

const age = document.querySelector('#age');  // это мы присоединили инпуты физ. данных с js
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

const norm = document.querySelector('.norm'); //это мы соединили спаны с js
const less = document.querySelector('.less');
const more = document.querySelector('.more');

function calc() {
  let valueForNorm = 0;
  let valueForLess = 0;
  let valueForMore = 0;

  if (document.querySelector('#female').checked === true) { // выбираем пол
    gender = -1;
  } else if (document.querySelector('#male').checked === true) {
    gender = 1;
  } else {
    // добавить действие в случае, если забыли выбрать пол
  }
  
  if (document.querySelector('#min').checked === true) {
    stress = document.querySelector('#min').value;
  } else if (document.querySelector('#low').checked === true) {
    stress = document.querySelector('#low').value;
  } else if (document.querySelector('#middle').checked === true) {
    stress = document.querySelector('#middle').value;
  } else if (document.querySelector('#high').checked === true) {
    stress = document.querySelector('#high').value;
  } else if (document.querySelector('#hardcore').checked === true) {
    stress = document.querySelector('#hardcore').value;
  } else {
    // действие, если забыли выбрать нагрузку
  }

  if (gender = -1) {
    valueForNorm = ((10 * Number(weight.value)) + (6.25 * Number(height.value)) - (5 * Number(age.value)) - 161) * stress;
  } else {
    valueForNorm = ((10 * Number(weight.value)) + (6.25 * Number(height.value)) - (5 * Number(age.value)) + 5) * stress;
  }

  valueForLess = valueForNorm - (0.15 * valueForNorm);
  valueForMore = valueForNorm + (0.15 * valueForNorm);

  norm.textContent = toString(valueForNorm);
  less.textContent = toString(valueForLess);
  more.textContent = toString(valueForMore);

  resultSection.style.display = 'block';

  event.preventDefault();
}

submitButton.addEventListener('click', calc);
