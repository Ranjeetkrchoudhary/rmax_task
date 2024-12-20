import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="span">R</span>Max
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <nav className={`nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li
            className="dropdown"
            onMouseEnter={!mobileMenuOpen ? toggleDropdown : null}
            onMouseLeave={!mobileMenuOpen ? toggleDropdown : null}
          >
            <span onClick={mobileMenuOpen ? toggleDropdown : undefined}>
              Features
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-column">
                  <h4>Discover</h4>
                  <ul>
                    <li>Custom Branded Website</li>
                    <li>User Mobile App</li>
                    <li>Business Webpage</li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Manage</h4>
                  <ul>
                    <li>Courses</li>
                    <li>Services</li>
                    <li>Retreats</li>
                    <li>Payments</li>
                    <li>Design Tools</li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Grow</h4>
                  <ul>
                    <li>AI Marketing Tools</li>
                    <li>Social Media Integration</li>
                    <li>CRM</li>
                  </ul>
                </div>
                <div className="dropdown-footer">
                  <button className="see-all">See all features</button>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
        </ul>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="try-btn">Try For Free</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
