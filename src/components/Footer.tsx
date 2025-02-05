import React, { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import AboutUs from './AboutUs';

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">CloudAI</h3>
            <p className="text-gray-400">
              Enterprise-grade AI solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/spewedprojects/CBD-Mock-Website"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">AI/ML Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Cloud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setShowAbout(true)} 
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CloudAI. All rights reserved.</p>
        </div>
      </div>

      {showAbout && <AboutUs onClose={() => setShowAbout(false)} />}
    </footer>
  );
};

export default Footer;
