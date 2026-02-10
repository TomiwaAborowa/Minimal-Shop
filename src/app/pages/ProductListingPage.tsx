import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import React from 'react';

export function ProductListingPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const products = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299,
      image: 'https://images.unsplash.com/photo-1651905714402-f4fbbc075a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwaGVhZHBob25lcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA1OTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Audio',
      isNew: true,
    },
    {
      id: '2',
      name: 'Minimalist Smart Watch',
      price: 399,
      image: 'https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMG1pbmltYWwlMjBkZXNpZ258ZW58MXx8fHwxNzcwNTkxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Wearables',
      isNew: true,
    },
    {
      id: '3',
      name: 'Premium Wireless Earbuds',
      price: 199,
      image: 'https://images.unsplash.com/photo-1591923271591-478bb32b57ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwNTQzMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Audio',
    },
    {
      id: '4',
      name: 'Modern Camera Kit',
      price: 899,
      image: 'https://images.unsplash.com/photo-1750891892490-db905b7ff7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwNTkxMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Photography',
    },
    {
      id: '5',
      name: 'Minimalist Backpack',
      price: 129,
      image: 'https://images.unsplash.com/photo-1683921377994-928bd73b889f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmFja3BhY2slMjBkZXNpZ258ZW58MXx8fHwxNzcwNTkxMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Accessories',
    },
    {
      id: '6',
      name: 'Designer Sunglasses',
      price: 249,
      image: 'https://images.unsplash.com/photo-1674835255169-8f4a0a514af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdW5nbGFzc2VzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzA1NjI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Accessories',
    },
    {
      id: '7',
      name: 'Premium Smartphone',
      price: 799,
      image: 'https://images.unsplash.com/photo-1642571946867-480f7b8fe0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbWluaW1hbCUyMHByb2R1Y3R8ZW58MXx8fHwxNzcwNTkxMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Electronics',
    },
    {
      id: '8',
      name: 'Modern Laptop',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1627929994715-997356049549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtYWNib29rJTIwbWluaW1hbCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA1OTEyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Electronics',
    },
  ];

  const categories = ['All', 'Audio', 'Wearables', 'Photography', 'Accessories', 'Electronics'];

  return (
    <div className="min-h-screen bg-white"> 
      {/* Header */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl text-neutral-900 mb-4">All Products</h1>
          <p className="text-neutral-600">Discover our complete collection of premium products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-neutral-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(category === 'All' ? null : category)
                      }
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        (category === 'All' && !selectedCategory) ||
                        selectedCategory === category
                          ? 'bg-neutral-900 text-white'
                          : 'text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-neutral-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="1500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-neutral-900"
                  />
                  <div className="flex items-center justify-between text-sm text-neutral-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div>
                <h3 className="text-neutral-900 mb-4">Filters</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
                    />
                    <span className="text-neutral-600">New Arrivals</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
                    />
                    <span className="text-neutral-600">On Sale</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
                    />
                    <span className="text-neutral-600">In Stock</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-xl hover:border-neutral-900 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Mobile Filters Modal */}
          {showFilters && (
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
              <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl text-neutral-900">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Mobile Categories */}
                  <div>
                    <h3 className="text-neutral-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category === 'All' ? null : category);
                            setShowFilters(false);
                          }}
                          className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            (category === 'All' && !selectedCategory) ||
                            selectedCategory === category
                              ? 'bg-neutral-900 text-white'
                              : 'text-neutral-600 hover:bg-neutral-100'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Price Range */}
                  <div>
                    <h3 className="text-neutral-900 mb-4">Price Range</h3>
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="0"
                        max="1500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full accent-neutral-900"
                      />
                      <div className="flex items-center justify-between text-sm text-neutral-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-neutral-600">{products.length} Products</p>
              <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-all">
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products
                .filter((product) =>
                  selectedCategory ? product.category === selectedCategory : true
                )
                .filter((product) => product.price <= priceRange[1])
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
