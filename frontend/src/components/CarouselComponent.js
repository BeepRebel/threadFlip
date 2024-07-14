// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

const CarouselComponent = ({ images }) => {
  return (
    <div className="carousel-container mx-auto">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
