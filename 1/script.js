// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function showPrimes(count) {
  // число является простым, если оно больше 1 и при этом делится без остатка только на 1 и на себя
  let n = 2;

  nextPrime:
  while(n < count) {
    let j = 2;

    while (j < n) {
      if (n % j === 0) {
        j = 2;
        n++;
        continue nextPrime;
      }

      j++;
    }

    console.log('Prime number: ', n);
    n++;
  }
}

showPrimes(100);
