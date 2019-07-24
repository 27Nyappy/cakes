import { getLineTotal } from './register.js';
import { toUSD } from './format.js';

function renderLineItem(lineItem, cake) {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = lineItem.quantity;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = cake.name;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.className = 'align-right';
    td3.textContent = toUSD(cake.price);
    tr.appendChild(td3);

    const td4 = document.createElement('td');
    td4.className = 'align-right number';
    const total = getLineTotal(lineItem.quantity, cake.price);
    td4.textContent = toUSD(total);
    tr.appendChild(td4);

    return tr;
}

export default renderLineItem;