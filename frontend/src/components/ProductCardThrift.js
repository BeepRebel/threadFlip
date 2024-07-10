import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './ProductCardThrift.css';

const ProductCardThrift = () => {
  return (
    <div className='col-3'>
      <div className='product-card position-relative'>
        <div className='product-image'>
          <img src="/images/home/home-banner-1.png" alt="product-image"/>
          <div className='wishlist-icon'>
            33
          </div>
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <h5 className='product-title'>product name</h5>
          <p className='price'>price here</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>icon</div>
            <div className='d-flex flex-column gap-15'>icon</div>
            <div className='d-flex flex-column gap-15'>icon</div>
            <div className='d-flex flex-column gap-15'>icon</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardThrift;
