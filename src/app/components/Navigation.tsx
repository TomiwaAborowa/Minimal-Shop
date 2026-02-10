'use client';

import React from "react"

import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [cartCount] = useState(3);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('[v0] Searching for:', searchQuery);
      // Navigate to shop or filter products
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white text-sm">M</span>
            </div>
            <span className="text-lg tracking-tight text-neutral-900">Minimal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop"
              className={`transition-colors ${
                isActive('/shop')
                  ? 'text-neutral-900'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="py-4 border-t border-neutral-200">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-all"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-neutral-200 py-4 space-y-4">
            <Link
              to="/shop"
              onClick={() => setShowMobileMenu(false)}
              className="block px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              onClick={() => setShowMobileMenu(false)}
              className="block px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className="block px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
