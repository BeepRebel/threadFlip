// src/components/ProductModal.js
import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { FaShoppingBag } from 'react-icons/fa';
import './ProductModal.css';

const ProductModal = ({ show, handleClose, product }) => {
  if (!product) return null;

  const durations = [
    { label: '4 days', price: 499 },
    { label: '7 days', price: 699 },
  ];

  const termsAndConditions = [
    'Payment: Rental fees paid upfront; payment via credit/debit cards or digital wallets.',
    'Security Deposit: Refundable deposit for potential damages or late returns.',
    'Rental Period: Begins on delivery, ends on scheduled return date; late returns may incur charges.',
    'Damage/Loss: User liable for damages beyond normal wear; full MRP charged for lost items.',
    'Cleaning: Service handles all cleaning; users must not attempt cleaning or repairs.',
    'Cancellations/Refunds: Partial refunds for timely cancellations; no refunds for late cancellations or early returns.',
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const productDetails = [
    'Material: Polyester',
    'Lining: Polyester',
    'Stretchability: Moderately Stretchable',
    'Fit: Regular Fit',
    'Quantity: 1 Piece',
    'Chest Pad: Yes',
    'Belt: No',
    'Neckline: Round Neck',
    'Sleeve Type: Regular Sleeve',
    'Sleeve Length: Long Sleeve',
    'Length: Mini',
    'Silhouette: S-line',
  ];

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="product-modal-container">
          <div className="carousel-section">
            <Carousel>
              {product.images.map((src, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={src} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="details-section">
            <div className="product-info">
              <h2>{product.title}</h2>
              <p className="mrp"> <s>{product.tag}</s></p>
              <p className="rent-price">Rent for lower prices!</p>
              <div className="scrollable-info">
                <div className="options-section">
                  <h5>Select Duration</h5>
                  <div className="options-boxes">
                    {durations.map((duration, index) => (
                      <div className="option-box" key={index}>
                        {duration.label} - ₹{duration.price}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="options-section">
                  <h5>Select Size</h5>
                  <div className="options-boxes">
                    {sizes.map((size, index) => (
                      <div className="option-box" key={index}>
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="details-text">
                    <details>
                    <summary> <h5>Details</h5> </summary>
                  <ul>
                    {productDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  </details>
                </div>
                
                <div className="terms-text">
                <details>
                <summary>
                  <h5>Terms and Conditions</h5> 
                  </summary>
                  <ul>
                    {termsAndConditions.map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                  </details>
                </div>
              </div>
              <button className="btn btn-pink mt-3 rent-button">
                <center><FaShoppingBag className="me-2" /> Rent Now </center>
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
