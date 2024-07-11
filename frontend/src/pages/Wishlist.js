import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  return (
    <div className="wishlist-wrapper py-5">
      <div className="wishlist-container container-xxl">
        <div className="wishlist-banner row">
          <div className="col-3 product-image">
            <img src="/images/sample-product.jpg" alt="Product" />
          </div>
          <div className="col-3 product-details">
            <h2>Product Title</h2>
            <p>Product description goes here. This includes all the details about the product.</p>
          </div>
          <div className="col-3 feedback-form">
            <h3>Feedback</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label">Your Feedback</label>
                <textarea className="form-control" id="feedback" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-3 action-buttons">
            <button className="btn btn-secondary mb-2">Add to Cart</button>
            <button className="btn btn-danger mb-2">Remove from Wishlist</button>
            <button className="btn btn-info mb-2">View Details</button>
          </div>
        </div>
        <div className="wishlist-banner row">
          <div className="col-3 product-image">
            <img src="/images/sample-product.jpg" alt="Product" />
          </div>
          <div className="col-3 product-details">
            <h2>Product Title</h2>
            <p>Product description goes here. This includes all the details about the product.</p>
          </div>
          <div className="col-3 feedback-form">
            <h3>Feedback</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label">Your Feedback</label>
                <textarea className="form-control" id="feedback" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-3 action-buttons">
            <button className="btn btn-secondary mb-2">Add to Cart</button>
            <button className="btn btn-danger mb-2">Remove from Wishlist</button>
            <button className="btn btn-info mb-2">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
