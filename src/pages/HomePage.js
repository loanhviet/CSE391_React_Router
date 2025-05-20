import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="main-content">
      <div className="container">
        <header className="page-header">
          <h1>Welcome to React Router Demo</h1>
          <p>A demonstration of React Router v6 capabilities for single page applications.</p>
        </header>
        
        {/* Featured Products */}
        <h2>Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">P1</div>
            <div className="product-info">
              <h3 className="product-title">Product 1</h3>
              <p className="product-description">Example product to demonstrate route parameters.</p>
              <p className="product-price">$99.99</p>
              <Link to="/products/1" className="view-button">View Details</Link>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">P2</div>
            <div className="product-info">
              <h3 className="product-title">Product 2</h3>
              <p className="product-description">Another example with different route parameter.</p>
              <p className="product-price">$149.99</p>
              <Link to="/products/2" className="view-button">View Details</Link>
            </div>
          </div>
        </div>
        
        {/* Tech Showcase */}
        <div className="tech-showcase">
          <h3>React Router Key Features</h3>
          <ul>
            <li><strong>Declarative Routing:</strong> Define routes using JSX syntax with the <code>&lt;Route&gt;</code> component.</li>
            <li><strong>Dynamic Routing:</strong> Routes can render different components based on URL parameters. Try our <Link to="/products/1">product pages</Link> to see this in action.</li>
            <li><strong>Programmatic Navigation:</strong> Use the <code>useNavigate</code> hook to navigate to routes from JavaScript. See our <button onClick={() => navigate('/contact')} style={{ background: 'none', border: 'none', color: '#3498db', textDecoration: 'underline', padding: 0, cursor: 'pointer' }}>Contact page</button> for a demonstration.</li>
          </ul>
        </div>
        
        {/* Feature Cards */}
        <h2>Features</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <h3>Nested Routes</h3>
              <p>React Router v6 makes it easy to create nested routes, where child routes render within a parent component.</p>
              <pre>
                <code>
                  {`<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <h3>Route Parameters</h3>
              <p>Extract dynamic values from the URL using the useParams hook.</p>
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
              <p>Easily redirect users with the Navigate component.</p>
              <pre>
                <code>
                  {`<Route path="/old-page" element={
  <Navigate to="/new-page" replace />
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