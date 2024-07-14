import React, { useState, useEffect } from 'react';
import './ThriftProduct.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Importing icons from react-icons
import { useParams } from 'react-router-dom';

const ThriftProduct = () => {
  const { id } = useParams(); // Assuming you have a specific product ID or you can dynamically get it
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCondition, setShowCondition] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/products.json');
        const products = await response.json();
        const productData = products.find(prod => prod.id === parseInt(id));
        if (productData) {
          setProduct(productData);
          if (productData.images.length > 0) {
            setMainImage(productData.images[0]); // Set the main image to the first image in the array
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

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleCondition = () => {
    setShowCondition(!showCondition);
  };

  const getConditionDetails = (condition) => {
    switch (condition) {
      case 1:
        return { text: 'Good', color: 'green' };
      case 2:
        return { text: 'Excellent', color: 'blue' };
      case 3:
        return { text: 'Moderate', color: 'orange' };
      default:
        return { text: 'Unknown', color: 'grey' };
    }
  };

  if (!product) return <div>Loading...</div>;

  const { text, color } = getConditionDetails(product.condition);

  return (
    <>
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='details'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <img src={mainImage} alt="Product Banner" className="product-img" />
              </div>
              <div className="thumbnail-images d-flex mt-3">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="thumbnail-img"
                    onClick={() => handleThumbnailClick(image)}
                    alt={`Thumbnail ${index}`}
                  />
                ))}
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-md-12'>
              <div className='product-details'>
                <h2>{product.brand}</h2>
                <h5>{product.title}</h5>
                <p>Price: ₹{product.price}</p>
                <div className="toggle-details d-flex align-items-center">
                  <span className="toggle-icon" onClick={toggleCondition}>
                    {showCondition ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                  <span className="toggle-text" onClick={toggleCondition}>
                    Condition
                  </span>
                  <div className="condition-box" style={{ backgroundColor: color }}>
                    {text}
                  </div>
                </div>
                {showCondition && (
                  <div className="item-details mt-3">
                    <p>{product.conditionDescription}</p>
                  </div>
                )}
                <div className="toggle-details d-flex align-items-center">
                  <span className="toggle-icon" onClick={toggleDetails}>
                    {showDetails ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                  <span className="toggle-text" onClick={toggleDetails}>
                    Item Details
                  </span>
                </div>
                {showDetails && (
                  <div className="item-details mt-3">
                    <p>{product.description}</p>
                  </div>
                )}
                <button className="bttn btn btn-primary mt-3">Add to Bag</button>
              </div>
            </div>
        </div>

      <div className='row'>
        <div className='col-md-12'>
          <div className='shipping-details'>
          <h2>Shipping & Return Details</h2>
          <p>Shipping: Free Shipping on orders above ₹4000.</p>

          <p>Returns: 30-day return period for unused items in original packaging; initiate returns online or contact customer service for assistance.</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='shipping-details'>
            <h2>Eco Impact</h2>
            <p>Thrifting clothes reduces waste, conserves resources, and promotes sustainable fashion practices by reusing garments instead of producing new ones.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>


      </div>

      <section className="review-wrapper py-5 home-wrapper-2">
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='review-inner-wrapper'>
          <div className='review-head d-flex justify-content-between align-items-end'>
            <div>
              <h4 className='mb-2'>Customer Reviews</h4>
              <div className='d-flex align-items-center gap-2'>
                <i className="fas fa-star star-icon"></i>
                <span className='rating-text'>{4.5}</span>
                <p className='mb-0'>Based on {product.reviews.length} Reviews</p>
              </div>
            </div>
          </div>
          <div className='reviews mt-4'>
                  {product.reviews.map((review, index) => (
                    <div className='review' key={index}>
                      <div className='d-flex gap-2 align-items-center'>
                        <h6 className='mb-0'>{review.customer}</h6>
                        <i className="fas fa-star star-icon"></i>
                        <span className='rating-text'>{review.rating}</span>
                      </div>
                      <p className='mt-3'>{review.description}</p>
                    </div>
                  ))}
                </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default ThriftProduct;
