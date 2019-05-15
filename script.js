'use strict'
document.querySelector('#addBtn').addEventListener('click', () => {
    let num1 = document.querySelector('#n1').value;
    let num2 = document.querySelector('#n2').value;

    if (isNaN(num1) || num1 == '') {
        num1 = 0.1;
        document.querySelector('#n1').defaultValue = num1;
    }

    if (isNaN(num2) || num2 == '') {
        num2 = 0.2;
        document.querySelector('#n2').defaultValue = num2;
    }

    num1 = Number(num1);
    num2 = Number(num2);
    let result;
    result = num1 + num2;

    alert("Вывод: " + result);
});
