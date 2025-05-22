import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function ProductDetailPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  
  // Mock product data - in a real app, this would come from an API
  const products = {
    '1': {
      name: "Premium Widget",
      price: "$99.99",
      originalPrice: "$129.99",
      rating: 4.8,
      reviewCount: 124,
      description: "Đây là sản phẩm Premium Widget phổ biến nhất của chúng tôi. Sản phẩm đi kèm với bảo hành trọn đời và hoàn hảo cho mọi nhu cầu widget của bạn.",
      details: "Premium Widget được chế tạo từ vật liệu chất lượng cao và được thiết kế để sử dụng trong nhiều năm. Đây là một bổ sung hoàn hảo cho bộ công cụ của bạn, với các điều khiển trực quan và hoạt động liền mạch.",
      features: ["Vật liệu chất lượng cao", "Cấu trúc bền bỉ", "Dễ sử dụng", "Bảo hành trọn đời"],
      specs: {
        "Kích thước": "10 x 5 x 2 inches",
        "Trọng lượng": "1.5 lbs",
        "Vật liệu": "Nhôm hàng không",
        "Bảo hành": "Trọn đời"
      },
      related: [2]
    },
    '2': {
      name: "Deluxe Gadget",
      price: "$149.99",
      originalPrice: "$199.99",
      rating: 4.6,
      reviewCount: 89,
      description: "Thiết bị tối ưu cho những người đam mê công nghệ. Phiên bản Deluxe này bao gồm tất cả các tính năng bạn cần và hơn thế nữa.",
      details: "Deluxe Gadget thể hiện đỉnh cao của công nghệ hiện đại. Với khả năng tích hợp thông minh và chức năng không dây, nó kết nối liền mạch với tất cả các thiết bị của bạn để mang lại trải nghiệm thực sự hiện đại.",
      features: ["Công nghệ tiên tiến", "Tích hợp thông minh", "Khả năng không dây", "Pin sạc"],
      specs: {
        "Kích thước": "8 x 4 x 1.5 inches",
        "Trọng lượng": "0.8 lbs",
        "Thời lượng pin": "12 giờ",
        "Kết nối": "Bluetooth 5.0, Wi-Fi"
      },
      related: [1]
    }
  };
  
  const product = products[id] || {
    name: "Không tìm thấy sản phẩm",
    price: "N/A",
    originalPrice: "N/A",
    rating: 0,
    reviewCount: 0,
    description: "Sản phẩm bạn yêu cầu không tồn tại.",
    details: "",
    features: [],
    specs: {},
    related: []
  };
  
  // Go back to previous page
  const handleGoBack = () => {
    navigate(-1); // useNavigate's -1 simulates browser back button
  };

  // Add to cart functionality (would connect to actual cart in a real app)
  const handleAddToCart = () => {
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} style={{color: '#f39c12'}}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} style={{color: '#f39c12'}}>★</span>);
      } else {
        stars.push(<span key={i} style={{color: '#ccc'}}>★</span>);
      }
    }
    
    return stars;
  };

  return (
    <div className="main-content page-transition">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt; <Link to="/products">Sản phẩm</Link> &gt; {product.name}
        </div>
        
        <div className="product-detail">
          <div className="product-detail-image">
            {id}
            {product.originalPrice !== product.price && (
              <div className="discount-badge">Giảm giá</div>
            )}
          </div>
          
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            
            <div className="rating-container">
              <div className="stars">{renderStars(product.rating)}</div>
              <span className="review-count">{product.reviewCount} đánh giá</span>
            </div>
            
            <div className="price-container">
              <h3 className="product-price">{product.price}</h3>
              {product.originalPrice !== product.price && (
                <span className="original-price">{product.originalPrice}</span>
              )}
              {product.originalPrice !== product.price && (
                <span className="discount-percentage">
                  {Math.round((1 - parseFloat(product.price.replace('$', '')) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}% GIẢM
                </span>
              )}
            </div>
            
            <div className="purchase-options">
              <div className="quantity-selector">
                <button className="quantity-btn">-</button>
                <input type="text" className="quantity-input" value="1" readOnly />
                <button className="quantity-btn">+</button>
              </div>
              
              <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
                <i className="cart-icon">🛒</i> Thêm vào giỏ
              </button>
              
              <button className="wishlist-btn" title="Thêm vào danh sách yêu thích">❤</button>
            </div>
            
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Mô tả
              </button>
              <button 
                className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Tính năng
              </button>
              <button 
                className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Thông số kỹ thuật
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="tab-pane">
                  <p>{product.description}</p>
                  <p>{product.details}</p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div className="tab-pane">
                  <ul className="feature-list">
                    {product.features.map((feature, index) => (
                      <li key={index} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'specs' && (
                <div className="tab-pane">
                  <table className="specs-table">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key}>
                          <td className="spec-name">{key}</td>
                          <td className="spec-value">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <div className="action-buttons">
              <button className="btn btn-secondary" onClick={handleGoBack}>
                Quay lại
              </button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {product.related.length > 0 && (
          <div className="related-products">
            <h3>Sản phẩm liên quan</h3>
            <div className="related-products-grid">
              {product.related.map(relatedId => {
                const relatedProduct = products[relatedId];
                return (
                  <div key={relatedId} className="product-card" onClick={() => navigate(`/products/${relatedId}`)}>
                    <div className="product-image">{relatedId}</div>
                    <div className="product-info">
                      <h4 className="product-title">{relatedProduct.name}</h4>
                      <p className="product-price">{relatedProduct.price}</p>
                      <Link to={`/products/${relatedId}`} className="view-button">Xem sản phẩm</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Tech showcase - Dynamic Routes */}
        <div className="tech-showcase">
          <h3>Điểm nổi bật kỹ thuật: Route Parameters</h3>
          <p>Trang này minh họa <code>useParams</code>, một hook của React Router giúp truy cập các phần động trong URL.</p>
          
          <pre>
            <code>{`// Trong định nghĩa Route
<Route path="/products/:id" element={<ProductDetailPage />} />

// Trong component
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams(); // id sẽ là "${id}" trong trường hợp này
  // ...
}`}</code>
          </pre>
          
          <p>Thử xem các sản phẩm khác nhau:</p>
          <div className="product-links">
            <Link to="/products/1" className="product-link">Sản phẩm 1</Link>
            <Link to="/products/2" className="product-link">Sản phẩm 2</Link>
            <Link to="/products/3" className="product-link">Sản phẩm 3 (Không tìm thấy)</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage; 