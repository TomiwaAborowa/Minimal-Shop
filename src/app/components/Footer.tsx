'use client';

import React from "react"

import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('[v0] Newsletter subscription:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">M</span>
              </div>
              <span className="text-lg tracking-tight text-neutral-900">Minimal</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Curated products for the modern minimalist. Quality over quantity.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-neutral-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-neutral-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-neutral-900 mb-4">Newsletter</h3>
            <p className="text-neutral-600 text-sm mb-4">
              Get updates on new products and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-600">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © 2026 Minimal. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
