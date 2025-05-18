import React from 'react';
import './App.css'; // Import global CSS
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar';

// For theoretical discussion, please see the accompanying notes or chat.
// Key differences v5 vs v6:
// - <Switch> is replaced by <Routes>.
// - <Route component={MyComponent}> is now <Route element={<MyComponent />}/>.
// - `useHistory` is replaced by `useNavigate`.
// - Nested routes are more explicit: <Route path='parent' element={<Layout/>}><Route path='child' element={<Child/>}/></Route>

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        
        {/* Example of a redirect: if someone goes to /home, redirect to / */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Catch-all for 404 Not Found (Optional but good practice) */}
        <Route path="*" element={<div><h2>404 Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 