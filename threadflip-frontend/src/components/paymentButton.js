import React from 'react';
import axios from 'axios';

const Payment = () => {
  const handlePayment = async () => {
    const orderUrl = '/api/payment/create-order';
    const response = await axios.post(orderUrl, {
      amount: 500,
      currency: 'INR',
      receipt: 'receipt#1',
      notes: {
        key1: 'value1',
        key2: 'value2',
      },
    });

    const { amount, id: order_id, currency } = response.data;

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'Acme Corp',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: order_id,
      handler: async function (response) {
        const data = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };

        const verifyUrl = '/api/payment/verify-payment';
        const result = await axios.post(verifyUrl, data);

        alert(result.data.status);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default Payment;
