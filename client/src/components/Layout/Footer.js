
import React from 'react';
import { FaTwitter, FaInstagram, FaGooglePlusSquare } from 'react-icons/fa';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          NPS VISION 
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
       
        <a href="/about">About</a>
       <a href="/contact">Contact</a>
         <a href="/privacy">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter">
            <FaTwitter className="footer-social-icon" />
          </a>
          <a href="https://instagram.com" className="footer-social-link" aria-label="Instagram">
            <FaInstagram className="footer-social-icon" />
          </a>
          <a href="https://google.com" className="footer-social-link" aria-label="Google Plus">
            <FaGooglePlusSquare className="footer-social-icon" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        All Rights Reserved © {new Date().getFullYear()} NPS VISION 
      </div>
    </footer>
  );
};

export default Footer;