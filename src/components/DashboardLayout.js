import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard-container page-transition">
      <div className="container">
        <h1>Dashboard</h1>
        <p>Đây là ví dụ về Nested Routes trong React Router v6+</p>
        
        <div className="dashboard-layout">
          <div className="dashboard-sidebar">
            <h3>Menu</h3>
            <ul className="dashboard-nav">
              <li><Link to="/dashboard" className="dashboard-link">Dashboard Overview</Link></li>
              <li><Link to="/dashboard/analytics" className="dashboard-link">Analytics</Link></li>
              <li><Link to="/dashboard/settings" className="dashboard-link">Settings</Link></li>
              <li><Link to="/dashboard/profile" className="dashboard-link">Profile</Link></li>
            </ul>
          </div>
          
          <div className="dashboard-content">
            {/* This is where the child routes will be rendered */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout; 