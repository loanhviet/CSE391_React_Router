import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // After 3 seconds, redirect to home
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="main-content page-transition">
      <div className="container">
        <header className="page-header">
          <h1>Liên hệ với chúng tôi</h1>
          <p>Chúng tôi rất mong nhận được phản hồi từ bạn! Hãy gửi tin nhắn qua biểu mẫu dưới đây.</p>
        </header>
        
        {submitted ? (
          <div className="card">
            <h3>Tin nhắn đã gửi!</h3>
            <p>Cảm ơn bạn đã gửi tin nhắn. Chúng tôi sẽ liên hệ với bạn sớm.</p>
            <p>Chuyển hướng về trang chủ trong 3 giây...</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Về trang chủ ngay
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-2">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Họ tên</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Tiêu đề</label>
                  <input 
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Nội dung</label>
                  <textarea 
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Gửi tin nhắn
                </button>
              </form>
            </div>
            
            <div className="col">
              <div className="tech-showcase">
                <h3>Điểm nổi bật kỹ thuật: Hook useNavigate</h3>
                <p>Trang này minh họa điều hướng có lập trình sử dụng hook <code>useNavigate</code> của React Router v6.</p>
                
                <pre>
                  <code>{`// Import hook
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  // Khởi tạo function navigate
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu form...
    
    // Chuyển hướng sau khi gửi (có độ trễ)
    setTimeout(() => {
      navigate('/'); // Chuyển đến trang chủ
    }, 3000);
  };
  
  // Bạn cũng có thể điều hướng đến các route khác
  const goToProducts = () => {
    navigate('/products/1');
  };
  
  // Hoặc quay lại/tiến tới trong lịch sử
  const goBack = () => {
    navigate(-1); // Tương đương nút back của trình duyệt
  };
}`}</code>
                </pre>
                
                <div className="row">
                  <div className="col">
                    <h4>Ví dụ điều hướng:</h4>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                      Về trang chủ
                    </button>{' '}
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>
                      Quay lại
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactPage; 