import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
<section className='home-wrapper-1 py-5'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-md-6 mb-3'>
        <div className='main-banner position-relative p-3'>
          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
        </div>
      </div>
      <div className='col-md-6 mb-3'>
        <div className='main-banner position-relative p-3'>
          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default Home;



