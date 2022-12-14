const submitButton = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');
const resultSection = document.querySelector('#result');

let gender = 0;
let stress = 0;

const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

const norm = document.querySelector('.norm');
const less = document.querySelector('.less');
const more = document.querySelector('.more');

function checkFullfillness() {
  if (age.value == '' || age.value <= 0 || age.value > 150) {
    age.textContent = '';
    age.style.border = '1px solid red';
    resultSection.style.display = 'none';
  } else {
    age.style.border = '1px solid #C4B9CF'
  }
  if (height.value == '' || height.value <= 0 || height.value > 300) {
    height.textContent = '';
    height.style.border = '1px solid red';
    resultSection.style.display = 'none';
  } else {
    height.style.border = '1px solid #C4B9CF'
  }
  if (weight.value == '' || weight.value <= 0 || weight.value > 600) {
    weight.textContent = '';
    weight.style.border = '1px solid red';
    resultSection.style.display = 'none';
  } else {
    weight.style.border = '1px solid #C4B9CF'
  }

  event.preventDefault();
}

function calc() {
  let valueForNorm = 0;
  let valueForLess = 0;
  let valueForMore = 0;

  if (document.querySelector('#female').checked === true) {
    gender = -1;
  } else if (document.querySelector('#male').checked === true) {
    gender = 1;
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
  }

  if (gender === -1) {
    valueForNorm = Math.floor(((10 * Number(weight.value)) + (6.25 * Number(height.value)) - (5 * Number(age.value)) - 161) * Number(stress));
  } else if (gender === 1) {
    valueForNorm = Math.floor(((10 * Number(weight.value)) + (6.25 * Number(height.value)) - (5 * Number(age.value)) + 5) * Number(stress));
  }

  valueForLess = Math.floor(valueForNorm - (0.15 * valueForNorm));
  valueForMore = Math.floor(valueForNorm + (0.15 * valueForNorm));

  norm.textContent = valueForNorm;
  less.textContent = valueForLess;
  more.textContent = valueForMore;

  resultSection.style.display = 'block';

  checkFullfillness();

  event.preventDefault();
}

function clear () {
  document.querySelector('#male').checked = true;

  age.value = '';
  height.value = '';
  weight.value = '';

  age.style.border = '1px solid #C4B9CF'
  height.style.border = '1px solid #C4B9CF'
  weight.style.border = '1px solid #C4B9CF'

  document.querySelector('#min').checked = true;

  resultSection.style.display = 'none';
  resetButton.style.display = 'none';

  event.preventDefault();
}

function showButton() {
  let count = 0;
  if (age.value != '' || height.value != '' || weight.value != '') {
    count++;
  }
  if (document.querySelector('#min').checked !== true) {
    count++;
  }
  if (document.querySelector('#male').checked !== true) {
    count++
  }

  if (count > 0) {
    resetButton.style.display = 'block';
  } else if (count === 0) {
    resetButton.style.display = 'none';
  }
}

age.addEventListener('input', showButton);
height.addEventListener('input', showButton);
weight.addEventListener('input', showButton);

document.querySelector('#female').addEventListener('change', showButton);
document.querySelector('#male').addEventListener('click', showButton);

document.querySelector('#min').addEventListener('click', showButton);
document.querySelector('#low').addEventListener('click', showButton);
document.querySelector('#middle').addEventListener('click', showButton);
document.querySelector('#high').addEventListener('click', showButton);
document.querySelector('#hardcore').addEventListener('click', showButton);

submitButton.addEventListener('click', calc);
resetButton.addEventListener('click', clear);
