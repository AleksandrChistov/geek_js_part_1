// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

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

console.log(getSumOfAddition(1, 2))       // 3
console.log(getSumOfSubtraction(4, 3))    // 1
console.log(getSumOfMultiplication(2, 3)) // 6
console.log(getSumOfDivision(8, 2))       // 4
console.log(getSumOfAddition('0', 2))     // 'Enter correct values!'
