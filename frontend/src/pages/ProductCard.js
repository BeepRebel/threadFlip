import React from 'react';
import 'react-router-dom';
import './ProductCard.css';
import { useState } from 'react';
import ProductModal from './ProductModal';


const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
    <div className="col-md-3 mb-4" >
      <div className="card product-card" onClick={handleShowModal}>
       
          <div className="card-img-wrapper">
            <img src={product.image} alt={product.title} className="card-img-top" />
            <div className="heart-icon">
              <i className="far fa-heart"></i>
            </div>
            <div className="rating-box">
              <i className="fas fa-star"></i> {product.rating}
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.tag}</p>   <div class="renting">Rent for lower prices!</div>
            <button className="btn btn-primary mt-2">
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
