import renderCake from './render-cake.js';
import store from './data/store.js';

const list = document.getElementById('cakes');
const cakes = store.getProducts();

for(let i = 0; i < cakes.length; i++) {
    const cake = cakes[i];
    const dom = renderCake(cake);
    list.appendChild(dom);
}