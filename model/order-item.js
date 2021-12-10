const mongoose = require('mongoose');
const orderItemSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productId: {
    type: Number,
  },
});

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);
