import React from 'react';

function AboutPage() {
  return (
    <div className="main-content page-transition">
      <div className="container">
        <header className="page-header">
          <h1>Giới thiệu dự án</h1>
          <p>Ứng dụng minh họa các tính năng và cách triển khai của React Router v6.</p>
        </header>
        
        <div className="row">
          <div className="col">
            <div className="card">
              <h3>Mục đích dự án</h3>
              <p>Dự án này được xây dựng để trình bày các tính năng của React Router v6+ và minh họa cách sử dụng để tạo trải nghiệm ứng dụng trang đơn liền mạch.</p>
              <p>Demo này bao gồm các ví dụ về:</p>
              <ul>
                <li>Định tuyến cơ bản với <code>BrowserRouter</code>, <code>Routes</code>, và <code>Route</code></li>
                <li>Điều hướng đường dẫn với <code>Link</code></li>
                <li>Điều hướng lập trình với <code>useNavigate</code></li>
                <li>Định tuyến động với cú pháp <code>:paramName</code></li>
                <li>Chuyển hướng với <code>Navigate</code></li>
              </ul>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <h3>Công nghệ sử dụng</h3>
              <p>Dự án này được xây dựng với:</p>
              <ul>
                <li>React 18+</li>
                <li>React Router v6+</li>
                <li>CSS3</li>
              </ul>
              <p>Không sử dụng thư viện bổ sung để giữ trọng tâm vào chức năng của React Router.</p>
            </div>
          </div>
        </div>
        
        {/* Tech showcase - React Router v5 vs v6 */}
        <div className="tech-showcase">
          <h3>So sánh React Router v5 và v6</h3>
          
          <div className="row">
            <div className="col">
              <h4>Cú pháp V5</h4>
              <pre>
                <code>{`// React Router v5
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products/:id" render={props => (
          <ProductDetail id={props.match.params.id} />
        )} />
      </Switch>
    </BrowserRouter>
  );
}`}</code>
              </pre>
            </div>
            
            <div className="col">
              <h4>Cú pháp V6</h4>
              <pre>
                <code>{`// React Router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code>
              </pre>
            </div>
          </div>
          
          <h4>Thay đổi chính trong v6:</h4>
          <ul>
            <li><code>&lt;Switch&gt;</code> được thay thế bằng <code>&lt;Routes&gt;</code></li>
            <li>Thuộc tính <code>component</code> được thay thế bằng thuộc tính <code>element</code></li>
            <li><code>useHistory</code> được thay thế bằng <code>useNavigate</code></li>
            <li>Cải thiện routes lồng nhau với đường dẫn tương đối và <code>&lt;Outlet /&gt;</code></li>
            <li>Không còn thuộc tính <code>exact</code> (routes mặc định khớp chính xác)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage; 