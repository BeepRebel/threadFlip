import React, { useEffect } from 'react'
import CarouselComponent from './CarouselComponent';
import ButtonsComponent from './ButtonsComponent';

const Rent = () => {
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
    <>
    <div className='store-wrapper home-wrapper-2 py-5 fade-in'>
        <div className='container-xxl'>
            <div className='row'>
            <div className='col-12'>
              <CarouselComponent />
            </div>
            <div className='row'>
            <div className='col-12'>
              <ButtonsComponent />
            </div>
            </div>
                
            </div>
        </div>      
    </div>
    </>
  )
}

export default Rent
