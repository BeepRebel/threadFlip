import React, { useState } from 'react';
import 'react-router-dom';
import './ProductCard.css';
import ProductModal from './ProductModal';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="col-md-3 mb-4" >
        <div className="custom-product-card" onClick={handleShowModal}>
          <div className="custom-card-img-wrapper">
            <img src={product.image} alt={product.title} className="custom-card-img-top" />
            <div className="custom-heart-icon">
              <i className="far fa-heart"></i>
            </div>
            <div className="custom-rating-box">
              <i className="fas fa-star"></i> {product.rating}
            </div>
          </div>
          <div className="custom-card-body">
            <h5 className="custom-card-title">{product.title}</h5>
            <p className="custom-card-text">{product.tag}</p>
            <div className="custom-renting">Rent for lower prices!</div>
            <button className="custom-btn-primary mt-2">
              <i className="fas fa-shopping-bag"></i> Add to Bag
            </button>
          </div>
        </div>
      </div>
      <ProductModal show={showModal} handleClose={handleCloseModal} product={product} />
    </>
  );
};

export default ProductCard;
