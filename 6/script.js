// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function getSumOfAddition(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return 'Enter correct values!';
}

function getSumOfSubtraction(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    return 'Enter correct values!';
}

function getSumOfMultiplication(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    return 'Enter correct values!';
}

function getSumOfDivision(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a / b;
    }
    return 'Enter correct values!';
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return getSumOfAddition(arg1, arg2);
        case '-':
            return getSumOfSubtraction(arg1, arg2);
        case '*':
            return getSumOfMultiplication(arg1, arg2);
        case '/':
            return getSumOfDivision(arg1, arg2);
        default:
            return 'Enter the correct operation character';
    }
}

console.log(mathOperation(4, 2, '+')); // 6
console.log(mathOperation(4, 2, '-')); // 2
console.log(mathOperation(4, 2, '*')); // 8
console.log(mathOperation(4, 2, '/')); // 2
