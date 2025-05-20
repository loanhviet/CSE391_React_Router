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
    <div className="main-content">
      <div className="container">
        <header className="page-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Send us a message using the form below.</p>
        </header>
        
        {submitted ? (
          <div className="card">
            <h3>Message Sent!</h3>
            <p>Thank you for your message. We'll get back to you soon.</p>
            <p>Redirecting to home page in 3 seconds...</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Go to Home Now
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-2">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
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
                  <label htmlFor="subject" className="form-label">Subject</label>
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
                  <label htmlFor="message" className="form-label">Message</label>
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
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="col">
              <div className="tech-showcase">
                <h3>Technical Highlight: useNavigate Hook</h3>
                <p>This page demonstrates programmatic navigation using the <code>useNavigate</code> hook from React Router v6.</p>
                
                <pre>
                  <code>{`// Import the hook
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  // Initialize the navigate function
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data...
    
    // Redirect after submission (with delay)
    setTimeout(() => {
      navigate('/'); // Navigate to home
    }, 3000);
  };
  
  // You can also navigate to other routes
  const goToProducts = () => {
    navigate('/products/1');
  };
  
  // Or go back/forward in history
  const goBack = () => {
    navigate(-1); // Equivalent to browser's back button
  };
}`}</code>
                </pre>
                
                <div className="row">
                  <div className="col">
                    <h4>Navigation Examples:</h4>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                      Go to Home
                    </button>{' '}
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>
                      Go Back
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