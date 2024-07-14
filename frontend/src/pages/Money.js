import React, { useEffect } from 'react';
import './Money.css';

const Money = () => {

    useEffect(() => {
        const sections = document.querySelectorAll('.slide-in-bottom');
    
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, options);
    
        sections.forEach(section => {
          observer.observe(section);
        });
    
        // Cleanup function to unobserve elements when component unmounts
        return () => {
          sections.forEach(section => {
            observer.unobserve(section);
          });
        };
      }, []);
      
  return (
    <div className="money-wrapper">
      <div className="container ">
      <img src="/images/moneyban.png" className='leftt fade-in'/>
        <div className="row">
          <div className="col-md-6 mx-auto">
          
      <h1 className="money-heading slide-in-bottom"><img src="/images/money.png" className='imgne'/> Hassle-free transactions await you!</h1>
            <div className="money-content text-center slide-in-bottom">
              <p>Your MyntraMoney balance is:</p>
              <h2 className="money-balance slide-in-bottom">$0</h2>
              <div className="money-buttons slide-in-bottom">
                <button className="btnn btn-primary">Reload Balance</button>
                <button className="btnn btn-primary">Add Money</button>
                <button className="btnn btn-primary">Ask for Allowance</button>
                <p className="change-account-link"><a href="/change-account">Have money in another account? Change account</a></p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transaction History Section */}
        <div className='transaction-history slide-in-bottom'>
            <h3>Transaction History using MyntraMoney</h3>
            {/* Transaction history items can be added dynamically */}
            <div className='transaction-item slide-in-bottom'>
              <p>Transaction ID: 123456</p>
              <p>Date: July 14, 2024</p>
              <p>Amount: $50</p>
              <p>Status: Completed</p>
            </div>
            <div className='transaction-item slide-in-bottom'>
              <p>Transaction ID: 789012</p>
              <p>Date: July 13, 2024</p>
              <p>Amount: $30</p>
              <p>Status: Pending</p>
            </div>
            {/* Add more transaction history items as needed */}
          </div>
        </div>
      
    </div>
  );
}

export default Money;
