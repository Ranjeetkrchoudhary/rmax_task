import React from "react";
import "./style.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Business Size</h4>
        <ul>
          <li>Entrepreneurs</li>
          <li>SMBs</li>
          <li>Growth Businesses</li>
          <li>Household Services</li>
          <li>Enterprise</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Business Type</h4>
        <ul>
          <li>Health & Wellness</li>
          <li>Sports</li>
          <li>Learning Activities</li>
          <li>Household Services</li>
          <li>Miscellaneous</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Download</h4>
        <ul>
          <li> Business App</li>
          <li>Play Business App</li>
          <li> User App</li>
          <li>Play User App</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Return Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact us</h4>
        <ul>
          <li>support@rmax.com</li>
          <li>+91-8450971235</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Copyright. All Rights Reserved @RMax</p>
      <div className="social-icons">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
  </footer>
);

export default Footer;
