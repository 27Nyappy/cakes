function renderCake(cake) {
    const li = document.createElement('li');
    li.className = cake.category;
    li.title = cake.description;

    const h3 = document.createElement('h3');
    h3.textContent = cake.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = cake.image;
    img.alt = cake.name + ' Image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = cake.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cake.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderCake;