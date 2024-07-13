import React, { useEffect, useState } from 'react';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Bohemian Midi Dress',
      price: 29.99,
      quantity: 1,
      type: 'thrift',
      stock: 1,  // Add stock property
      image: '/images/cart/dress.png'
    },
    {
      id: 2,
      name: 'Tote Bag with Tassel',
      price: 49.99,
      quantity: 2,
      type: 'thrift',
      stock: 2,  // Add stock property
      image: '/images/cart/bag.png'
    },
    {
      id: 3,
      name: 'Sneaker Wedges',
      price: 19.99,
      quantity: 1,
      type: 'rent',
      image: '/images/cart/sneaker.png'
    }
  ]);

  const [rentDays, setRentDays] = useState(3);

  useEffect(() => {
    const sections = document.querySelectorAll('.slide-in-bottom');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const calculateTotal = (type) => {
    return cartItems
      .filter(item => item.type === type)
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const updateQuantity = (id, increment) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          if (increment > 0 && item.quantity >= item.stock) {
            alert("No more items available");
            return item;
          }
          return { ...item, quantity: Math.max(0, item.quantity + increment) };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const handleRentDaysChange = (e) => {
    setRentDays(parseInt(e.target.value));
  };

  const renderThriftCart = () => {
    const thriftItems = cartItems.filter(item => item.type === 'thrift');

    return (
      <div className='thrift-cart'>
        <h3>Thrift Cart</h3>
        {thriftItems.length === 0 ? (
          <div className='empty-cart'>
            <img src='/images/cart/empty.png' alt='Empty Cart' />
            <p>Uh-Oh! Your cart is empty</p>
            <p>Add thrift items to your cart to checkout</p>
            <button>Browse Thrift Items</button>
          </div>
        ) : (
          <div className='cart-items'>
            {thriftItems.map(item => (
              <div key={item.id} className='cart-item d-flex justify-content-between align-items-center'>
                <img src={item.image} className='cart-item-image' alt={item.name} />
                <div className='cart-item-details'>
                  <h4>{item.name}</h4>
                  <p style={{ marginLeft: '2rem' }}>${item.price}</p>
                  <p className='moneyy'><img src="/images/money.png" alt="Myntra Money" className="myntra-money-icon" /> Use MyntraMoney!</p>
                </div>
                <div className='cart-item-quantity'>
                  <button className='quantity-button' onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className='quantity-button plus' onClick={() => updateQuantity(item.id, 1)} disabled={item.quantity >= item.stock}>+</button>
                </div>
                <div className='cart-item-total'>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {thriftItems.length > 0 && (
          <div className='order-summary'>
            <h4>Order Summary</h4>
            <p className='ah'>Total: ${calculateTotal('thrift')}</p>
            <p>Discount: <textarea className='ah'>Apply Coupon</textarea></p>
            <p className='ah'>Shipping Charges: Free (-$10)</p>
            <button className='checkout-button'>Proceed to Checkout</button>
            <div className='payment-options'>
              <img src='/images/cart/visa.jpg' alt='Visa' />
              <img src='/images/cart/paytm.jpg' alt='Paytm' />
              <img src='/images/cart/master.jpg' alt='Mastercard' />
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderRentCart = () => {
    const rentItems = cartItems.filter(item => item.type === 'rent');

    return (
      <div className='rent-cart'>
        <h3>Rent Cart</h3>
        {rentItems.length === 0 ? (
          <div className='empty-cart'>
            <img src='/images/cart/empty.png' alt='Empty Cart' />
            <p>Uh-Oh! Your cart is empty</p>
            <p>Add rent items to your cart to checkout</p>
            <button>Browse Rent Items</button>
          </div>
        ) : (
          <div className='cart-items'>
            {rentItems.map(item => (
              <div key={item.id} className='cart-item d-flex justify-content-between align-items-center'>
                <img src={item.image} className='cart-item-image' alt={item.name} />
                <div className='cart-item-details'>
                  <h4>{item.name}</h4>
                  <p style={{ marginLeft: '2rem' }}>${item.price}</p>
                  <p className='moneyy'><img src="/images/money.png" alt="Myntra Money" className="myntra-money-icon" /> Use MyntraMoney!</p>
                </div>
                <div className='cart-item-quantity'>
                  <button className='quantity-button' onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className='quantity-button plus' onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className='cart-item-total'>
                  <p>${(item.price * item.quantity * rentDays).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {rentItems.length > 0 && (
          <div className='rent-options order-summary'>
            <h4>Rent Options</h4>
            <div>
              <label htmlFor='days'>Renting for:</label>
              <select id='days' onChange={handleRentDaysChange} value={rentDays} className='ah'>
                <option value='3'>3 days - ${(19.99 * rentDays).toFixed(2)}</option>
                <option value='4'>4 days - ${(20.99 * rentDays).toFixed(2)}</option>
                <option value='5'>5 days - ${(21.99 * rentDays).toFixed(2)}</option>
                <option value='6'>6 days - ${(22.99 * rentDays).toFixed(2)}</option>
                <option value='7'>7 days - ${(23.99 * rentDays).toFixed(2)}</option>
                <option value='7'>Request More Days</option>
              </select>
            </div>
            <div>
              <input type='checkbox' id='terms' />
              <label htmlFor='moreDays' className='side'>I agree to <a href=''>terms and conditions</a> of usage of rent items.</label>
            </div>
            <div className='order-summary'>
              <h4>Order Summary</h4>
              <p className='ah'>Total: ${(calculateTotal('rent') * rentDays).toFixed(2)}</p>
            </div>
            <button className='checkout-button'>Proceed to Checkout</button>
            <div className='payment-options'>
              <img src='/images/cart/visa.jpg' alt='Visa' />
              <img src='/images/cart/paytm.jpg' alt='Paytm' />
              <img src='/images/cart/master.jpg' alt='Mastercard' />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className='cart-wrapper py-5'>
      <div className='cart slide-in-bottom'>
        <p>My Cart</p>
      </div>
      <div className='container-xxl slide-in-bottom margin'>
        <div className='cart-columns'>
          <div className='cart-column'>
            {renderThriftCart()}
          </div>
          <div className='cart-column'>
            {renderRentCart()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
