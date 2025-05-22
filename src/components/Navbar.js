import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // In a real app, this would navigate to search results
      setSearchQuery('');
    }
  };

  // Programmatic navigation example
  const goToContact = () => {
    navigate('/contact');
    setMobileMenuOpen(false);
  };

  // Determine which menu item is active based on current path
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="brand">
          <i className="nav-icon">🔄</i> React Router Demo
        </Link>
        
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`nav-content ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li className={isActive('/') ? 'active' : ''}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <i className="nav-icon">🏠</i> Home
              </Link>
            </li>
            <li className={isActive('/about') ? 'active' : ''}>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                <i className="nav-icon">ℹ️</i> About
              </Link>
            </li>
            <li className={isActive('/contact') ? 'active' : ''}>
              <button onClick={goToContact}>
                <i className="nav-icon">📞</i> Contact
              </button>
            </li>
            <li className={`dropdown ${isActive('/products') ? 'active' : ''}`}>
              <span className="dropdown-toggle">
                <i className="nav-icon">🛒</i> Products <i className="dropdown-arrow">▼</i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/products/1" onClick={() => setMobileMenuOpen(false)}>
                    Premium Widget
                  </Link>
                </li>
                <li>
                  <Link to="/products/2" onClick={() => setMobileMenuOpen(false)}>
                    Deluxe Gadget
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          
          <form className="search-form" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <i className="search-icon">🔍</i>
            </button>
          </form>
        </div>
      </div>
      
      {/* {isActive('/contact') && (
        <div className="technical-note">
          <div className="container">
            <p><em>Ghi chú:</em> Nút 'Contact' ở trên sử dụng hook <code>useNavigate</code> để thực hiện điều hướng có lập trình.</p>
          </div>
        </div>
      )} */}
    </nav>
  );
}

export default Navbar; 