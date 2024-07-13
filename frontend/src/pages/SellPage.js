import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StepwiseGuide from './StepwiseGuide';
import SellFormModal from './SellFormModal';

import './Sell.css'; // Ensure to add your CSS file for styling

const Sell = () => {
  return (
    <div className="sell-page mt-20">
      {/* Navbar Space */}
      <div className="navbar-space"></div>

      {/* Large Block for Selling */}
      <div className="sell-block mt-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sell-text">
                <h2>Sell clothes online on ThreadFlip</h2>
                <p>Start earning by selling your fashion items.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end">
              <button className="btn btn-primary">Start Selling</button>
            </div>
          </div>
        </div>
      </div>

      {/* Space */}
      <div className="space"></div>

      <div className="row">
          <div className="col-lg-12">
            <StepwiseGuide />
          </div>
        </div>
      </div>
   

  );
}

export default Sell;
