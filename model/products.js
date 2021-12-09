const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: { type: Number, default: 0, required: true },
  title: { type: String, required: true, default: '' },
  price: { type: Number, default: 0, required: true },
  description: { type: String, required: true, default: '' },
  category: { type: String, required: true, default: '' },
  image: { type: String, required: true, default: '' },
  ratings: {
    rate: Number,
    count: Number,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

exports.Product = mongoose.model('Products', productSchema);
