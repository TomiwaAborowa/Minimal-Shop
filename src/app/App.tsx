import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ShippingPage } from './pages/ShippingPage';
import { ReturnsPage } from './pages/ReturnsPage';
import React from 'react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
