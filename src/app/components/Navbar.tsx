'use client'

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import PopupForm from './PopupForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About Us', link: '#aboutus' },
    { name: 'Visa Categories', link: '#visacategories' },
    { name: 'Steps', link: '#steps' },
    { name: 'Contact Us', link: '#contactus' },
  ];

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (link === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = link.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-gray-200'
          : 'bg-white shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-[120px] h-20 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity group">
          <Image 
            src={'/thr.png'} 
            alt='Canada Visa Apply Logo' 
            width={120} 
            height={60} 
            className="object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={(e) => handleSmoothScroll(e, item.link)}
              className="relative text-gray-800 hover:text-red-600 font-semibold text-sm tracking-wide transition-colors duration-200 cursor-pointer group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          ))}
          {/* CTA Button */}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 text-sm animate-pulse-glow"
          >
            <FaPaperPlane size={14} />
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-900 hover:text-red-600 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden shadow-2xl flex flex-col`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <Image 
            src={'/thr.png'} 
            alt='Canada Visa Apply Logo' 
            width={90} 
            height={45} 
            className="object-contain" 
          />
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-red-600 focus:outline-none transition-colors p-1"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-6 flex-1">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={(e) => handleSmoothScroll(e, item.link)}
                className="text-gray-700 hover:text-red-600 hover:bg-red-50 text-base font-medium transition-all duration-200 cursor-pointer block px-4 py-3 rounded-xl"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile CTA */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsPopupOpen(true);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-base w-full transition-all"
            >
              <FaPaperPlane size={16} />
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* Submission Popup */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} selectedJob="General Application" />
    </nav>
  );
};

export default Navbar;