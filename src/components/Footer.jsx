import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D0A0B] text-[#F3EFF5] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">EIMIGO</h3>
          <p className="text-gray-400">
            Where culture meets creation. Explore stories, style guides, and community features from the heart of North East India.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61578623204089" className="hover:text-blue-600 transition-colors"><FaFacebookF /></a>
            <a href="https://www.instagram.com/eimigo.northeast/" className="hover:text-pink-600 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold mb-2">Categories</h4>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/products" className="hover:text-yellow-400 transition-colors">Sneakers</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400 transition-colors">Casual Shoes</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400 transition-colors">Sports Shoes</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Our Story</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Sustainability</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold mb-2">Customer Service</h4>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/shipping-returns" className="hover:text-yellow-400 transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/size-guide" className="hover:text-yellow-400 transition-colors">Size Guide</Link></li>
            <li><Link to="/help-center" className="hover:text-yellow-400 transition-colors">FAQs</Link></li>
            <li><Link to="/help-center" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/help-center" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} EIMIGO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
