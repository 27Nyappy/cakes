import cakes from '../data/cakes.js';
import { findProduct } from '../register.js';

const store = {
    storage: window.localStorage,

    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },

    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },

    getProducts() {
        let products = store.get('cake');

        if(!products) {
            store.save('cake', cakes);
            products = cakes;
        }
        return products;
    },

    getShoppingCart() {
        let cart = store.get('delicious');

        if(!cart) {
            cart = [];
        }
        return cart;
    },

    orderProduct(code) {
        const cart = store.getShoppingCart();
        const item = findProduct(cart, code);

        if(item) {
            item.quantity++;
        }
        else {
            const item = {
                code: code,
                quantity: 1
            };

            cart.push(item);
        }

        store.save('delicious', cart);
    },

    getProduct(code) {
        const cakes = store.getProducts();
        const product = findProduct(cakes, code);
        
        return product;
    },

    addProduct(product) {
        const cakes = store.getProducts();
        cakes.push(product);
        store.save('cake', cakes);
    }

};

export default store;