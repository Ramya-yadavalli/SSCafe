
import { useState } from "react";
import { Link } from "react-router-dom";
import Login, { type LoginUser } from "../pages/Login";
import "./Navbar.css";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Restore user details after page refresh
  const [user, setUser] = useState<LoginUser | null>(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");

    if (token && role && username) {
      return {
        token,
        role,
        username,
      };
    }

    return null;
  });

  // After successful login
  const handleLogin = (loggedInUser: LoginUser) => {
    setUser(loggedInUser);
    setIsLoginOpen(false);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");

    setUser(null);
  };

  // Close mobile menu after clicking a navigation link
  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={handleNavigation}
        >
          <span>SSCafe</span>
        </Link>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={handleNavigation}>Home</a>
          <a href="#about" onClick={handleNavigation}>About</a>
          <a href="#menu" onClick={handleNavigation}>Menu</a>
          <a href="#review" onClick={handleNavigation}>Review</a>
          <a href="#book" onClick={handleNavigation}>Book</a>
        </nav>

        {/* Navbar Buttons */}
        <div className="navbar-actions">

          <a
            href="#book"
            className="navbar-btn"
            onClick={handleNavigation}
          >
            Book A Table
          </a>

          {!user ? (
            <button
              className="navbar-login-btn"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLoginOpen(true);
              }}
            >
              Login
            </button>
          ) : (
            <div className="navbar-user">

              <span className="navbar-username">
                Hi, {user.username}
              </span>

              <button
                className="navbar-logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>
          )}

        </div>
      </header>

      {/* Login Popup */}
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}

export default Navbar;
