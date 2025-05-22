import React from 'react';

function Overview() {
  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <p>Chào mừng bạn đến với Dashboard. Đây là trang tổng quan.</p>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Người dùng</h3>
          <p className="stat-number">1,245</p>
        </div>
        <div className="stat-card">
          <h3>Sản phẩm</h3>
          <p className="stat-number">58</p>
        </div>
        <div className="stat-card">
          <h3>Đơn hàng</h3>
          <p className="stat-number">327</p>
        </div>
      </div>
    </div>
  );
}

export default Overview; 