import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <h3 className="text-xl font-bold">Grocito</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted destination for quality products. We bring you the
              best selection with exceptional service and competitive prices.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-500 w-4 h-4" />
                <span className="text-gray-300 text-sm">
                  123 Commerce St, Business City, BC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-500 w-4 h-4" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500 w-4 h-4" />
                <span className="text-gray-300 text-sm">info@grocito.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Grocito. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
