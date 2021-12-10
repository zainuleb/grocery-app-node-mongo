const express = require('express');
const router = express.Router();

const { Order } = require('../model/order');
const { OrderItem } = require('../model/order-item');

router.get('/', async (req, res) => {
  const orderList = await Order.find();

  if (!orderList) {
    res.status(500).json({ success: false });
  }

  res.send(orderList);
});

router.post('/', async (req, res) => {
  const orderItemIds = Promise.all(
    req.body.orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        productId: orderItem.productId,
        price: orderItem.price,
      });

      newOrderItem = await newOrderItem.save();
      return newOrderItem._id;
    })
  );

  const orderItemIdsResolved = await orderItemIds;

  let order = new Order({
    orderItems: orderItemIdsResolved,
    userId: req.body.userId,
    total: req.body.total,
    discount: req.body.discount,
    shippingAddress: req.body.shippingAddress,
  });

  order = await order.save();

  if (!order) {
    return res.status(400).send('the order cannot be placed');
  }

  res.send(order);
});

module.exports = router;
