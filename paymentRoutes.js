const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Route to create an order
router.post('/create-order', async (req, res) => {
  const { amount, currency, receipt, notes } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in the smallest currency unit (paise)
      currency,
      receipt,
      notes,
    });
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to verify payment
router.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = shasum.digest('hex');

  if (digest === razorpay_signature) {
    res.json({ status: 'success' });
  } else {
    res.status(400).json({ status: 'failure' });
  }
});

module.exports = router;
