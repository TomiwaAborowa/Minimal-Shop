'use client';

import React from "react";

export function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl text-neutral-900 mb-4">Shipping & Delivery</h1>
          <p className="text-lg text-neutral-600">
            Fast, reliable shipping to get your order to you quickly.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Shipping Options */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Shipping Options</h2>
          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-2xl p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl text-neutral-900">Standard Shipping</h3>
                <span className="text-lg text-neutral-900 font-semibold">$15.00</span>
              </div>
              <p className="text-neutral-600 mb-3">Delivery in 5-7 business days</p>
              <p className="text-sm text-neutral-500">
                Perfect for orders that aren't urgent. We carefully package your items to ensure they arrive in perfect condition.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl text-neutral-900">Express Shipping</h3>
                <span className="text-lg text-neutral-900 font-semibold">$25.00</span>
              </div>
              <p className="text-neutral-600 mb-3">Delivery in 2-3 business days</p>
              <p className="text-sm text-neutral-500">
                Rush your order with our expedited shipping service. Ideal when you need your items quickly.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8 bg-neutral-50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl text-neutral-900">Free Shipping</h3>
                  <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Popular</span>
                </div>
                <span className="text-lg text-neutral-900 font-semibold">FREE</span>
              </div>
              <p className="text-neutral-600 mb-3">Delivery in 5-7 business days</p>
              <p className="text-sm text-neutral-500">
                On orders over $500. We believe quality products should be accessible without hidden shipping costs.
              </p>
            </div>
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Processing & Timeline</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Order Confirmation</h3>
                <p className="text-neutral-600">Within 1 hour of purchase, you'll receive an order confirmation email.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Preparation</h3>
                <p className="text-neutral-600">Our team carefully picks and packs your order. This typically takes 1-2 business days.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Shipment</h3>
                <p className="text-neutral-600">Your package is handed off to our carrier with a tracking number for your peace of mind.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Delivery</h3>
                <p className="text-neutral-600">Your order arrives safely at your door. We provide tracking updates throughout the journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Zones */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Shipping Zones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-4">Domestic (USA)</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 mt-1">✓</span>
                  <span>All 50 states</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 mt-1">✓</span>
                  <span>Standard shipping: 5-7 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 mt-1">✓</span>
                  <span>Express shipping: 2-3 days</span>
                </li>
              </ul>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-4">International</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 mt-1">✓</span>
                  <span>Canada and Mexico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 mt-1">✓</span>
                  <span>Shipping: 10-14 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 mt-1">✓</span>
                  <span>Customs fees may apply</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tracking */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Order Tracking</h2>
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <p className="text-neutral-600 mb-4">
              Once your order ships, you'll receive a tracking number via email. You can use this number 
              to track your package in real-time with our carrier. We provide updates at every stage of 
              the delivery process.
            </p>
            <p className="text-neutral-600">
              If you have any questions about your shipment, don't hesitate to contact our support team.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl text-neutral-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">How can I track my order?</h3>
              <p className="text-neutral-600">
                You'll receive an email with a tracking number once your order ships. You can use this 
                to track your package with the carrier.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">Can I change my shipping address?</h3>
              <p className="text-neutral-600">
                Once your order has been shipped, unfortunately it cannot be redirected. However, if you 
                contact us within 1 hour of placing your order, we may be able to update it.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">What if my package is delayed?</h3>
              <p className="text-neutral-600">
                Delays can happen occasionally due to weather or carrier issues. We recommend waiting 
                3-5 days beyond the estimated delivery date before contacting us.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">Do you ship internationally?</h3>
              <p className="text-neutral-600">
                Yes! We ship to Canada and Mexico. International orders may take 10-14 business days 
                and customs fees may apply.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
