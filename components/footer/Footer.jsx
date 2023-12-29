import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>
                <Link to='heroPage' smooth={true} duration={1000}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='products' smooth={true} duration={1000}>
                    Products
                </Link>
            </li>
            <li>
                <Link to='ContactUsPage' smooth={true} duration={1000}>
                    Contact Us
                </Link>
            </li>
            <li>
                <Link to='location-container' smooth={true} duration={1000}>
                    Location
                </Link>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Business Info</h3>
          <p>AECS LAYOUT, BROOKFIELD</p>
          <p>Bengaluru, Karnataka 560337</p>
          <p>Phone: (+91) 999-888-777</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Business Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;