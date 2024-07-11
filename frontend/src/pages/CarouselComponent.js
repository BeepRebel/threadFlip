// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container mx-auto">
    <Carousel>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="\images\img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\images\img2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\images\img3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
