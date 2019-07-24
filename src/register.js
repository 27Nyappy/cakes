//getLineTotal
export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

//findProduct
export function findProduct(cakes, code) {
    for(let i = 0; i < cakes.length; i++) {
        const cake = cakes[i];
        
        if(cake.code === code) {
            return cake;
        }
    }
}

//getOrderTotal
export function getOrderTotal(order, cakes) {
    findProduct


    }
}