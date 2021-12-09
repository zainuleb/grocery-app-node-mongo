const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = mongoose.Schema(
  {
    _id: Number,
    orderItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
      },
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    total: { type: Number, required: true },
    discount: {
      type: Number,
      required: true,
    },
    shippingAddress: [{ type: String, required: true }],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

orderSchema.plugin(autoIncrement);

exports.Order = mongoose.model('Order', orderSchema);
