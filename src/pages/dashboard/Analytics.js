import React from 'react';

function Analytics() {
  return (
    <div className="dashboard-analytics">
      <h2>Analytics</h2>
      <p>Xem phân tích và số liệu thống kê của bạn.</p>
      
      <div className="analytics-chart">
        <h3>Biểu đồ hoạt động</h3>
        <div className="chart-placeholder">
          <div className="chart-bar" style={{ height: '60%' }}></div>
          <div className="chart-bar" style={{ height: '80%' }}></div>
          <div className="chart-bar" style={{ height: '40%' }}></div>
          <div className="chart-bar" style={{ height: '70%' }}></div>
          <div className="chart-bar" style={{ height: '90%' }}></div>
        </div>
        <div className="chart-labels">
          <span>T2</span>
          <span>T3</span>
          <span>T4</span>
          <span>T5</span>
          <span>T6</span>
        </div>
      </div>
    </div>
  );
}

export default Analytics; 