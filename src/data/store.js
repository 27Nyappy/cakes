import cakes from '../data/cakes.js';

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
        let cart = store.get('cake');

        if(!cart) {
            cart = [];
        }
        return cart;
    }

};

export default store;