// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="col-md-3 mb-4">
          <div className="card product-card">
            <Link to={`/${product.title.toLowerCase().replace(/ /g, '-')}`}>
              <img src={product.image} alt={product.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.tag}</p>
                <button className="btn btn-primary mt-2">Add to Bag</button>
              </div>
            </Link>
          </div>
        </div>
      );
    };

export default ProductCard;
