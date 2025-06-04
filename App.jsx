import React, { useState } from 'react';
import './index.css';
import logo from './assets/logo.png';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const categories = ['All', 'Booking', 'Payments', 'Account'];

  const faqs = [
    { question: "How do I book an event?", answer: "Go to the 'Events' section, pick your event type, and follow the instructions.", category: 'Booking' },
    { question: "Can I cancel or reschedule?", answer: "Yes, go to 'My Bookings' in your account to cancel or reschedule.", category: 'Booking' },
    { question: "What payment methods are supported?", answer: "We accept UPI, cards, and net banking.", category: 'Payments' },
    { question: "How do I change my password?", answer: "Click 'Forgot Password' on the login page to reset it.", category: 'Account' },
    { question: "How can I contact support?", answer: "Visit the Contact Us page or email support@yaadgarpal.com.", category: 'Account' },
  ];

  const filteredFaqs = faqs
    .filter(faq =>
      (selectedCategory === 'All' || faq.category === selectedCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.question.localeCompare(b.question)
        : b.question.localeCompare(a.question)
    );

  const primaryColor = '#950B47';

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-red-50 text-gray-800">
      {/* Header */}
      <header
        className="bg-white shadow-md py-4 sticky top-0 z-50"
        style={{ borderBottom: `4px solid ${primaryColor}` }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Yaadgarpal Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: primaryColor }}>
              Yaadgarpal Help Center
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
            {['Home', 'Events', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:underline transition"
                style={{ color: primaryColor }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
          How can we assist you today?
        </h2>
        <p className="text-gray-600 mb-6">Search or filter to find quick answers to common questions</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search for help..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
            style={{ borderColor: primaryColor, boxShadow: `0 0 0 2px ${primaryColor}50` }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/6 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
            style={{ borderColor: primaryColor, boxShadow: `0 0 0 2px ${primaryColor}50` }}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full md:w-1/6 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
            style={{ borderColor: primaryColor, boxShadow: `0 0 0 2px ${primaryColor}50` }}
          >
            <option value="asc">A–Z</option>
            <option value="desc">Z–A</option>
          </select>
        </div>
      </section>

      {/* FAQ Section */}
      <main className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: primaryColor }}>
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-lg border border-gray-200 shadow-sm p-6 rounded-xl transition hover:shadow-lg"
                  style={{ borderColor: primaryColor }}
                >
                  <h4 className="text-lg font-semibold" style={{ color: primaryColor }}>
                    {faq.question}
                  </h4>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No results found.</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white py-6 text-center mt-12" style={{ backgroundColor: primaryColor }}>
        <p>&copy; {new Date().getFullYear()} Yaadgarpal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
