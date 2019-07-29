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

test('order product code to empty shopping cart', assert => {
    const code = 'almond';
    const expected = [{
        code: 'almond',
        quantity: 1
    }];
   
    store.orderProduct(code);
    const cart = store.getShoppingCart();

    assert.deepEqual(cart, expected);
    
});

test('add product to shopping cart', assert => {
    const code = 'almond';
    const expected = [{
        code: 'almond',
        quantity: 2
    }];

    store.orderProduct(code);
    store.orderProduct(code);
    const cart = store.getShoppingCart();
    assert.deepEqual(cart, expected);

});

test('get product', assert => {
    const code = 'almond';
    const expected = cakes[0];

    const product = store.getProduct(code);

    assert.deepEqual(product, expected);
});

test('API method for add product', assert => {
    const product = {
        code: 'banana',
        name: 'Banana Cake',
        image: 'assets/banana.jpg',
        category: 'classic',
        price: 3.50,
        description: 'A moist, flavorful and fresh banana cake.',
    };

    store.addProduct(product);
    const cakes = store.getProducts();

    assert.deepEqual(cakes[cakes.length - 1], product);
});