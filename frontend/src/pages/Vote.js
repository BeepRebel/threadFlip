import React from 'react';
import './Vote.css';

const Vote = () => {
  return (
    <div className="vote-wrapper">
      <div className="container-xxl ">
        <div className="row">
          {/* First Row - Image and Product Details */}
          <div className="col-lg-6">
            <div className="vote-item">
              <img src="/images/cart/dress.png" alt="Product" className="img-fluid magei" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="vote-item">
              <div className="product-details middle">
                <h2>Product Title</h2>
                <p>Product description goes here. This includes all the details about the product.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Polls */}
        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="poll poll-option-container">
              <h3>Dress Length</h3>
              <div className="poll-option">
                <p>Shorter</p>
                <p className='first'>1.2k votes</p>
              </div>
              <div className="poll-option">
                <p>Longer</p>
                <p className='second'>5 votes</p>
              </div>
              <button className="btn btn-primary">Vote</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="poll poll-option-container">
              <h3>Color</h3>
              <div className="poll-option">
                <p >Pink</p>
                <p className='first'>4.5k votes</p>
              </div>
              <div className="poll-option">
                <p>Blue</p>
                <p className='fourth'>2.2k votes</p>
              </div>
              <div className="poll-option">
                <p>Red</p>
                <p className='third'>927 votes</p>
              </div>
              <div className="poll-option">
                <p>Magenta</p>
                <p className='second'>334 votes</p>
              </div>
              <button className="btn btn-primary">Vote</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="poll poll-option-container">
              <h3>Size</h3>
              <div className="poll-option">
                <p>Plus</p>
                <p className='first'>2k votes</p>
              </div>
              <div className="poll-option">
                <p>Extra Small</p>
                <p className='third'>657 votes</p>
              </div>
              <button className="btn btn-primary">Vote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
