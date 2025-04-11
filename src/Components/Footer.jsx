import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import logo from '../assets/inaya-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* প্রতিষ্ঠান সম্পর্কে */}
        <div>
          <div className="mb-4">
            <img src={logo} className="w-16" alt="Inaya's logo" />
          </div>
          <h3 className="text-lg font-bold mb-4">INAYA'S ACADEMIC & ADMISSION CARE</h3>
          <p className="text-sm leading-relaxed">
            ঠিকানা: চামেলীবাগ ২নং রোড, মেজরটিলা, সিলেট<br />
            মোবাইল:{" "}
            <a href="tel:+8801950268591" className="underline">01950-268591</a>,{" "}
            <a href="tel:+8801941241930" className="underline">01941-241930</a>
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">গুরুত্বপূর্ণ লিঙ্ক</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">হোম</Link></li>
            <li><Link to="/courses" className="hover:underline">কোর্সসমূহ</Link></li>
            <li><Link to="/form" className="hover:underline">যোগাযোগ</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow us:</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/share/16Tmrg2NT9/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.youtube.com/@InayasAcademicAdmissionCare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaYoutube size={24} />
            </a>
           
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-300 border-t border-blue-700 pt-5">
        © {new Date().getFullYear()} INAYA'S ACADEMIC & ADMISSION CARE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
