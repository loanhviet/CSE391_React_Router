import React from 'react';

function Settings() {
  return (
    <div className="dashboard-settings">
      <h2>Settings</h2>
      <p>Quản lý cài đặt tài khoản của bạn.</p>
      
      <div className="settings-form">
        <div className="form-group">
          <label>Ngôn ngữ</label>
          <select className="form-control">
            <option>Tiếng Việt</option>
            <option>English</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Thông báo</label>
          <div className="toggle-wrapper">
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
            <span>Bật thông báo email</span>
          </div>
        </div>
        
        <div className="form-group">
          <label>Chế độ hiển thị</label>
          <div className="toggle-wrapper">
            <label className="toggle">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
            <span>Chế độ tối</span>
          </div>
        </div>
        
        <button className="btn btn-primary">Lưu thay đổi</button>
      </div>
    </div>
  );
}

export default Settings; 