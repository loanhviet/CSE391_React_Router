import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>React Router Demo</h3>
          <p>A demonstration of React Router v6 features with interactive examples.</p>
        </div>
        
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><Link to="/products/1">Product 1</Link></li>
            <li><Link to="/products/2">Product 2</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>React Router Resources</h3>
          <ul>
            <li><a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer">Official Documentation</a></li>
            <li><a href="https://github.com/remix-run/react-router" target="_blank" rel="noreferrer">GitHub Repository</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} React Router Demo. CES391 65TTNT.</p>
      </div>
    </footer>
  );
}

export default Footer; 