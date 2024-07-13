import React, { useState, useEffect } from 'react';
import './ThriftProduct.css';

const ThriftProduct = () => {
  const id = 2; // Assuming you have a specific product ID or you can dynamically get it
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/products.json');
        const products = await response.json();
        const productData = products.find(prod => prod.id === parseInt(id));
        if (productData) {
          setProduct(productData);
          if (productData.image) {
            setMainImage(productData.image);
          }
        }
      } catch (error) {
        console.error('Error fetching the product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleThumbnailClick = (thumbnail) => {
    setMainImage(thumbnail);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <img src={mainImage} alt="Product Banner" className="product-img" />
              </div>
              <div className="thumbnail-images d-flex mt-3">
                {product.images.map((image) => (
                  <img
                    src={image}
                    className="thumbnail-img"
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
              </div>
            </div>
            <div className='col-6'>
              <div className='product-details'>
                <h2>{product.title}</h2>
                <h5>Brand: {product.brand}</h5>
                <p>Price: ₹{product.price}</p>
                <div className="rating">
                  {/* Display rating stars */}
                </div>
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                  />
                </div>
                <button className="btn btn-primary mt-3">Add to Bag</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="review-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4>Customer Reviews</h4>
                  <p>Based on {product.reviews.length} reviews</p>
                </div>
              </div>
              <div className='reviews'>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThriftProduct;
