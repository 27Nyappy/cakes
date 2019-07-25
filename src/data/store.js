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

    }
};

export default store;