import store from './data/store.js';

const form = document.getElementById('entry');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const image = formData.get('image');
    getBase64(image, (base64Url) => {
        const product = {
            code: formData.get('code'),
            name: formData.get('name'),
            image: base64Url,
            category: formData.get('category'),
            price: formData.get('price'),
            description: formData.get('description')
        };

        store.addProduct(product);

        form.reset();
    });
});

// took this from class example, originally from StackOverflow
//https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };
}