// Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15

var a = Math.round(Math.random() * (15 - 1) + 1);

console.log(`a = ${a}`);

function showNumbersInOrder(number) {
    switch (true) {
        case number > 0 && number < 15:
            console.log(number);
            showNumbersInOrder(number + 1);
            break;
        case number === 15:
            console.log(15);
            break;
        default:
            console.log('Incorrect value');
    }
}

showNumbersInOrder(a);
