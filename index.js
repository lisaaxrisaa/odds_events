// TODO: this file! :)

const form = document.querySelector('form');
const addNumber = document.querySelector('#number');
const numberBank = document.getElementById('numberBank');
const sortOne = document.getElementById('sortOne');
const sortAll = document.getElementById('sortAll');
const sortOdd = document.querySelector('#odds output');
const sortEven = document.querySelector('#evens output');

let numsArr = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const number = Number(addNumber.value);
  if (!isNaN(number)) {
    numsArr.push(number);
    numberBank.innerText = numsArr;
    addNumber.value = '';
  }
});

sortOne.addEventListener('click', () => {
  if (numsArr.length > 0) {
    const firstNumber = numsArr.shift();

    if (firstNumber % 2 === 0) {
      sortEven.innerText += firstNumber + '';
    } else {
      sortOdd.innerText += firstNumber + '';
    }
  }
  numberBank.innerText = numsArr.join(', ');
});

sortAll.addEventListener('click', () => {
  for (let i = 0; i < numsArr.length; i++) {
    const number = numsArr[i];
    if (number % 2 === 0) {
      sortEven.innerText += number + ',';
    } else {
      sortOdd.innerText += number + ',';
    }
  }
  numsArr = [];
  numberBank.innerText = '';
});
