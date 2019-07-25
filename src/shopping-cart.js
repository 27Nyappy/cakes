import store from './data/store.js';
import renderLineItems from './render-line-item.js';
import { getOrderTotal } from './register.js';
import { toUSD } from './format.js';

const body = document.querySelector('tbody');
const totalDisplay = document.getElementById('total');
const order = store.getShoppingCart();
const cakes = store.getProducts();

for(let i = 0; i < order.length; i++) {
    const lineItem = order[i];
    const product = store.getProduct(lineItem.code);
    const dom = renderLineItems(lineItem, product);
    body.appendChild(dom);
}

for(let i = 0; i < order.length; i++) {
    totalDisplay.textContent = toUSD(getOrderTotal(order, cakes));
}