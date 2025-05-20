import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  return (
    <div className="breadcrumb">
      <Link to="/">Trang chủ</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return isLast ? (
          <span key={name}> &gt; {name}</span>
        ) : (
          <span key={name}> &gt; <Link to={routeTo}>{name}</Link></span>
        );
      })}
    </div>
  );
}

export default Breadcrumb; 