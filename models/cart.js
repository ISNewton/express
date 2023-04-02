const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};


module.exports = class Cart {
    static fetchAll() {
        getProductsFromFile(cart => {
            console.log(cart);
        })
    }

    static add(id) {
        getProductsFromFile(cart => {
            console.log(cart);
            const product = cart.filter(product => product.productId == id)
            console.log(product);

            if(product) {
                cart = cart.map((product) => {
                    if(product.)
                })
            }
        })
    }
}