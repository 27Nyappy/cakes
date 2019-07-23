import renderCake from './render-cake.js';
import cakes from './cakes.js';

const list = document.getElementById('cakes');

for(let i = 0; i < cakes.length; i++) {
    const cake = cakes[i];
    const dom = renderCake(cake);
    list.appendChild(dom);
}