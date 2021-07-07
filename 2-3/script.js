// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basket = [
  {
    name: 'dress',
    count: 10,
    price: 1450
  },
  {
    name: 'skirt',
    count: 4,
    price: 850
  },
  {
    name: 'tights',
    count: 25,
    price: 250
  },
  {
    name: 'shoes',
    count: 3,
    price: 3150
  }
  ,
  {
    name: 'hat',
    count: 0,
    price: 250
  }
]

function countBasketPrice(basket) {
  let sum = 0;

  for (let goods of basket) {
    if (goods.count > 0) {
      sum += goods.price * goods.count;
    }
  }

  return sum;
}

const result = countBasketPrice(basket);

console.log('Sum: ', result);
