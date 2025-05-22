import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Function to get a friendly name for the path
  const getFriendlyName = (path) => {
    // Capitalize first letter and handle IDs
    if (path === 'products') return 'Sản phẩm';
    if (path === 'about') return 'Giới thiệu';
    if (path === 'contact') return 'Liên hệ';
    if (path === 'dashboard') return 'Dashboard';
    if (path === 'analytics') return 'Phân tích';
    if (path === 'settings') return 'Cài đặt';
    if (path === 'profile') return 'Hồ sơ';
    
    // Check if path is an ID (numeric)
    if (/^\d+$/.test(path)) {
      return `ID: ${path}`;
    }
    
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="breadcrumb">
      <Link to="/">Trang chủ</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = getFriendlyName(name);
        
        return isLast ? (
          <span key={name}> &gt; {displayName}</span>
        ) : (
          <span key={name}> &gt; <Link to={routeTo}>{displayName}</Link></span>
        );
      })}
    </div>
  );
}

export default Breadcrumb; 