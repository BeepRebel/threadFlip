// src/pages/CategoryPage.js
import React from 'react';

import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();

  const products = [
    { id: 1, image: '/images/rent/dresses/1.png', title: 'Chain Cocktail Dress', tag: 'MRP ₹6,990', rating: 4.5 },
    { id: 2, image: '/images/rent/dresses/3.png', title: 'Darted Cocktail Dress', tag: 'MRP ₹1,832', rating: 4.0 },
    { id: 3, image: '/images/rent/dresses/2.png', title: 'Sequinned Fishtail Dress', tag: 'MRP ₹2,990', rating: 4.8 },
    { id: 4, image: '/images/rent/dresses/4.png', title: 'Ruffle Bodycon Dress', tag: 'MRP ₹1,790', rating: 4.2 },
    { id: 5, image: '/images/rent/dresses/5.png', title: 'Fringed Bodycon Dress', tag: 'MRP ₹2,290', rating: 3.5 },
    { id: 6, image: '/images/rent/dresses/6.png', title: 'Open Back Bodycon Dress', tag: 'MRP ₹1,990', rating: 3.8 },
    { id: 7, image: '/images/rent/dresses/7.png', title: 'Draped Bodycon Dress', tag: 'MRP ₹2,390', rating: 4.1 },
    { id: 8, image: '/images/rent/dresses/10.png', title: 'Slit Cocktail Dress', tag: 'MRP ₹5,690', rating: 3.9 },
    { id: 9, image: '/images/rent/dresses/8.png', title: 'Product 9', tag: 'MRP ₹2,990', rating: 4.4 },
    { id: 10, image: '/images/rent/dresses/12.png', title: 'Product 10', tag: 'MRP ₹2,990', rating: 4.7 },
    { id: 11, image: '/images/rent/dresses/9.png', title: 'Product 11', tag: 'MRP ₹2,990', rating: 4.6 },
    { id: 12, image: '/images/rent/dresses/11.png', title: 'Product 12', tag: 'MRP ₹2,990', rating: 4.0 },
   
  ];


  return (
    <>
      
      
        <h1 className="category-heading">.............</h1>
        <p className="category-description">..................</p>
        
      <div className="category-page" >
        <h1 className="category-heading">Shop by Category</h1>
        <p className="category-description">Browse through our collection of dresses.</p>
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
