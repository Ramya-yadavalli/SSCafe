
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Our Branches */}
        <div className="footer-column">
          <h3>Our Branches</h3>
          <ul>
            {["India", "USA", "France", "Africa", "Japan"].map((item) => (
              <li key={item}>
                <span className="arrow">➜</span>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {["Home", "About", "Menu", "Review", "Book"].map((item) => (
              <li key={item}>
                <span className="arrow">➜</span>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <span className="contact-icon">☎</span>
              <a href="tel:+1234567890">+123-456-7890</a>
            </li>
            <li>
              <span className="contact-icon">☎</span>
              <a href="tel:+1112223333">+111-222-3333</a>
            </li>
            <li>
              <span className="contact-icon">✉</span>
              <a href="mailto:Coffee@Gmail.Com">Coffee@Gmail.Com</a>
            </li>
            <li>
              <span className="contact-icon">✉</span>
              <a href="#">Perú, Lima</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <span className="social-icon">f</span>
              <a href="#">Facebook</a>
            </li>
            <li>
              <span className="social-icon">♥</span>
              <a href="#">Twitter</a>
            </li>
            <li>
              <span className="social-icon">◎</span>
              <a href="#">Instagram</a>
            </li>
            <li>
              <span className="social-icon">▣</span>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <span className="social-icon">♥</span>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-credit">
        Created By <a href="#">Mr. Web Designer</a> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
