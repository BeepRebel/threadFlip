import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo"/>
      </div>
      <ul className="nav-links">
        <li><Link to="">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/product">Thrift</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link></li>
        <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
