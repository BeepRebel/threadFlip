import React, { useEffect, useState } from 'react';
import ProductCardThrift from '../components/ProductCardThrift';

const Thrift = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); // Adjust the path as per your setup
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

  return (
    <div className='container'>
      <div className='row'>
        {products.map(product => (
          <ProductCardThrift
            key={product.id}
            brand={product.brand}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Thrift;
