import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Truck, Shield, Package } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import React from 'react';

export function ProductDetailPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data
  const product = {
    id: id || '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    rating: 4.8,
    reviews: 127,
    description:
      'Experience superior sound quality with our premium wireless headphones. Engineered with advanced noise cancellation technology and premium materials for all-day comfort.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather ear cushions',
      'Bluetooth 5.0 connectivity',
      'Foldable design with premium case',
    ],
    images: [
      'https://images.unsplash.com/photo-1651905714402-f4fbbc075a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwaGVhZHBob25lcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA1OTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1591923271591-478bb32b57ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwNTQzMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMG1pbmltYWwlMjBkZXNpZ258ZW58MXx8fHwxNzcwNTkxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    colors: [
      { name: 'black', label: 'Midnight Black', hex: '#1a1a1a' },
      { name: 'silver', label: 'Silver', hex: '#d4d4d4' },
      { name: 'blue', label: 'Navy Blue', hex: '#1e3a8a' },
    ],
  };

  const reviews = [
    {
      name: 'Alex Johnson',
      rating: 5,
      date: 'January 15, 2026',
      comment:
        'Absolutely love these headphones! The sound quality is incredible and they are so comfortable for long listening sessions.',
      verified: true,
    },
    {
      name: 'Sarah Miller',
      rating: 5,
      date: 'January 10, 2026',
      comment:
        'Best headphones I have ever owned. The noise cancellation is perfect for working from home.',
      verified: true,
    },
    {
      name: 'Michael Chen',
      rating: 4,
      date: 'January 5, 2026',
      comment:
        'Great product overall. The battery life is impressive and the build quality feels premium.',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link to="/" className="hover:text-neutral-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-neutral-900 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-neutral-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-neutral-100 rounded-xl overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-neutral-900 ring-offset-2'
                      : 'hover:opacity-75'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl text-neutral-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      <span className="text-neutral-900">{product.rating}</span>
                    </div>
                    <span className="text-neutral-600">({product.reviews} reviews)</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 transition-colors ${
                      isFavorite ? 'fill-red-500 text-red-500' : 'text-neutral-600'
                    }`}
                  />
                </button>
              </div>
              <p className="text-3xl text-neutral-900">${product.price}</p>
            </div>

            {/* Description */}
            <p className="text-neutral-600 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900">Color</h3>
                <span className="text-sm text-neutral-600">
                  {product.colors.find((c) => c.name === selectedColor)?.label}
                </span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-neutral-900 scale-110'
                        : 'border-neutral-300 hover:border-neutral-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-neutral-900 mb-4">Quantity</h3>
              <div className="inline-flex items-center border border-neutral-300 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center text-neutral-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Link
                to="/cart"
                className="block w-full py-4 bg-neutral-900 text-white text-center rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Add to Cart
              </Link>
              <button className="w-full py-4 border border-neutral-300 text-neutral-900 rounded-xl hover:border-neutral-900 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-neutral-900 mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-200 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-neutral-900" />
                </div>
                <p className="text-sm text-neutral-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-neutral-900" />
                </div>
                <p className="text-sm text-neutral-600">2 Year Warranty</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-neutral-900" />
                </div>
                <p className="text-sm text-neutral-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24">
          <div className="border-t border-neutral-200 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl text-neutral-900 mb-2">Customer Reviews</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-neutral-600">
                    {product.rating} out of 5 ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <button className="px-6 py-3 border border-neutral-300 rounded-xl hover:border-neutral-900 transition-colors">
                Write a Review
              </button>
            </div>

            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-neutral-200 pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-neutral-900">{review.name}</h4>
                        {review.verified && (
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-500">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
