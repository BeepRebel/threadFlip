import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
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
                <img src="/images/about/us.png" className='ban' alt="main-banner" />
              </div>
            </div>
          </div>
        </div>
        <div class="containerr">
        <div class="cell slide-in-bottom image-cell c1">
            <img src="/images/about/1.png" alt="Image 1"/>
        </div>
        <div class="cell slide-in-bottom text-cell c1">
            <h2 className='i1'>Mission</h2>
            <p className='p1'>This is a paragraph. Click on "Edit Text" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.</p>
        </div>
        <div class="cell slide-in-bottom text-cell">
            <h2 className='i2'>Vision</h2>
            <p className='p2'>This is a paragraph. Click on "Edit Text" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.</p>
        </div>
        <div class="cell slide-in-bottom image-cell">
            <img src="/images/about/2.png" alt="Image 2"/>
        </div>
    </div>
      </section>

    );
};

export default About;
