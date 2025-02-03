import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Transform Your Business</h2>
            <p className="text-xl text-gray-600">
              Schedule a consultation with our experts to discover how our AI solutions can drive your
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Suman De"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="suman.de@sap.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    rows={4}
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Request Demo
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={24} />
                    <span>enterprise@cloudai.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={24} />
                    <span>+(91)07126192400</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="text-blue-600" size={24} />
                    <span>24/7 Enterprise Support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Enterprise Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Dedicated Solution Architect</li>
                  <li>• Custom AI Model Development</li>
                  <li>• Priority 24/7 Support</li>
                  <li>• Flexible Deployment Options</li>
                  <li>• Comprehensive Training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;