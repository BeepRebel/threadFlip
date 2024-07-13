import React from 'react';
import './Wishlist.css';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    
    <div className="wishlist-wrapper py-5">
      <h1 className="wishlist-heading slide-in-bottom">My Wishlist</h1>
      <div className="wishlist-container container-xxl">
        
        <div className="wishlist-banner row slide-in-bottom">
          <div className="col-3 product-image">
            <img src="/images/cart/dress.png" alt="Product" />
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
              <button type="submit" className="btnn btn-primary mb-2">Submit</button>
              <Link to="/vote" className="btnn btn-primary mb-2">Vote for Other Users Preferences</Link>
            </form>
          </div>
          <div className="col-3 action-buttons">
            <button className="btnn btneww">Add to Cart</button>
            <button className="btnn btneww">Remove from Wishlist</button>
            <button className="btnn btneww">View Details</button>
          </div>
        </div>
        <div className="wishlist-banner row">
          <div className="col-3 product-image">
            <img src="/images/cart/bag.png" alt="Product" />
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
              <button type="submit" className="btnn btn-primary mb-2">Submit</button>
              <Link to="/vote" className="btnn btn-primary mb-2">Vote for Other Users Preferences</Link>
            </form>
          </div>
          <div className="col-3 action-buttons">
            <button className="btnn btneww">Add to Cart</button>
            <button className="btnn btneww">Remove from Wishlist</button>
            <button className="btnn btneww">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
