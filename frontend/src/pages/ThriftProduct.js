import React from 'react';
import './ThriftProduct.css';

const ThriftProduct = () => {
  return (
    <>
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
              <img src="/images/home/home-banner-1.png" alt="Product Banner" />
              </div>
            </div>
            <div className='col-6'>
              <div className='product-details'>
                <h2>Title of the Product</h2>
                <p>Product Tag</p>
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
                  <p>Based on 2 reviews</p>
                </div>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et dui at lacus eleifend hendrerit. Duis in velit quis urna fermentum pharetra sit amet at lacus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='review-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThriftProduct;