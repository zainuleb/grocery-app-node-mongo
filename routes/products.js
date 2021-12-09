const express = require('express');
const router = express.Router();

const { Product } = require('../model/products');

//Get All Products
router.get(`/`, async (req, res) => {
  const productList = await Product.find();

  if (!productList) {
    res.status(500).json({ success: false });
  }

  res.send(productList);
});

//Post: Create Product
router.post(`/`, (req, res) => {
  const product = new Product({
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
    ratings: {
      rate: req.body.ratings.rate,
      count: req.body.ratings.count,
    },
  });

  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

module.exports = router;
