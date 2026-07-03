import React from 'react';
import { FaRegCheckSquare, FaRegClock, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function OurFocus() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Logo */}
        <div className="flex justify-center lg:justify-start w-full">
          <div className="relative w-full max-w-md aspect-[3/2] bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-8 hover:shadow-2xl transition-shadow">
            {/* We will use immigrationvisa.png as a placeholder for the ICCRC logo, or users can add their own ICCRC image */}
            <Image 
              src="/immigrationvisa.png" 
              alt="Immigration Consultants" 
              fill
              className="object-contain p-8"
            />
            {/* Fallback label just in case the image fails to load or as extra context */}
            <div className="absolute top-4 left-4 text-xs font-bold text-gray-300 pointer-events-none">
              ICCRC CERTIFIED
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="text-[#d32f2f] font-bold tracking-[0.15em] uppercase text-xs">Our Focus</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a2b4c] tracking-tight leading-[1.15] font-serif">
              Straightforward guidance<br />for visa and career planning
            </h2>
          </div>

          <div className="text-slate-500 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              We specialize in visa assessments and work-permit applications for people seeking employment across essential Canadian sectors — from skilled trades to transportation, hospitality, and customer service.
            </p>
            <p>
              Every applicant works directly with our team to understand which pathway fits their background, what documents are needed, and what to expect at each stage.
            </p>
          </div>

          <div className="space-y-5 pt-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#f7f5f2] p-2.5 rounded-lg flex-shrink-0 text-slate-700 mt-0.5">
                <FaRegCheckSquare size={18} />
              </div>
              <div>
                <h4 className="text-[#1a2b4c] font-bold text-sm">One-on-one assessment</h4>
                <p className="text-slate-500 text-[13px] mt-0.5">We review your background before recommending any pathway.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#f7f5f2] p-2.5 rounded-lg flex-shrink-0 text-slate-700 mt-0.5">
                <FaRegClock size={18} />
              </div>
              <div>
                <h4 className="text-[#1a2b4c] font-bold text-sm">Clear timelines</h4>
                <p className="text-slate-500 text-[13px] mt-0.5">You'll know what's happening at every stage of the process.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#f7f5f2] p-2.5 rounded-lg flex-shrink-0 text-slate-700 mt-0.5">
                <FaShieldAlt size={18} />
              </div>
              <div>
                <h4 className="text-[#1a2b4c] font-bold text-sm">Compliance-first</h4>
                <p className="text-slate-500 text-[13px] mt-0.5">Applications are prepared to meet official requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
