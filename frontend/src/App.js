import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Home';
import Thrift from './pages/Thrift';
import About from './pages/About'
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="thrift" element={<Thrift />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
