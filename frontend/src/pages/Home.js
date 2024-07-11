import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
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
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 mb-3'>
            <div className='fade-in' >
              <img src="/images/home/banner.png" className='banner' alt="main-banner" />
              <div className='comm slide-in-bottom'>
                <p>Join our fashion community</p>
                <button className='log-sign'>Login/SignUp</button>
              </div>
              <div className='trend slide-in-bottom'>
                <button className='rent'>Rent</button>
                <button className='rent'>Thrift</button>
                <p>Discover Latest Trends</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 mb-3 slide-in-bottom'>
            <div className='main-banner position-relative p-3'>
              <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
              <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
            </div>
          </div>
          <div className='col-md-6 mb-3 slide-in-bottom'>
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
