'use client'

import { MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
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
  };

  const footerLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About Us', link: '#aboutus' },
    { name: 'Visa Categories', link: '#visacategories' },
    { name: 'Steps', link: '#steps' },
    { name: 'Contact Us', link: '#contactus' },
  ];

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-300">
      {/* Main Footer */}
      <div className="w-full py-16 px-4 sm:px-8 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* About Us Column (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-white text-lg font-bold tracking-wider uppercase">
              About Us
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Canada Visa Apply is a trusted immigration consultancy, offering
              expert guidance for Canada Immigration Visas. Our team has
              extensive experience in immigration visa and citizenship law,
              specializing in Skilled & Business Migration and study abroad
              opportunities.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200">
                <MapPin size={18} className="text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium">Toronto, Canada</span>
              </div>
              
              <a href="tel:+18076973974" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200">
                <Phone size={18} className="text-red-500 flex-shrink-0" />
                <span className="text-sm font-semibold hover:text-red-500 transition-colors">
                  +1 (807) 697-3974
                </span>
              </a>

              <a href="https://wa.me/18076973974" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200">
                <FaWhatsapp size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm font-semibold hover:text-green-500 transition-colors">
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>
          
          {/* Useful Links Column (Span 3) */}
          <div className="md:col-span-3 space-y-6 md:pl-6">
            <h2 className="text-white text-lg font-bold tracking-wider uppercase">
              Useful Links
            </h2>
            <nav>
              <ul className="space-y-3">
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      onClick={(e) => handleSmoothScroll(e, item.link)}
                      className="text-sm text-slate-400 hover:text-red-500 transition-colors duration-200 block cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* We're Available Column (Span 4) */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-white text-lg font-bold tracking-wider uppercase">
              We&apos;re Available
            </h2>
            <div className="space-y-2.5">
              {[
                { day: 'Monday', hours: '10 am - 6:30 pm' },
                { day: 'Tuesday', hours: '10 am - 6:30 pm' },
                { day: 'Wednesday', hours: '10 am - 6:30 pm' },
                { day: 'Thursday', hours: '10 am - 6:30 pm' },
                { day: 'Friday', hours: '10 am - 6:30 pm' },
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between border-b border-slate-800 pb-1.5 text-sm">
                  <span className="text-slate-400 font-medium">{schedule.day} :</span>
                  <span className="text-slate-300 font-medium">{schedule.hours}</span>
                </div>
              ))}
              <div className="flex justify-between pt-1 text-sm">
                <span className="text-slate-400 font-medium">Saturday | Sunday</span>
                <span className="text-red-500 font-semibold uppercase tracking-wider text-xs">Off</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-slate-950 text-slate-400 py-6 border-t border-slate-800/60 text-center relative px-6">
        <p className="text-xs sm:text-sm tracking-wide">
          © 2026, Canada-Visa-Apply. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;