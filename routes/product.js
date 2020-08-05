const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const product_name = req.body.product_name;
  const product_description = req.body.product_description;
  const product_varieties = req.body.product_varieties;
  const product_size = Number(req.body.product_size);
  const product_color = req.body.product_color;
  const product_quantity = Number(req_body_product_quantity);
  const product_images = req_body_product_images;
  const product_price = req_body_product_price;
  const date_uploaded = Date.parse(req_body_date_uploaded);
  const date_edited = Date.parse(req_body_date_edited);
  const date = Date.parse(req.body.date);

  const newProduct = new Product({
    product_name,
    product_description,
    product_varieties,
    product_size,
    product_color,
    product_quantity,
    product_images,
    product_price,
    date_uploaded,
    date_edited,
    date

  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
         product_name = req.body.product_name;
         product_description = req.body.product_description;
         product_varieties = req.body.product_varieties;
         product_size = Number(req.body.product_size);
         product_color = req.body.product_color;
         product_quantity = Number(req_body_product_quantity);
         product_images = req_body_product_images;
         product_price = req_body_product_price;
         date_uploaded = Date.parse(req_body_date_uploaded);
         date_edited = Date.parse(req_body_date_edited);
         date = Date.parse(req.body.date);

      product.save()
        .then(() => res.json('product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;