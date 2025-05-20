import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    navigate('/contact'); // Example of programmatic navigation
  };

  // Determine which menu item is active based on current path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="brand">React Router Demo</Link>
        
        <ul>
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <button onClick={goToContact}>Contact</button>
          </li>
          <li className={isActive('/products/1') ? 'active' : ''}>
            <Link to="/products/1">Product 1</Link>
          </li>
          <li className={isActive('/products/2') ? 'active' : ''}>
            <Link to="/products/2">Product 2</Link>
          </li>
        </ul>
      </div>
      
      {/* Technical note - visible only in Contact page to highlight useNavigate */}
      {isActive('/contact') && (
        <p><em>Ghi chú:</em> Nút 'Contact' ở trên sử dụng hook <code>useNavigate</code> để thực hiện điều hướng có lập trình.</p>
      )}
    </nav>
  );
}

export default Navbar; 