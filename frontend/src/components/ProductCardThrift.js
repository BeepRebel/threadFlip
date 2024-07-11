import React from 'react';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductCardThrift.css';

const ProductCardThrift = ({id , brand, title, price, image, rating }) => {
  return (
    <div className='col-md-3'>
      <div className='card product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
        <Link to="#wishlist" className='wishlist-icon'><FontAwesomeIcon icon={faHeart} /></Link>
        </div>
        <Link to="id">
          <img src={image} className='card-img-top' alt="product-image" />
        </Link>
        <div className='card-body'>
          <h6 className='card-subtitle mb-2 text-muted'>{brand}</h6>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>₹{price}</p>
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={rating}
            activeColor="#ffd700"
          />
          <button className='btn btn-primary mt-3 w-100'>Thrift</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardThrift;

