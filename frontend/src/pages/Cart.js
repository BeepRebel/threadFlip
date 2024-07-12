import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      image: '/images/cart/dress.png'
    },
    {
      id: 2,
      name: 'Tote Bag with Tassel',
      price: 49.99,
      quantity: 2,
      image: '/images/cart/bag.png'
    },
    {
      id: 3,
      name: 'Sneaker Wedges',
      price: 19.99,
      quantity: 1,
      image: '/images/cart/sneaker.png'
    }
  ]);

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

    // Cleanup function to unobserve elements when component unmounts
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const updateQuantity = (id, increment) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + increment) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  if (cartItems.length === 0) {
    return (
      <section className='cart-wrapper py-5'>
        <div className='cart slide-in-bottom'>
          <p>My Cart</p>
        </div>
        <div className='container-xxl slide-in-bottom margin'>
          <div className='row'>
            <div className='col-12 text-center'>
              <img src='/images/cart/empty-cart.png' className='empty-cart-image' alt='Empty Cart' />
              <h4>Your cart is empty</h4>
              <Link to='/rent' className='cart-button'>Rent Items</Link>
              <Link to='/product' className='cart-button'>Thrift Items</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='cart-wrapper py-5'>
      <div className='cart slide-in-bottom'>
        <p>My Cart</p>
      </div>
      <div className='container-xxl slide-in-bottom margin'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-items'>
              {cartItems.map(item => (
                <div key={item.id} className='cart-item d-flex justify-content-between align-items-center'>
                  <img src={item.image} className='cart-item-image' alt={item.name} />
                  <div className='cart-item-details'>
                    <h4>{item.name}</h4>
                    <p style={{ marginLeft: '2rem' }}>${item.price}</p>
                  </div>
                  <div className='cart-item-quantity'>
                    <button className='quantity-button' onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='quantity-button' onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <div className='cart-item-total'>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='cart-summary'>
              <h4>Total: ${calculateTotal()}</h4>
              <button className='checkout-button'>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
