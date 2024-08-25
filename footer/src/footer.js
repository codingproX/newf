import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="logo.png" alt="Raftlabs Logo" />
          <p>Top rated agency on</p>
          <div className="footer-ratings">
            <span>⭐⭐⭐⭐⭐</span> 
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Culture</a></li>
            <li><a href="#">Partnership</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Open source</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Labs</a></li>
            <li><a href="#">Awards</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Industries</h4>
          <ul>
            <li><a href="#">Media and Communication</a></li>
            <li><a href="#">Marketing Tech</a></li>
            <li><a href="#">Digital Commerce</a></li>
            <li><a href="#">Loyalty App Development</a></li>
            <li><a href="#">Healthcare</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web App Development</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">MVP App Development</a></li>
            <li><a href="#">SaaS App Development</a></li>
            <li><a href="#">Product Roadmapping</a></li>
            <li><a href="#">AI App Development</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Development Resources</a></li>
            <li><a href="#">Healthcare Resources</a></li>
            <li><a href="#">E-commerce Resources</a></li>
            <li><a href="#">Marketing Resources</a></li>
            <li><a href="#">Best Business Apps</a></li>
            <li><a href="#">Best Shopify Apps</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Grubly</a></li>
            <li><a href="#">eventRAFT</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>CIN#: U72300GJ2015PTC088336</p>
        <p>&copy; 2024 Raft Media Systems Pvt Ltd.</p>
        <p><a href="#">Privacy Policy</a></p>
        <div className="footer-icons">
          {/* Add social media icons here */}
        </div>
        <div className="footer-locations">
          <p>Dublin, Ireland</p>
          <p>Ahmedabad, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

