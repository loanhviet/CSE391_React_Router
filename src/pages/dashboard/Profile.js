import React from 'react';

function Profile() {
  return (
    <div className="dashboard-profile">
      <h2>Profile</h2>
      <p>Quản lý thông tin cá nhân của bạn.</p>
      
      <div className="profile-details">
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            <span>LAV</span>
          </div>
          <button className="btn btn-sm">Thay đổi ảnh</button>
        </div>
        
        <div className="profile-form">
          <div className="form-group">
            <label>Họ và tên</label>
            <input type="text" className="form-control" defaultValue="Lỗ Anh Việt" />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" defaultValue="loanhvietfw@gmail.com" />
          </div>
          
          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="tel" className="form-control" defaultValue="+84 123 456 789" />
          </div>
          
          <div className="form-group">
            <label>Địa chỉ</label>
            <textarea className="form-control" defaultValue="Hà Nội, Việt Nam"></textarea>
          </div>
          
          <button className="btn btn-primary">Cập nhật thông tin</button>
        </div>
      </div>
    </div>
  );
}

export default Profile; 