let firstNumber = prompt('Введіть перше число');
let numOne = Number(firstNumber)
let secondNumber = prompt('Введіть друге число');
let numTwo = Number(secondNumber)


alert(`
    ${firstNumber} + ${secondNumber} = ${numOne + numTwo}
    ${firstNumber} - ${secondNumber} = ${numOne - numTwo}
    ${firstNumber} * ${secondNumber} = ${numOne * numTwo}
    ${firstNumber} / ${secondNumber} = ${numOne / numTwo}
`);