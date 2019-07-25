import store from '../src/data/store.js';
import cakes from '../src/data/cakes.js';

const test = QUnit.test;

QUnit.module('store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('confirmation of storage = window.sessionStorage', assert => {
    const expected = window.sessionStorage;

    assert.equal(store.storage, expected);
});

test('get and save methods', assert => {
    const a = 'cake';
    const cake = { flavor: 'chocolate' };

    store.save(a, cake);

    const retrieve = store.get(a);

    assert.deepEqual(retrieve, cake);

});

test('gets products with bootstrapped default', assert => {
    const products = store.getProducts();
    
    assert.deepEqual(products, cakes);
});

test('get shopping cart', assert => {
    const cart = store.getShoppingCart();

    assert.deepEqual(cart, []);
});