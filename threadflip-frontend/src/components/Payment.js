// src/components/Payment.js

import React from 'react';

const Payment = () => {
  const loadRazorpayScript = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  };

  const handlePayment = async () => {
    const res = await fetch('/api/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 500, // amount in paise
        currency: 'INR',
        receipt: 'receipt#1',
        notes: {
          note1: 'Note 1',
          note2: 'Note 2',
        },
      }),
    });

    const data = await res.json();

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: 'ThreadFlip',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);

        fetch('/api/payment/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        })
          .then(res => res.json())
          .then(data => alert(data.status));
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

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  React.useEffect(() => {
    loadRazorpayScript();
  }, []);

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
