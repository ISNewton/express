const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(title, image, description, price);
  // product.save();
  Product.create({
    title,
    image,
    price,
    description
  })
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {

  Product.findAll()
    .then(products => {
      Product.fetchAll(products => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products',
          path: '/admin/products'
        });
      });
    })

};

exports.editProduct = (req, res, next) => {

  const product = Product.create()
  // Product.find(req.params.id, (product) => {

  //   console.log(product);
  //   res.render('admin/edit-product', {
  //     pageTitle: 'Edit Product',
  //     path: '/admin/edit-product',
  //     formsCSS: true,
  //     productCSS: true,
  //     activeAddProduct: false,
  //     product,
  //   });

  // })

}


exports.updateProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.image,
    req.body.description,
    req.body.price,
    req.params.id,
  )

  product.update({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
  })

  res.redirect('/')
}

exports.deleteProduct = (req, res, next) => {
  let product = Product.find(req.params.id, (product) => {
    new Product(
      req.body.title,
      req.body.image,
      req.body.description,
      req.body.price,
      req.params.id,
    ).delete()
    res.redirect('/')

  })



}