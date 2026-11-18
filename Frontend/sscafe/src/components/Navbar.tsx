
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <span>SSCafe</span>
        
      </Link>

      {/* Navigation Links */}
      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#review">Review</a>
        <a href="#book">Book</a>
      </nav>

      {/* Book Button */}
      <a href="#book" className="navbar-btn">
        Book A Table
      </a>
    </header>
  );
}

export default Navbar;
