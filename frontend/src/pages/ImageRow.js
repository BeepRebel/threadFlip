import React from 'react';
import { Link } from 'react-router-dom';
import './ImageRow.css';

const ImageRow = ({ images, direction }) => {
  return (
    <div className={`row justify-content-center fade-in-${direction}`}>
      {images.map((image, index) => (
        <div className='col-4' key={index}>
          <Link to={`/${image.title.toLowerCase()}`} className='image-card'>
            <img src={image.src} alt={image.title} />
            <div className='image-title'>
              <h6>{image.title}</h6>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ImageRow;
