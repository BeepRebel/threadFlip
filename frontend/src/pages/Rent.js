import React, { useEffect } from 'react';
import CarouselComponent from '../components/CarouselComponent';
import ImageRow from '../components/ImageRow';
import './Rent.css';
import '../components/ImageRow.css';
import RentalProcess from '../components/RentalProcess';

const Rent = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.slide-in-bottom');
    const rightSections = document.querySelectorAll('.fade-in-right');
    const leftSections = document.querySelectorAll('.fade-in-left');


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

      rightSections.forEach(section => {
        observer.observe(section);
      });
  
      leftSections.forEach(section => {
        observer.observe(section);
      });
  

    });


    // Cleanup function to unobserve elements when component unmounts
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      rightSections.forEach(section => {
        observer.unobserve(section);
      });
      leftSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const row1Images = [
    { title: 'LEHENGA', src: '/images/rent/lehenga.png' },
    { title: 'DRESSES', src: '/images/rent/dresses.png' },
    { title: 'CO-ORDS', src: '/images/rent/coords.png' },
  ];

  const row2Images = [
    { title: 'TUXEDO', src: '/images/rent/tuxedo.png' },
    { title: 'SHERWANI', src: '/images/rent/sherwani.png' },
    { title: 'INDO WESTERN', src: '/images/rent/indo.png' },
  ];

  const bannerImages = [
    '/images/img1.jpg',
    '/images/img2.png',
    '/images/img3.png'
  ];
  return (
    <div className='store-wrapper home-wrapper-2 py-5 fade-in'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 slide-in-bottom'>
          <CarouselComponent images={bannerImages} />
          </div>
          <div className='row mt-3' >
          <h2 className="heading">Shop by Category</h2>
            <div className='col-10 offset-md-1 slide-in-bottom'>
            
            <ImageRow images={row1Images} direction="right" />
            <ImageRow images={row2Images} direction="left" />
            </div>
          </div>
          <div className='row mt-3' >
          <RentalProcess />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
