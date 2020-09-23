// *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (val > 0) {
        return pow > 1 ? val * power(val, pow - 1) : val;
    } else {
        return 'The value cannot be less than 1!';
    }
}

console.log(power(2, 3)); // 8
