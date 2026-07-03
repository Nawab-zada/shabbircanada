import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaCheckCircle, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa'
const Aboutus = () => {
  const highlights = [
    { icon: <FaShieldAlt className="text-red-500" />, text: "Legally Compliant Process" },
    { icon: <FaGlobeAmericas className="text-red-500" />, text: "Multiple Sectors Covered" },
    { icon: <FaCheckCircle className="text-red-500" />, text: "1000+ Successful Applicants" },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-[120px] py-16 lg:py-20">
      {/* Contact Us Directly Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/30 border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-sm mb-16 text-center max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-green-100">
            💬 Quick Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Contact Us Directly
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
            Have questions or need quick assistance with your visa process? 
            Chat with our experts directly on WhatsApp for real-time support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/18076973974"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* About Visa Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-red-100">Our Focus</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-3 leading-tight">
              About Visa & <span className="text-red-600">Career Guidance</span>
            </h1>
            <div className="bg-gradient-to-r from-red-500 to-red-400 h-1.5 w-24 rounded-full mt-4"></div>
          </div>
          
          <div className="space-y-4 text-gray-600 leading-relaxed text-base">
            <p>
              At <span className="font-semibold text-gray-800">Canada Visa Apply</span>, we specialize in providing expert guidance for <span className="text-red-600 font-semibold">visa assessment</span> and <span className="text-red-600 font-semibold">citizenship applications</span>. Our dedicated team ensures a smooth and legally compliant process for individuals seeking opportunities in various essential sectors across Canada.
            </p>
            <p>
              Whether you have experience in skilled trades, customer service, transportation, or other in-demand professions, we are here to assist you every step of the way. Our goal is to simplify the application process and help you navigate the path to a successful career in Canada.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                {item.icon}
                <span className="text-xs font-semibold text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo/Graphic Area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative p-4 bg-gradient-to-br from-slate-50 to-white border border-gray-100 rounded-3xl shadow-sm max-w-sm w-full flex justify-center items-center group">
            <div className="absolute -inset-1 bg-gradient-to-br from-red-100/50 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image 
              src={'/logomohong.png'} 
              alt='Canada Visa Apply Official Logo' 
              width={350} 
              height={150}
              className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
