import React, { useEffect, useState } from 'react';
import CarouselComponent from './CarouselComponent';
import ImageRow from './ImageRow';
import './Thrift.css';
import './ImageRow.css';
import ProductCardThrift from '../components/ProductCardThrift';

const Thrift = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    rightSections.forEach((section) => {
      observer.observe(section);
    });

    leftSections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function to unobserve elements when component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      rightSections.forEach((section) => {
        observer.unobserve(section);
      });
      leftSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const row1Images = [
    { title: 'Bottoms', src: '/images/thrift/banner-1.jpeg' },
    { title: 'Bags', src: '/images/thrift/banner-2.jpeg' },
    { title: 'Tops', src: '/images/thrift/banner-3.jpeg' }
  ];

  const row2Images = [
    { title: 'Heels', src: '/images/thrift/banner-4.jpeg' },
    { title: 'Accessories', src: '/images/thrift/banner-5.jpeg' },
    { title: 'Dresses', src: '/images/thrift/banner-6.jpeg' }
  ];

  const bannerImages = [
    '/images/thrift/c-1.jpg',
    '/images/thrift/c-2.jpg'
  ];

  return (
    <div className='store-wrapper home-wrapper-2 py-5 fade-in'>
      <div className='container-xxl'>
        <div className='row'>
          {/* Carousel */}
          <div className='col-12 slide-in-bottom'>
            <CarouselComponent images={bannerImages} />
          </div>

          {/* Shop by Category */}
          <div className='row mt-3'>
            <h2 className='heading'>Shop by Category</h2>
            <div className='col-10 offset-md-1 slide-in-bottom'>
              <ImageRow images={row1Images} direction='right' />
              <ImageRow images={row2Images} direction='left' />
            </div>
          </div>

          
          <div className='row mt-3 banner'>
            <div className='col-md-4 mb-3 position-relative' style={{ backgroundColor: '#fa9dcc', padding: '15px' }}>
              <div className='banner-text text-right mb-2'>
                <h3>Own it</h3>
                <p>integrating personal style, trends, cultural influences, fostering confidence and self-expression.</p>
              </div>
              <img src='/images/thrift/b3.jpg' alt='Banner 1' className='img-fluid align-bottom align-right' style={{ maxWidth: '100%', height: 'auto', position: 'absolute', bottom: '0', right: '0' }} />
            </div>
            <div className='col-md-4 mb-3 position-relative' style={{ backgroundColor: '#fa5aaa', padding: '15px' }}>
              <div className='text-right mb-2 banner-text'>
                <h3>Embrace it</h3>
                <p>showcasing clothing with creativity, intentionality, expressing personal taste, identity, and social statements.</p>
              </div>
              <img src='/images/thrift/b1.jpg' alt='Banner 2' className='img-fluid align-bottom align-right' style={{ maxWidth: '100%', height: 'auto', position: 'absolute', bottom: '0', right: '0' }} />
            </div>
            <div className='col-md-4 mb-3 position-relative' style={{ backgroundColor: '#fc0581', padding: '15px' }}>
              <div className='text-right mb-2 banner-text'>
                <h3>Liberate it</h3>
                <p>Liberate your clothes by giving them a new life through thrifting.</p>
              </div>
              <img src='/images/thrift/b2.jpg' alt='Banner 3' className='img-fluid align-bottom align-right' style={{ maxWidth: '100%', height: 'auto', position: 'absolute', bottom: '0', right: '0' }} />
            </div>
          </div>

          {/* Thrift Products */}
          <div className='thrift-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
              <h2 className='heading text-center mb-4'>Thrift Products</h2>
              <div className='container-xxl'>
                <div className='row'>
                  {products.map((product) => (
                    <ProductCardThrift
                      id={product.id}
                      brand={product.brand}
                      title={product.title}
                      price={product.price}
                      image={product.images[0]}
                      rating={product.rating}
                      condition={product.condition}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thrift;
