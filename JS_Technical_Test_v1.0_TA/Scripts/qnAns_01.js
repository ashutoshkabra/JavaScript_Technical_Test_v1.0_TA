var printResult = function (result) {
    console.log('The result is ' + result + '.');
}

function calculator(a, b, operation, printResult) {

    let result = 0;

    if (operation === '+') {
        result = a + b;
    } else if (operation === '-') {
        result = a - b;
    } else if (operation === '*') {
        result = a * b;
    } else if (operation === '/') {
        result = a / b;
    } else {
        result = 'not calculable'
    }

    printResult(result);
}

calculator(10, 5, '+', printResult);
calculator(10, 5, '-', printResult);
calculator(10, 5, '*', printResult);
calculator(10, 5, '/', printResult);
calculator(10, 5, '?', printResult);