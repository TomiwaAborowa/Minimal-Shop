'use client';

import React from "react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl text-neutral-900 mb-4">About Minimal</h1>
          <p className="text-lg text-neutral-600">
            Curating quality products for the modern minimalist since 2020.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Our Story */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              Minimal was founded with a simple belief: quality should never be compromised for quantity. 
              In a world overwhelmed with choices, we curate a carefully selected collection of products 
              that embody timeless design, exceptional functionality, and sustainable practices.
            </p>
            <p>
              We started as a small team of designers and product enthusiasts who were frustrated with 
              the endless clutter of mediocre products. We wanted to create a space where every item 
              tells a story of craftsmanship and innovation. Today, Minimal serves thousands of 
              minimalist-minded customers who share our vision.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg text-neutral-900 mb-2">Quality First</h3>
              <p className="text-neutral-600 text-sm">
                We believe in durability and craftsmanship. Every product is vetted for its quality and longevity.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg text-neutral-900 mb-2">Sustainability</h3>
              <p className="text-neutral-600 text-sm">
                We partner with brands that prioritize eco-friendly materials and ethical manufacturing.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg text-neutral-900 mb-2">Customer Focus</h3>
              <p className="text-neutral-600 text-sm">
                Your satisfaction is our priority. We offer hassle-free returns and dedicated support.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Why Choose Minimal</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl text-neutral-900 mb-3">Curated Selection</h3>
              <p className="text-neutral-600">
                Every product in our collection has been carefully selected by our team of experts. 
                No filler, no compromise—just truly exceptional items.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl text-neutral-900 mb-3">Transparent Pricing</h3>
              <p className="text-neutral-600">
                What you see is what you get. No hidden fees, no surprises. We believe in honest 
                pricing and exceptional value.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl text-neutral-900 mb-3">Fast Shipping</h3>
              <p className="text-neutral-600">
                We partner with reliable carriers to ensure your order arrives quickly and safely. 
                Free shipping on orders over $500.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl text-neutral-900 mb-3">Lifetime Support</h3>
              <p className="text-neutral-600">
                Our customer support team is always available to help. We stand behind every product 
                we sell.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl text-neutral-900 mb-8">Our Team</h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            We're a passionate team of designers, developers, and product enthusiasts united by a 
            single mission: to help you live better with less. We're constantly exploring new brands, 
            testing products, and refining our collection to bring you the very best.
          </p>
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <p className="text-neutral-600 mb-4">
              Have feedback or want to collaborate? We'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@minimal.com" 
              className="inline-flex px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
