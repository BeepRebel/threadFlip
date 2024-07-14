import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaEnvelope, FaTwitter } from 'react-icons/fa'; // Import FaTwitter
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <section className='home-wrapper-1'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 mb-3'>
            <div className='fade-in'>
              <img src="/images/home/Picture1.png" className='bannern ' alt="main-banner" />
              
              <div className='comm slide-in-bottom'>
                <p>Join our fashion community</p>
                <button className='log-sign'>Login/SignUp</button>
              </div>
              <div className='trend slide-in-bottom'>
                <button className='rent'>Rent Items</button>
                <button className='rent'>Thrift Items</button>
                <p>Discover Latest Trends</p>
              </div>
              
              
              <img src="/images/home/banner.png" className='bannerji slide-in-bottom' alt="main-banner" />
              <h1>Our Bestsellers</h1>
              <div className='car col-12 mb-3'>
                <Carousel controls={false} indicators={false} interval={2000} className='slide-in-bottom'>
                  <Carousel.Item>
                    <div className='d-flex justify-content-between'>
                      <div>
                        <div className='main-banner position-relative p-3'>
                          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
                          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
                        </div>
                      </div>
                      <div>
                        <div className='main-banner position-relative p-3'>
                          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
                          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
                        </div>
                      </div>
                      <div>
                        <div className='main-banner position-relative p-3'>
                          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
                          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                    
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className='d-flex justify-content-between'>
                      <div>
                        <div className='main-banner position-relative p-3'>
                          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
                          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
                        </div>
                      </div>
                      <div>
                        <div className='main-banner position-relative p-3'>
                          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
                          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
                        </div>
                      </div>
                      <div>
                        <div className='main-banner position-relative p-3'>
                          <img src="/images/home/home-banner-1.png" className='img-fluid rounded-3 w-100' alt="main-banner" />
                          <button className='button position-absolute' style={{ bottom: '10px', left: '10px' }}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className='similar slide-in-bottom'>
                <button className='button center'>Discover similar items</button>
              </div>
              <div className='comm slide-in-bottom stay col-12 mb-3'>
                <p>Stay Connected</p>
                <div className='social-icons'>
                  <a href="https://facebook.com" className='icon'><FaFacebook /></a>
                  <a href="https://instagram.com" className='icon'><FaInstagram /></a>
                  <a href="mailto:info@example.com" className='icon'><FaEnvelope /></a>
                  <a href="https://twitter.com" className='icon'><FaTwitter /></a> {/* Add Twitter icon */}
                </div>
              </div>
              <div className='trend slide-in-bottom new'>
                <img src="/images/home/gown.gif" className='gif' alt="gown"/>
                <p>Join Sustainable Fashion Movement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
