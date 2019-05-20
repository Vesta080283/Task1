'use strict'
window.onload = () => {   
    const addMethod = () => {
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

        //получим количество децимальный разрядов в введёных числах и выберем большее из них
        let countDec1 = countDigits(num1);
        let countDec2 = countDigits(num2);
        let countDec = (countDec1 >= countDec2) ? countDec1 : countDec2;

        let result;
        result = (num1 + num2).toFixed(countDec);

        alert('Результат: ' + String(result));
    }

    const countDigits = (num) => {
       return (num.toString().includes('.')) ? (num.toString().split('.').pop().length) : 0;
    }    

    document.querySelector('#addBtn').addEventListener('click', addMethod);
    
}
