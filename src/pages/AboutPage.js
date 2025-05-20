import React from 'react';

function AboutPage() {
  return (
    <div className="main-content page-transition">
      <div className="container">
        <header className="page-header">
          <h1>About This Project</h1>
          <p>A demonstration of React Router v6 features and implementation.</p>
        </header>
        
        <div className="row">
          <div className="col">
            <div className="card">
              <h3>Project Purpose</h3>
              <p>This project was built to showcase the features of React Router v6+ and demonstrate how it can be used to create a seamless single page application experience.</p>
              <p>The demo includes examples of:</p>
              <ul>
                <li>Basic routing with <code>BrowserRouter</code>, <code>Routes</code>, and <code>Route</code></li>
                <li>Link navigation with <code>Link</code></li>
                <li>Programmatic navigation with <code>useNavigate</code></li>
                <li>Dynamic routes with <code>:paramName</code> syntax</li>
                <li>Redirects with <code>Navigate</code></li>
              </ul>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <h3>Technologies Used</h3>
              <p>This project was built with:</p>
              <ul>
                <li>React 18+</li>
                <li>React Router v6+</li>
                <li>CSS3</li>
              </ul>
              <p>No additional libraries were used to keep the focus on React Router's functionality.</p>
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