window.addEventListener('load', simpleCalculator);

function simpleCalculator() {
    let inputElement = document.getElementById('inputField');
    let currentInput = [];
    let firstNum = 0;
    let secondNum = 0;
    let symbol = '';

    let zeroDigit = document.getElementById('zero');
    let oneDigit = document.getElementById('one');
    let twoDigit = document.getElementById('two');
    let threeDigit = document.getElementById('three');
    let fourDigit = document.getElementById('four');
    let fiveDigit = document.getElementById('five');
    let sixDigit = document.getElementById('six');
    let sevenDigit = document.getElementById('seven');
    let eightDigit = document.getElementById('eight');
    let nineDigit = document.getElementById('nine');

    let dotSymbol = document.getElementById('dotSymbol');
    let sumSymbol = document.getElementById('sum');
    let subtractSymbol = document.getElementById('subtract');
    let multiplySymbol = document.getElementById('multiply');
    let devideSymbol = document.getElementById('devide');
    let equalSymbol = document.getElementById('equalTo');
    let acSymbol = document.getElementById('AC');

    zeroDigit.addEventListener('click', (e) => addNum(e));
    oneDigit.addEventListener('click', (e) => addNum(e));
    twoDigit.addEventListener('click', (e) => addNum(e));
    threeDigit.addEventListener('click', (e) => addNum(e));
    fourDigit.addEventListener('click', (e) => addNum(e));
    fiveDigit.addEventListener('click', (e) => addNum(e));
    sixDigit.addEventListener('click', (e) => addNum(e));
    sevenDigit.addEventListener('click', (e) => addNum(e));
    eightDigit.addEventListener('click', (e) => addNum(e));
    nineDigit.addEventListener('click', (e) => addNum(e));
    dotSymbol.addEventListener('click', (e) => addNum(e));

    acSymbol.addEventListener('click', (e) => {
        inputElement.value = '';
        currentInput = [];
    }); 
    sumSymbol.addEventListener('click', (e) => {
        firstNum = Number(currentInput.join(''));
        currentInput = [];
        symbol = '+';
    });
    subtractSymbol.addEventListener('click', (e) => {
        firstNum = Number(currentInput.join(''));
        currentInput = [];
        symbol = '-';
    });
    devideSymbol.addEventListener('click', (e) => {
        firstNum = Number(currentInput.join(''));
        currentInput = [];
        symbol = '/';
    });
    multiplySymbol.addEventListener('click', (e) => {
        firstNum = Number(currentInput.join(''));
        currentInput = [];
        symbol = '*';
    });
    equalSymbol.addEventListener('click', (e) => {
        secondNum = Number(currentInput.join(''));
        currentInput = [];
        if (symbol == '+') {
            inputElement.value = firstNum + secondNum;
        } else if (symbol == '-') {
            inputElement.value = firstNum - secondNum;
        } else if (symbol == '/') {
            inputElement.value = firstNum / secondNum;
        } else if (symbol == '*') {
            inputElement.value = firstNum * secondNum;
        }
    });


    function addNum(e) {
        currentInput.push(e.currentTarget.textContent);
        inputElement.value = currentInput.join('');
    }
}