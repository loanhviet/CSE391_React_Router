import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="main-content page-transition">
      <div className="container">
        <header className="page-header">
          <h1>React Router Demo</h1>
          <p>Minh họa các tính năng của React Router v6.</p>
        </header>
        
        {/* Featured Products */}
        <h2>Sản phẩm nổi bật</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">P1</div>
            <div className="product-info">
              <h3 className="product-title">Sản phẩm 1</h3>
              <p className="product-description">Sản phẩm mẫu để minh họa tham số định tuyến.</p>
              <p className="product-price">99.99$</p>
              <Link to="/products/1" className="view-button">Xem chi tiết</Link>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">P2</div>
            <div className="product-info">
              <h3 className="product-title">Sản phẩm 2</h3>
              <p className="product-description">Một ví dụ khác với tham số định tuyến khác nhau.</p>
              <p className="product-price">149.99$</p>
              <Link to="/products/2" className="view-button">Xem chi tiết</Link>
            </div>
          </div>
        </div>
        
        {/* Tech Showcase */}
        <div className="tech-showcase">
          <h3>Tính năng chính của React Router</h3>
          <ul>
            <li><strong>Định tuyến khai báo:</strong> Định nghĩa routes sử dụng cú pháp JSX với component <code>&lt;Route&gt;</code>.</li>
            <li><strong>Định tuyến động:</strong> Routes có thể hiển thị các component khác nhau dựa trên tham số URL. Hãy thử các <Link to="/products/1">trang sản phẩm</Link> để xem hoạt động này.</li>
            <li><strong>Điều hướng lập trình:</strong> Sử dụng hook <code>useNavigate</code> để điều hướng từ JavaScript. Xem <button onClick={() => navigate('/contact')} style={{ background: 'none', border: 'none', color: '#3498db', textDecoration: 'underline', padding: 0, cursor: 'pointer' }}>trang Contact</button> để xem minh họa.</li>
            <li><strong>Định tuyến lồng nhau (Nested Routes):</strong> Xem <Link to="/dashboard">Dashboard</Link> để xem cách kết hợp nhiều routes con trong một route cha sử dụng <code>Outlet</code>.</li>
          </ul>
        </div>
        
        {/* Feature Cards */}
        <h2>Tính năng</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <h3>Nested Routes</h3>
              <p>React Router v6 giúp dễ dàng tạo các routes lồng nhau, nơi các routes con được hiển thị trong component cha sử dụng <code>Outlet</code>.</p>
              <pre>
                <code>
                  {`<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Overview />} />
  <Route path="analytics" element={<Analytics />} />
  <Route path="settings" element={<Settings />} />
</Route>`}
                </code>
              </pre>
              <Link to="/dashboard" className="btn btn-primary btn-sm">Xem ví dụ Dashboard</Link>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <h3>Route Parameters</h3>
              <p>Trích xuất giá trị động từ URL bằng hook useParams.</p>
              <pre>
                <code>
                  {`// URL: /products/1
const { id } = useParams();
// id = "1"`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <h3>Redirects</h3>
              <p>Dễ dàng chuyển hướng người dùng với component Navigate.</p>
              <pre>
                <code>
                  {`<Route path="/old-path" element={
  <Navigate to="/new-path" replace />
} />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 