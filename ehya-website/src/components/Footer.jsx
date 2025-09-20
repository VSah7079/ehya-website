// components/Footer.jsx
import React from "react";
import { Twitter, Instagram, Linkedin, Heart, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0D1A1C] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1 - Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold">
            ehya<span className="text-blue-500">.</span>
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Build a modern and creative website with crealand
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-[#1B2A2D] p-2 rounded-full text-white hover:bg-blue-500"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-[#1B2A2D] p-2 rounded-full text-white hover:bg-blue-500"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-[#1B2A2D] p-2 rounded-full text-white hover:bg-blue-500"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-[#1B2A2D] p-2 rounded-full text-white hover:bg-blue-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2 - Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#">Landingpage</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Referral Program</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Themes</a>
            </li>
            <li>
              <a href="#">Illustrations</a>
            </li>
            <li>
              <a href="#">UI Kit</a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Column 5 - More */}
        <div>
          <h3 className="font-semibold mb-4">More</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">License</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Heart + Copyright */}
  <div className="mt-12 text-center">
        <div className="flex justify-center">
          <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg">
            <Heart className="w-6 h-6" />
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Copyright © 2021. Crafted with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// export default Footer;