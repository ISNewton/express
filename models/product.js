const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
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

module.exports = class Product {
  constructor(title, imageUrl, description, price , id = null) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;

    if(id) {
      this.id = id
    }
  }

  save() {
    if(!this.id) {
      this.id = Math.random()
    }
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static find(id,cb) {
    return getProductsFromFile((products) => {
      cb(products.find(product => true))
    })

  }

  update(product) {
    getProductsFromFile((products) => {
      const index = products.findIndex(pro => pro.id == this.id)

      console.log(index);

      products[index] = {
        ...product,
        id: this.id
      }
      fs.writeFile(p, JSON.stringify(products), err => {
      });
      
    })
  }
};
