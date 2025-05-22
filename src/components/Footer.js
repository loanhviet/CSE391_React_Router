import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#2c3e50" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="footer-content simplified">
        <div className="footer-section about">
          <h3>React Router Demo</h3>
          <p>Ứng dụng minh họa React Router v6 cho CSE391 65TTNT</p>
        </div>
        
        <div className="footer-section links">
          <h3>Liên kết</h3>
          <div className="footer-links">
            
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/contact">Liên hệ</Link>
            <Link to="/products/1">Sản phẩm</Link>
          </div>
        </div>
      </div>
      
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} React Router Demo | CSE391 65TTNT</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 