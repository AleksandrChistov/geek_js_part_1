// 2. Реализовать модуль корзины. Создать блок товаров и блок корзины.
// У каждого товара есть кнопка «Купить», при нажатии на которую
// происходит добавление имени и цены товара в блок корзины.
// Корзина должна уметь считать общую сумму заказа.

class ShoppingCart {
  constructor() {
    this.nodes = {
      info: document.querySelector('.purchases'),
      totalItems: document.querySelector('.items'),
      totalSum: document.querySelector('.amount'),
    }
    this.products = [];
    this.number = 0;
    this.amount = 0;

    const clearBtnNode = document.querySelector('.clear');
    clearBtnNode.addEventListener('click', this.clear.bind(this));
  }

  increaseNumber() {
    this.number++;
    this.nodes.totalItems.textContent = this.number.toString();
  }

  increaseAmount(sum) {
    this.amount += sum;
    this.nodes.totalSum.textContent = this.amount.toString();
  }

  addProduct(product) {
    const productInCart = this.products.find(productInCart => productInCart.id == product.id);

    if (productInCart) {
      productInCart.node.textContent = `${productInCart.name} ${++productInCart.count} pieces`;
    } else {
      let element = document.createElement('p');
      element.textContent = `${product.name} 1 pieces`;

      this.nodes.info.append(element);

      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        count: 1,
        node: element
      }

      this.products.push(newProduct);
    }

    this.increaseNumber();
    this.increaseAmount(product.price);
  }

  clear() {
    this.products = [];
    this.number = 0;
    this.amount = 0;
    this.nodes.info.textContent = '';
    this.nodes.totalItems.textContent = '0';
    this.nodes.totalSum.textContent = '0';
  }
}

class Products {
  constructor(products) {
    this.cart = new ShoppingCart();
    this.products = products;
  }

  addProductsToPage(productsNode) {
    this.products.forEach(product => {
      const template = productTemplate.content.cloneNode(true);
      const card = template.children[0];
      const elements = this.getElementsFromCard(card);

      card.setAttribute('id', product.id);
      elements.title.textContent = product.name;
      elements.img.src = product.img.url;
      elements.img.alt = product.img.alt;
      elements.price.textContent = product.price;
      elements.button.addEventListener('click', this.cart.addProduct.bind(this.cart, product));

      productsNode.append(card);
    })
  }

  getElementsFromCard(card) {
    return {
      title: card.querySelector('h3'),
      img: card.querySelector('img'),
      price: card.querySelector('.price'),
      button: card.querySelector('.buy')
    }
  }
}

const productsNode = document.querySelector('.products');
const products = new Products(goods);
products.addProductsToPage(productsNode);
