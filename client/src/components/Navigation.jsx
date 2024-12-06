/* Basic Imports */
import { useState, useEffect } from "react";
import "./css/Navigation.css";


/* Component Imports */
import Avatar from "./Avatar";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [isMenuOpen]);


  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("Logging out");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Logging in");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">MyApp</a>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {isLoggedIn ? 
          (
            <>
              <Avatar>Mark Canty</Avatar>
              <button onClick={handleLogout}>Logout</button>
            </> 
          ) : 
          (
            <>
              <li>
                <button href="/login" onClick={handleLogin}>Login</button>
              </li>
              <li>
                <button href="/signup">Sign-Up</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
