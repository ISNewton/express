
const products = []

exports.index = (req , res , next) => {
    res.render('admin/products' , {
        products: products,
        path: '/admin/products'
    })
}

exports.create = (req , res , next) => {
    res.render('admin/add-product',{
        path: '/admin/add-product'

    })
}

exports.store = (req , res , next) => {
    products.push(req.body.name)
    res.redirect('/admin/products')
}

exports.products = products
