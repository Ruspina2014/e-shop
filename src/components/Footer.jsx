import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';  // Import ScrollLink from react-scroll
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Your Ruspina Shop is a leading online store providing a wide range of products</p>
        </div>
        <div className="footer-section links">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <ScrollLink to="guide" smooth={true} duration={500} offset={-70}> {/* Use ScrollLink for in-page navigation */}
                Guide
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70}> {/* Smooth scroll to the target section */}
                Inquiries
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: finance.ruspina@gmail.com</p>
          <p>Phone: +216 94 339 804</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/eb_ruspina/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ruspina Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
