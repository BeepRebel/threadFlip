import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Home';
import Thrift from './pages/Thrift';
import ThriftProduct from './pages/ThriftProduct.js';
import Rent from './pages/Rent.js';
import About from './pages/About'
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Vote from './pages/Vote';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wishlist from './pages/Wishlist.js';
import Cart from './pages/Cart.js';
import CategoryPage from './pages/CategoryPage';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="Signup" element={<Signup />}/>
          <Route path="Vote" element={<Vote />}/>
          <Route path="product" element={<Thrift />}/>
          <Route path="product/:id" element={<ThriftProduct />} />
          <Route path="Rent" element={<Rent />}/>
          <Route path="Wishlist" element={<Wishlist />}/>
          <Route path="Cart" element={<Cart />}/>
          <Route path="/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
