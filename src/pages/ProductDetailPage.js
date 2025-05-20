import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetailPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  
  // Mock product data - in a real app, this would come from an API
  const products = {
    '1': {
      name: "Premium Widget",
      price: "$99.99",
      description: "This is our most popular premium widget. It comes with a lifetime warranty and is perfect for all your widget needs.",
      features: ["High quality materials", "Durable construction", "Easy to use", "Lifetime warranty"]
    },
    '2': {
      name: "Deluxe Gadget",
      price: "$149.99",
      description: "The ultimate gadget for tech enthusiasts. This deluxe model includes all the features you need and more.",
      features: ["Advanced technology", "Smart integration", "Wireless capabilities", "Rechargeable battery"]
    }
  };
  
  const product = products[id] || {
    name: "Product Not Found",
    price: "N/A",
    description: "The requested product does not exist.",
    features: []
  };
  
  // Go back to previous page
  const handleGoBack = () => {
    navigate(-1); // useNavigate's -1 simulates browser back button
  };

  return (
    <div className="main-content">
      <div className="container">
        <header className="page-header">
          <h1>{product.name}</h1>
          <p>Product ID: {id}</p>
        </header>
        
        <div className="product-detail">
          <div className="product-detail-image">
            {id}
          </div>
          
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <h3 className="product-price">{product.price}</h3>
            <p>{product.description}</p>
            
            <h4>Features:</h4>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <button className="btn btn-primary" onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        </div>
        
        {/* Tech showcase - Dynamic Routes */}
        <div className="tech-showcase">
          <h3>Technical Highlight: Route Parameters</h3>
          <p>This page demonstrates <code>useParams</code>, a React Router hook that gives you access to the dynamic parts of the URL.</p>
          
          <pre>
            <code>{`// In your Route definition
<Route path="/products/:id" element={<ProductDetailPage />} />

// In your component
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams(); // id will be "${id}" in this case
  // ...
}`}</code>
          </pre>
          
          <p>Try changing the URL to see different products:</p>
          <ul>
            <li><button onClick={() => navigate('/products/1')} style={{background: 'none', border: 'none', color: '#3498db', textDecoration: 'underline', cursor: 'pointer', padding: 0}}>Product 1</button></li>
            <li><button onClick={() => navigate('/products/2')} style={{background: 'none', border: 'none', color: '#3498db', textDecoration: 'underline', cursor: 'pointer', padding: 0}}>Product 2</button></li>
            <li><button onClick={() => navigate('/products/3')} style={{background: 'none', border: 'none', color: '#3498db', textDecoration: 'underline', cursor: 'pointer', padding: 0}}>Product 3 (Not Found)</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage; 