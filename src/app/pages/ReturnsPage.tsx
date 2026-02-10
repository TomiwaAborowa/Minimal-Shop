'use client';

import React from "react";

export function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl text-neutral-900 mb-4">Returns & Exchanges</h1>
          <p className="text-lg text-neutral-600">
            We want you to love everything you buy. If not, we'll make it right.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Return Policy */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">30-Day Return Guarantee</h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
            <p className="text-neutral-900 font-semibold mb-2">We stand behind our products.</p>
            <p className="text-neutral-600">
              If you're not 100% satisfied with your purchase, return it within 30 days for a full 
              refund. No questions asked.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-3">30 Days to Decide</h3>
              <p className="text-neutral-600">
                You have 30 days from the date you receive your order to initiate a return. We want 
                you to have enough time to really try out your purchase.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-3">Unused Condition</h3>
              <p className="text-neutral-600">
                For a full refund, items must be unused and in their original condition with all tags 
                and packaging intact. We understand that some products need to be tested—use good judgment.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-3">Free Return Shipping</h3>
              <p className="text-neutral-600">
                We provide a prepaid return label so you can ship your item back to us for free. 
                Just print it out and drop off at any USPS location.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-3">Full Refund</h3>
              <p className="text-neutral-600">
                Once we receive and inspect your return, we'll process your refund. You'll see the 
                credit back to your original payment method within 5-10 business days.
              </p>
            </div>
          </div>
        </section>

        {/* How to Return */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">How to Return an Item</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1 font-semibold">1</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Log In to Your Account</h3>
                <p className="text-neutral-600">
                  Visit your order history and select the item you wish to return. Click "Initiate Return" 
                  to get started.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1 font-semibold">2</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Get Your Return Label</h3>
                <p className="text-neutral-600">
                  We'll email you a prepaid return shipping label. Just download it, print it out, and 
                  tape it to your package.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1 font-semibold">3</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Ship It Back</h3>
                <p className="text-neutral-600">
                  Drop off your package at any USPS location. Tracking is included so you can monitor 
                  the return shipment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-1 font-semibold">4</div>
              <div>
                <h3 className="text-lg text-neutral-900 mb-1">Get Your Refund</h3>
                <p className="text-neutral-600">
                  Once we receive and inspect your return, we'll process your refund. You'll see the 
                  credit within 5-10 business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exchanges */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Exchanges</h2>
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <p className="text-neutral-600 mb-4">
              Want a different size or color? Exchanges are even easier than returns. When you initiate 
              a return, you have the option to exchange your item for a different version at no extra charge.
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 mt-1">✓</span>
                <span>Same 30-day window as returns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 mt-1">✓</span>
                <span>Free return shipping included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 mt-1">✓</span>
                <span>We'll ship your replacement right away</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What We Can't Return */}
        <section className="mb-20">
          <h2 className="text-3xl text-neutral-900 mb-8">Items We Cannot Accept for Return</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 mt-1">•</span>
                <span>Items purchased more than 30 days ago</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 mt-1">•</span>
                <span>Items that have been used or show signs of wear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 mt-1">•</span>
                <span>Items with damaged tags or missing original packaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 mt-1">•</span>
                <span>Items purchased at a discounted price with a "final sale" designation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl text-neutral-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">How long does a refund take?</h3>
              <p className="text-neutral-600">
                Once we receive your return at our warehouse and inspect it, we'll process your refund 
                within 1-2 business days. You'll see the credit back to your original payment method 
                within 5-10 business days after that.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">Can I return my item to a store?</h3>
              <p className="text-neutral-600">
                We're an online-only retailer, so we don't have physical store locations. All returns 
                must be shipped back to us using the prepaid label we provide.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">What if the item arrived damaged?</h3>
              <p className="text-neutral-600">
                If you receive a damaged item, contact us immediately with photos. We'll send you a 
                replacement right away at no cost—no need to return the damaged item first.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">Can I return multiple items in one package?</h3>
              <p className="text-neutral-600">
                Yes! If you're returning multiple items from the same order, you can include them all 
                in one return shipment. We'll refund all items once we inspect and process them.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">What about final sale items?</h3>
              <p className="text-neutral-600">
                Some items are marked as "final sale" and cannot be returned. This is clearly noted on 
                the product page. If you have questions, contact our support team before purchasing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
