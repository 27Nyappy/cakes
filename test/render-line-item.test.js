import cakes from '../src/data/cakes.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('render cart', assert => {
    const lineItem = {
        code: 'almond',
        quantity: 2,
    };
    
    const almond = findProduct(cakes, lineItem.code);
    const expected = '<tr><td>2</td><td>Almond Cake</td><td class="align-right">$6.50</td><td class="align-right number">$13.00</td></tr>';
    
    const dom = renderLineItem(lineItem, almond);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});