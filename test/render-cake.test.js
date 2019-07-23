import renderCake from '../src/render-cake.js';

const test = QUnit.test;

QUnit.module('Render Cake');

test('renders a cake', assert => {
    const almond = {
        code: 'almond',
        name: 'Almond Cake',
        image: 'assets/almond.jpeg',
        description: 'A moist, tender and delicate almond flavored cake.',
        category: 'specialty',
        price: 6.50,
        cost: 3.50,
    };

    const expected = '<li class="specialty" title="A moist, tender and delicate almond flavored cake."><h3>Almond Cake</h3><img src="assets/almond.jpeg" alt="Almond Cake Image"><p class="price">$6.50<button value="almond">Add</button></p></li>';

    const dom = renderCake(almond);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
