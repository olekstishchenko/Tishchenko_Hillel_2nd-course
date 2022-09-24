let mathOperation = prompt('Яку математичну операцію оберете?(add, sub, mult, div)')
let firstNumber = prompt('Введіть перше число');
let numOne = Number(firstNumber)
let secondNumber = prompt('Введіть друге число');
let numTwo = Number(secondNumber)


// alert(`
//     ${firstNumber} + ${secondNumber} = ${numOne + numTwo}
//     ${firstNumber} - ${secondNumber} = ${numOne - numTwo}
//     ${firstNumber} * ${secondNumber} = ${numOne * numTwo}
//     ${firstNumber} / ${secondNumber} = ${numOne / numTwo}
// `);

if (mathOperation==='add') {
    alert(`${firstNumber} + ${secondNumber} = ${numOne + numTwo}`);
} else if (mathOperation==='sub'){
    alert(`${firstNumber} - ${secondNumber} = ${numOne - numTwo}`);
} else if (mathOperation==='mult') {
    alert(`${firstNumber} * ${secondNumber} = ${numOne * numTwo}`);
} else if (mathOperation==='div'){
    alert(`${firstNumber} / ${secondNumber} = ${numOne / numTwo}`);
} else {
    alert('Неправильна функція')
}


let hours = prompt('Яку кількість годин необхідно перевести в секунди?');
let hoursQuantity = Number(hours)
let result = hoursQuantity*3600;
if (result >= 0) {
    alert(`В ${hoursQuantity} годинах ${result} секунд`);
}
    else {
        alert('Неправильне значення')
}
