import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCardThrift.css';


const ProductCardThrift = ({id , brand, title, price, image, rating, condition }) => {
  const getConditionDetails = (condition) => {
    switch (condition) {
      case 1:
        return { text: 'Good', color: 'green' };
      case 2:
        return { text: 'Excellent', color: 'blue' };
      case 3:
        return { text: 'Moderate', color: 'orange' };
      case 4:
        return { text: 'Poor', color: 'red' };
      default:
        return { text: 'Unknown', color: 'grey' };
    }
  };

  const { text, color } = getConditionDetails(condition);
  return (
    <div className="col-md-3 mb-4">
      <div className="card product-card-thrift">
      <Link to="{`${id}`}">
          <div className="card-img-wrapper">
            <img src={image} alt={title} className="card-img-top" />
            <div className="heart-icon">
              <i className="far fa-heart"></i>
            </div>
            <div className="rating-box">
              <i className="fas fa-star"></i> {rating}
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{`₹${price}`}</p>
            <span style={{ color }}>Condition: {text}</span>
            <button className="btn btn-primary mt-2">
              <i className="fas fa-shopping-bag"></i> Add to Bag
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProductCardThrift;


