import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaStar, FaRegClock } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-800 py-20 px-6 text-white">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20">
          <FaStar className="text-yellow-400" size={14} />
          <span className="text-sm font-semibold tracking-wide">Trusted by 1000+ Applicants</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Your Dream Job in <br className="hidden sm:block" />Canada Starts Here!
        </h2>
        <p className="text-base sm:text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
          Secure your <span className="font-bold underline decoration-yellow-400 decoration-2 underline-offset-4">Work Visa</span> with our expert guidance. Take the first step toward a brighter future today!
        </p>

        {/* Dynamic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a
            href="https://wa.me/18076973974"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-gray-50 font-bold px-8 py-3 rounded-full transition-all duration-200 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <FaWhatsapp size={20} className="text-green-600" />
            Connect via WhatsApp
          </a>
          
          <a
            href="tel:+18076973974"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white/40 text-white font-bold px-8 py-3 rounded-full transition-all duration-200 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <FaPhoneAlt size={16} />
            Call +1 (807) 697-3974
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70 pt-2">
          <FaRegClock className="text-white/60" />
          <p>Available Monday to Friday, 10 AM – 6:30 PM (Canada Time)</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
