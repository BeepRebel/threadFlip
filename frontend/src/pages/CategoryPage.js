// src/pages/CategoryPage.js
import React from 'react';

import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();

  const products = [
    { id: 1, image: '/images/rent/dresses/1.png', title: 'Product 1', tag: 'Tag 1' },
    { id: 2, image: '/images/rent/dresses/2.png', title: 'Product 2', tag: 'Tag 2' },
    { id: 3, image: '/images/rent/dresses/3.png', title: 'Product 3', tag: 'Tag 3' },
    { id: 4, image: '/images/rent/dresses/4.png', title: 'Product 4', tag: 'Tag 4' },
    { id: 5, image: '/images/rent/dresses/1.png', title: 'Product 5', tag: 'Tag 5' },
    { id: 6, image: '/images/rent/dresses/1.png', title: 'Product 6', tag: 'Tag 6' },
    { id: 7, image: '/images/rent/dresses/1.png', title: 'Product 7', tag: 'Tag 7' },
    { id: 8, image: '/images/rent/dresses/1.png', title: 'Product 8', tag: 'Tag 8' },
    { id: 9, image: '/images/rent/dresses/1.png', title: 'Product 9', tag: 'Tag 9' },
    { id: 10, image: '/images/rent/dresses/1.png', title: 'Product 10', tag: 'Tag 10' },
    { id: 11, image: '/images/rent/dresses/1.png', title: 'Product 11', tag: 'Tag 11' },
    { id: 12, image: '/images/rent/dresses/1.png', title: 'Product 12', tag: 'Tag 12' },
    { id: 13, image: '/images/rent/dresses/1.png', title: 'Product 13', tag: 'Tag 13' },
    { id: 14, image: '/images/rent/dresses/1.png', title: 'Product 14', tag: 'Tag 14' },
    { id: 15, image: '/images/rent/dresses/1.png', title: 'Product 15', tag: 'Tag 15' },
    { id: 16, image: '/images/rent/dresses/1.png', title: 'Product 16', tag: 'Tag 16' },
    { id: 17, image: '/images/rent/dresses/1.png', title: 'Product 17', tag: 'Tag 17' },
    { id: 18, image: '/images/rent/dresses/1.png', title: 'Product 18', tag: 'Tag 18' },
    { id: 19, image: '/images/rent/dresses/1.png', title: 'Product 19', tag: 'Tag 19' },
    { id: 20, image: '/images/rent/dresses/1.png', title: 'Product 20', tag: 'Tag 20' },
    { id: 21, image: '/images/rent/dresses/1.png', title: 'Product 21', tag: 'Tag 21' },
    { id: 22, image: '/images/rent/dresses/1.png', title: 'Product 22', tag: 'Tag 22' },
    { id: 23, image: '/images/rent/dresses/1.png', title: 'Product 23', tag: 'Tag 23' },
    { id: 24, image: '/images/rent/dresses/1.png', title: 'Product 24', tag: 'Tag 24' }
  ];


  return (
    <>
      
      
        <h1 className="category-heading">.............</h1>
        <p className="category-description">..................</p>
        
      <div className="category-page" >
        <h1 className="category-heading">Shop by Category</h1>
        <p className="category-description">Browse through our collection of {category} products.</p>
        <div className="container-xxl">
          <div className="row">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
