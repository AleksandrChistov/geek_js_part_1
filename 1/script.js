// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function convertNumberToObject(number) {
  const names = ['units', 'dozens', 'hundreds'];
  const result = {
    units: 0,
    dozens: 0,
    hundreds: 0
  }

  if (number > 999) {
    console.log(`Transmitted number (${number}) must be less than 999!`);
    return {};
  }

  const nString = number.toString();

  for (let i = 0; i < nString.length; i++) {
    result[names[i]] = +nString[i];
  }

  return result;
}

console.log(convertNumberToObject(987));
