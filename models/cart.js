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
            const product = cart.filter(product => product.id == id)

            if (product.length > 0) {

                cart = cart.map((product) => {
                    if (product.id == id) {
                        ++product.qty
                    }
                    return product
                })
            } else {
                cart.push({
                    id,
                    qty: 1
                })
            }
            fs.writeFile(p, JSON.stringify(cart), (err) => {

            })


        })
    }
}