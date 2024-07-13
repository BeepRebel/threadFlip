
import React from 'react';
import './StepwiseGuide.css'; // Import your CSS file for styling

const StepwiseGuide = () => {
  return (
    <div className="stepwise-guide">
      <div className="container">
        <h3>Stepwise Guide to Selling Clothes Online</h3>
        <div className="row">
          <div className="col-md-12">
            <div className="step-card">
            <h3>Step 1: Register as an Amazon Seller</h3>
              <p>To create your seller account on Amazon.in you will need to submit the following details:</p>
          <ul>
            <li>Your GST and PAN information</li>
            <li>An active bank account for payments</li>
          </ul>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="step-card">
            <h3>Step 2: Listing Your Products</h3>
              <p>Please note that clothing items are referred to as 'Apparel' on Amazon.in.</p>
          <p>Next, you will need to display your products on Amazon.in for customers to purchase.</p>
          <ul>
            <li>If the apparel is available on Amazon.in, you can add a new offer by matching it to the existing product or by scanning the product barcode or ISBN through the Seller App.</li>
            <li>If you have a new brand of apparel that is not currently listed on Amazon.in, you will need to create a new listing by uploading product images and filling in the details.</li>
          </ul>
          <p>*Please note that in order to list your product, you will be required to provide the following details:</p>
          <ul>
            <li>Size chart to help buyers make informed buying decisions and to avoid high customer returns.</li>
            <li>5 model images as per guidelines provided on Seller Central.</li>
            <li>Need to mention wash-care instructions, material, etc.</li>
          </ul>
            </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="step-card">
            <h3>Step 3: Deliver to Customer</h3>
          <p>Once your product receives an order, you will need to deliver it to the customer.</p>
          <p>There are many ways to do this:</p>
          <ul>
            <li>Fulfillment by Amazon (FBA): Amazon takes care of storing, packing, and delivering your products.</li>
            <li>Easy Ship (ES): You store and pack your products, Amazon delivers them to your customer’s doorstep.</li>
            <li>Self-Ship (SS): You store, pack, and deliver your products.</li>
          </ul>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="step-card">
            <h3>Step 4: Get Paid Every 7 Days</h3>
          <p>You will get paid for your delivered orders in 7-day payment cycles after deducting the Amazon fees.</p>
          <p>Funds are deposited directly into your bank account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepwiseGuide;


