/* LESSON 3 - Programming Tasks */

/* FUNCTION - Add Numbers */
function add(number1, number2) {
    const sum = number1 + number2;
    return sum;
}

function addNumbers() {
    const add1Value = Number(document.querySelector('#add1').value);
    const add2Value = Number(document.querySelector('#add2').value);

    const sum = add(add1Value, add2Value);

    document.getElementById('sum').textContent = sum;
}

/* Function - Subtract Numbers */
function subtract(number1, number2) {
    const difference = number1 - number2;
    return difference;
}

function subtractNumbers() {
    const subtract1Value = Number(document.querySelector('#subtract1').value);
    const subtract2Value = Number(document.querySelector('#subtract2').value);

    const difference = subtract(subtract1Value, subtract2Value);

    document.getElementById('difference').value = difference;
}

/* Function - Multiply Numbers */
function multiply(number1, number2) {
    const product = number1 * number2;
    return product;
}

function multiplyNumbers() {
    const factor1Value = Number(document.querySelector('#factor1').value);
    const factor2Value = Number(document.querySelector('#factor2').value);

    const product = multiply(factor1Value, factor2Value);

    document.getElementById('product').value = product;
}

/* Function - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
        alert("Division by zero is not allowed.");
        return NaN; 
    }
    return dividend / divisor;
}

function divideNumbers() {
    const dividendValue = Number(document.querySelector('#dividend').value);
    const divisorValue = Number(document.querySelector('#divisor').value);

    const quotient = divide(dividendValue, divisorValue);

    document.getElementById('quotient').value = quotient;
}

/* Decision Structure */
const currentDate = new Date();
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const arrayElement = document.getElementById('array');
arrayElement.textContent = numbersArray.join(', ');

function isOdd(number) {
    return number % 2 === 1;
}

function isEven(number) {
    return number % 2 === 0;
}

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(isOdd);

const oddsElement = document.getElementById('odds');
oddsElement.textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(isEven);

const evensElement = document.getElementById('evens');
evensElement.textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map((element) => {
    return element * 2;
});

/* Output Sum of Multiplied by 2 Array */
const multipliedElement = document.getElementById('multiplied');
multipliedElement.textContent = multipliedArray.join(', ');

/* Event Listeners */
document.getElementById('subtractNumbers').addEventListener('click', function() {
    subtractNumbers();
});

document.getElementById('multiplyNumbers').addEventListener('click', function() {
    multiplyNumbers();
});

document.getElementById('divideNumbers').addEventListener('click', function() {
    divideNumbers();
});
