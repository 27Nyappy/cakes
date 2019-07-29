export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}


export function findProduct(cakes, code) {
    for(let i = 0; i < cakes.length; i++) {
        const cake = cakes[i];
        
        if(cake.code === code) {
            return cake;
        }
    }
}


export function getOrderTotal(order, cakes) {
    let orderTotal = 0;
    
    for(let i = 0; i < order.length; i++) {
        const code = order[i].code;
        const foundCake = findProduct(cakes, code);
        const lineTotal = getLineTotal(order[i].quantity, foundCake.price);

        orderTotal += lineTotal;
    }

    return orderTotal;
}