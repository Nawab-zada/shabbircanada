import React from 'react'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

const Sardar = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[120px] py-16 lg:py-20">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Profile Details (Text Column) */}
        <div className="flex-1 space-y-6 order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-red-500/10 pointer-events-none">
              <FaQuoteLeft size={50} />
            </div>
            <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
              Sukhchain Singh
            </h2>
            <p className="text-red-600 font-medium mt-1">
              CEO & Visionary Leader, Canada Visa Apply
            </p>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-base">
            <p>
              Sukhchain Singh is the CEO and driving force behind Canada Visa Apply. Known for his professionalism, approachability, and unwavering commitment to integrity, he has guided many individuals through their transition to studying, working, and settling in Canada.
            </p>
            <p>
              With years of leadership experience and a deep understanding of standard visa assessment procedures, he plays a hands-on role in ensuring all applications meet the highest compliance standards, earning a reputation for reliability and success.
            </p>
            <p>
              Under his leadership, our platform serves as a trusted guide, helping aspiring students and skilled professionals connect with official pathways and real opportunities across Canada.
            </p>
          </div>
        </div>
        
        {/* Profile Image (Graphic Column) */}
        <div className="w-full lg:w-[380px] flex justify-center order-1 lg:order-2 flex-shrink-0">
          <div className="relative p-2 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm">
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[410px] rounded-2xl overflow-hidden shadow-inner">
              <Image 
                src={'/sukhchain.jpg'} 
                alt='Sukhchain Singh' 
                fill
                priority
                className='object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500'
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Sardar