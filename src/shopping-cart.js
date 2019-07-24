import order from './data/order.js';
import cakes from './data/cakes.js';
import renderLineItems from './render-line-item.js';
import { findProduct, getOrderTotal } from './register.js';
import { toUSD } from './format.js';

const body = document.querySelector('tbody');
const totalDisplay = document.getElementById('total');

for(let i = 0; i < order.length; i++) {
    const lineItem = order[i];
    const product = findProduct(cakes, lineItem.code);
    const dom = renderLineItems(lineItem, product);
    body.appendChild(dom);
}

let total = 0;
for(let i = 0; i < order.length; i++) {
    totalDisplay.textContent = toUSD(total + getOrderTotal(order, cakes));
}