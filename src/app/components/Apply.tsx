'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import PopupForm from './PopupForm';

const Banner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="w-full bg-slate-100 px-4 sm:px-8 lg:px-[120px] py-4 sm:py-[24px] flex justify-center">
      <div 
        className="relative w-full lg:w-auto overflow-hidden rounded-2xl sm:rounded-[32px] shadow-2xl group cursor-pointer"
        onClick={() => setIsPopupOpen(true)}
      >
        {/* Responsive Banner Image (No Cropping) */}
        <div className="w-full flex justify-center">
          <Image
            src="/new-hero-banner.png"
            alt="Canada Work Visa 2026 - Apply Now"
            width={1440}
            height={805}
            priority
            className="w-full h-auto lg:w-auto lg:max-h-[calc(100vh-140px)] object-contain group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-[1%] left-[4%] sm:bottom-[2%] sm:left-[5%] md:bottom-[3%] md:left-[7%] lg:bottom-[3%] lg:left-[7%] flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 z-10 pointer-events-none items-start">
          <div className="bg-slate-50/95 backdrop-blur-md border border-white/40 shadow-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
            <FaCheckCircle className="text-[#10b981] text-sm sm:text-base" />
            <span className="text-[#1e293b] font-semibold text-[10px] sm:text-xs md:text-sm tracking-wide">No IELTS Required</span>
          </div>
          <div className="bg-slate-50/95 backdrop-blur-md border border-white/40 shadow-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
            <FaCheckCircle className="text-[#10b981] text-sm sm:text-base" />
            <span className="text-[#1e293b] font-semibold text-[10px] sm:text-xs md:text-sm tracking-wide">Free Visa & Ticket</span>
          </div>
        </div>


      </div>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} selectedJob="General Application" />
    </div>
  );
};

export default Banner;
