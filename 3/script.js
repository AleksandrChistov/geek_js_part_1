var a = -2;
var b = 10;

// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

function showCalculationResult(a, b) {
    if (a >= 0 && b >= 0) {
        alert(`Subtraction result: ${a - b}`);
    } else if (a < 0 && b < 0) {
        alert(`Multiplication result: ${a * b}`);
    } else {
        alert(`Addition result: ${a + b}`);
    }
}

showCalculationResult(a, b);
