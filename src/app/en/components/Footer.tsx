"use client";

import Image from "next/image";
import { 
  FaTelegram, 
  FaInstagram, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope // <- FaMapMarkerAlt removed
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Noise + Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/bg/noise.png')] bg-repeat opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-700 opacity-95"></div>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        
        {/* Logo + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 text-2xl"> {/* <- space-x-6 replaced with gap-6 */}
            <a href="https://t.me/Dreamigration" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaTelegram/>
            </a>
            <a href="https://instagram.com/dreamigration" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaInstagram/>
            </a>
            <a href="https://wa.me/16042239900" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaWhatsapp/>
            </a>
          </div>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-sm">
          
          {/* Important Pages */}
          <div>
            <h4 className="font-bold text-lg mb-4">Important Pages</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-200">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-200">About Us</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">USA</a></li>
              <li><a href="#" className="hover:text-gray-200">Canada</a></li>
              <li><a href="#" className="hover:text-gray-200">Dubai</a></li>
              <li><a href="#" className="hover:text-gray-200">UK</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">

              {/* Email */}
              <li className="flex items-center gap-2">
                <FaEnvelope/> 
                <a href="mailto:info@info.com" className="hover:underline">Dejavuvisa1@gmail.com</a>
              </li>

              {/* Vancouver Office */}
              <li className="flex items-center gap-3">
                <span>Vancouver Office 🇨🇦</span>
                <a href="tel:+16042239900" className="hover:underline flex items-center gap-1">
                  <FaPhone/> +1 604 223 9900
                </a>
                <a href="https://wa.me/16042239900" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  <FaWhatsapp/>
                </a>
              </li>

              {/* Los Angeles Office */}
              <li className="flex items-center gap-3">
                <span>Los Angeles Office 🇺🇸</span>
                <a href="tel:+13237709994" className="hover:underline flex items-center gap-1">
                  <FaPhone/> +1 323 770 9994
                </a>
                <a href="https://wa.me/13237709994" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  <FaWhatsapp/>
                </a>
              </li>

              {/* Dubai Office */}
              <li className="flex items-center gap-3">
                <span>Dubai Office 🇦🇪</span>
                <a href="tel:+971506390560" className="hover:underline flex items-center gap-1">
                  <FaPhone/> +971 50 639 0560
                </a>
                <a href="https://wa.me/971506390560" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  <FaWhatsapp/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-xs text-gray-200">
          © All rights reserved | Deja Vu Holding
        </div>
      </div>
    </footer>
  );
}