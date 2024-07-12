// src/pages/CategoryPage.js
import React from 'react';
//import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <>
    
      <div className="category-page">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p>Content for {category} category goes here...</p>
      </div>
    </>
  );
};

export default CategoryPage;
