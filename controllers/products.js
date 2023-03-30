const fs = require('fs')
const path = require('path')

const productsFile = path.join(__dirname, '../', 'data', 'products.json')

exports.index = (req, res, next) => {


    const products = []

    fs.readFile(productsFile, (err, data) => {
        if (!err) {
            products.push(JSON.parse(data))
        }
    });
    res.render('admin/products', {
        products: products,
        path: '/admin/products'
    })
}

exports.create = (req, res, next) => {
    res.render('admin/add-product', {
        path: '/admin/add-product'

    })
}

exports.store = (req, res, next) => {
    // products.push(req.body.name)
    let products = []

    fs.readFile(productsFile, (err, data) => {

        if (!err) {
            products = JSON.parse(data)
        }
        products.push(req.body.name)

        fs.writeFile(productsFile , JSON.stringify(products),(err) => {
            console.log(err);
        })

    })

    res.redirect('/admin/products')
}

// exports.products = products
