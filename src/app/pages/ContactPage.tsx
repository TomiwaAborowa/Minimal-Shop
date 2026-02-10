'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl text-neutral-900 mb-4">Contact Us</h1>
          <p className="text-lg text-neutral-600">
            We're here to help. Reach out anytime with questions or feedback.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-neutral-900" />
                  </div>
                  <h3 className="text-lg text-neutral-900">Email</h3>
                </div>
                <a 
                  href="mailto:hello@minimal.com"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  hello@minimal.com
                </a>
                <p className="text-sm text-neutral-500 mt-1">We typically respond within 24 hours</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-neutral-900" />
                  </div>
                  <h3 className="text-lg text-neutral-900">Phone</h3>
                </div>
                <a 
                  href="tel:+1-555-123-4567"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
                <p className="text-sm text-neutral-500 mt-1">Monday-Friday, 9am-6pm EST</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-neutral-900" />
                  </div>
                  <h3 className="text-lg text-neutral-900">Address</h3>
                </div>
                <p className="text-neutral-600">
                  123 Design Street<br/>
                  New York, NY 10001<br/>
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="return">Return Request</option>
                  <option value="product">Product Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-medium">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl text-neutral-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">What are your hours of operation?</h3>
              <p className="text-neutral-600">
                We're available Monday through Friday from 9am to 6pm EST. You can email us anytime, 
                and we'll respond as soon as possible. For urgent matters, please call us during business hours.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">How quickly will you respond to my message?</h3>
              <p className="text-neutral-600">
                We typically respond to all inquiries within 24 business hours. For phone calls, please 
                call during business hours for immediate assistance.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">Can I track my order through you?</h3>
              <p className="text-neutral-600">
                Yes! Once your order ships, we'll send you a tracking number via email. You can use 
                this to track your package with the carrier.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">Do you have a physical store?</h3>
              <p className="text-neutral-600">
                We're currently online-only, but we'd love to connect with you digitally. Feel free to 
                reach out with any questions or just to say hello!
              </p>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-lg text-neutral-900 mb-2">I have a business inquiry. Who should I contact?</h3>
              <p className="text-neutral-600">
                Great! Please select "Partnership Opportunity" in the subject line when contacting us, 
                and we'll make sure your inquiry reaches the right team.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
