import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
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

  return (
    <section className='cart-wrapper py-5'>
      <div className='us slide-in-bottom'>
        <p>Contact us</p>
      </div>
      <p className='pp2'>
        Thank you for visiting our website! We value your feedback and would love to hear from you. If you have any questions, comments, or suggestions, please don't hesitate to reach out to us. We are always happy to help and look forward to hearing from you soon.
      </p>
      <div className='container-xxl contact-content'>
        <div className='row'>
          <div className='col-md-6 slide-in-bottom'>
            <img src="/images/contact/side.png" className='contact-image' alt="contact" />
          </div>
          <div className='col-md-6 slide-in-bottom'>
            <form className='contact-form'>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' className='form-control' id='firstName' />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' className='form-control' id='lastName' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control' id='email' />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea className='form-control' id='message' rows='4'></textarea>
              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
              <p className='thanks-message'>Thanks for submitting your valuable feedback!</p>
            </form>
            <div className='social-iconss'>
              <a href="https://facebook.com" className='icon'><FaFacebook /></a>
              <a href="https://instagram.com" className='icon'><FaInstagram /></a>
              <a href="mailto:info@example.com" className='icon'><FaEnvelope /></a>
              <a href="https://twitter.com" className='icon'><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='map slide-in-bottom'>
        <img src="/images/contact/map.png" className='img-fluid' alt="banner" />
      </div>
    </section>
  );
};

export default Contact;
