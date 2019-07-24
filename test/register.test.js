import cakes from '../src/data/cakes.js';
import order from '../src/data/order.js';
import { getLineTotal, findProduct, getOrderTotal } from '../src/register.js';

const test = QUnit.test;

QUnit.module('Register');

test('Gets line total', assert => {
    const quantity = 2;
    const price = 6.50;

    const expected = 13.00;
    const total = getLineTotal(quantity, price);

    assert.equal(total, expected);
});

test('finds the product', assert => {
    const code = 'almond';

    const expected = {
        code: 'almond',
        name: 'Almond Cake',
        image: 'assets/almond.jpeg',
        description: 'A moist, tender and delicate almond flavored cake.',
        category: 'specialty',
        price: 6.50,
        cost: 3.50,
    };

    const foundProduct = findProduct(cakes, code);

    assert.deepEqual(foundProduct, expected);
});

test('get order total', assert => {
    
});