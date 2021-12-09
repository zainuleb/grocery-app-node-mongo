const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
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
    /*     type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', */
  },
});

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);
