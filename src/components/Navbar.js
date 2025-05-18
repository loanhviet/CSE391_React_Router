import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact'); // Example of programmatic navigation
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Using Link component for Contact */}
          {/* <Link to="/contact">Contact</Link> */}
          
          {/* Using programmatic navigation for Contact */}
          <button onClick={goToContact}>Contact (Programmatic)</button>
        </li>
        <li>
          <Link to="/products/1">Product 1 (Example)</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2 (Example)</Link>
        </li>
      </ul>
      <hr />
      <p><em>Note on useNavigate:</em> The 'Contact (Programmatic)' button uses <code>useNavigate</code> hook for navigation.</p>
    </nav>
  );
}

export default Navbar; 