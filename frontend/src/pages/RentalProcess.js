import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCalendarAlt, faRuler, faCreditCard, faEnvelope, faTruck, faBoxOpen, faBroom } from '@fortawesome/free-solid-svg-icons';
import './RentalProcess.css';

const RentalProcess = () => {
  return (
    <div className="rental-process-container">
      <b><h1 className="rental-process-title">RENTAL PROCESS</h1></b>
      <div className="rental-steps">
        <div className="rental-step">
          <FontAwesomeIcon icon={faShoppingCart} className="rental-step-icon" />
          <h6>Browse and Select:</h6>
          <p>Browse categories, view detailed descriptions, and add desired items to the cart.</p>
        </div>
        <div className="rental-step">
          <FontAwesomeIcon icon={faCalendarAlt} className="rental-step-icon" />
          <h6>Choose Rental Period:</h6>
          <p>Select a rental period; fees vary by duration.</p>
        </div>
        <div className="rental-step">
          <FontAwesomeIcon icon={faRuler} className="rental-step-icon" />
          <h6>Provide Measurements:</h6>
          <p>Enter measurements or select from standard sizes.</p>
        </div>
        <div className="rental-step">
          <FontAwesomeIcon icon={faCreditCard} className="rental-step-icon" />
          <h6>Checkout:</h6>
          <p>Provide delivery information and make payment.</p>
        </div>
        <div className="rental-step">
          <FontAwesomeIcon icon={faEnvelope} className="rental-step-icon" />
          <h6>Order Confirmation:</h6>
          <p>Receive an email with rental details and delivery date.</p>
        </div>
        <div className="rental-step">
          <FontAwesomeIcon icon={faTruck} className="rental-step-icon" />
          <h6>Delivery:</h6>
          <p>Items are delivered within the specified timeframe.</p>
        </div>
        <div className="rental-step">
          <FontAwesomeIcon icon={faBoxOpen} className="rental-step-icon" />
          <h6>Return Process:</h6>
          <p>Pack items, use pre-paid return label, and schedule a pickup or drop-off.</p>
        </div>
        <div className="rental-step">
          <FontAwesomeIcon icon={faBroom} className="rental-step-icon" />
          <h6>Cleaning and Maintenance:</h6>
          <p>The rental service handles all cleaning and maintenance upon return.</p>
        </div>
      </div>
    </div>
  );
}

export default RentalProcess;
