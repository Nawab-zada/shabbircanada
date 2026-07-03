import React from 'react'
import { FaClock, FaGift, FaCheckCircle } from 'react-icons/fa'

export const Freevisa = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[120px] py-6 lg:mt-10">
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -translate-x-12 translate-y-12"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>

        {/* Content Details */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="bg-white/15 backdrop-blur-sm p-4 rounded-2xl shadow-inner border border-white/10">
            <FaGift size={28} className="text-yellow-300" />
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Free from Visa & Ticket Charges
            </h4>
            <p className="text-sm text-red-100 mt-1.5 flex items-center gap-2 justify-center sm:justify-start">
              <FaCheckCircle size={12} className="text-green-400" />
              Available for essential select sectors and skilled job packages.
            </p>
          </div>
        </div>

        {/* Highlight Badge */}
        <div className="relative z-10 bg-yellow-400 text-red-950 font-bold px-8 py-4 rounded-2xl shadow-lg flex items-center gap-3 hover:scale-105 transition-transform duration-200 text-sm sm:text-base">
          <FaClock size={18} className="text-red-950/80 animate-spin" style={{ animationDuration: '6s' }} />
          Processing: 2 Months
        </div>

      </div>
    </div>
  )
}
