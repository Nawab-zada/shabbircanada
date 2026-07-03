import React from 'react'
import { FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa'

const Scammer = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[120px] py-6">
      <div className="bg-red-50/50 border border-red-200 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row gap-6 items-start">
        
        {/* Warning Icon Container */}
        <div className="bg-red-500 text-white p-4 rounded-2xl shadow-md flex-shrink-0 animate-bounce">
          <FaExclamationTriangle size={32} />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs">Security Notice</span>
            <h2 className="text-2xl font-extrabold text-red-700 tracking-tight">
              Beware of Scammers Using My Name
            </h2>
            <div className="bg-red-500/20 h-1 w-20 rounded-full mt-1"></div>
          </div>

          <div className="text-gray-700 leading-relaxed text-base space-y-4 max-w-3xl">
            <p>
              Scammers are fraudulently using <span className="font-semibold text-gray-900">Sukhchain Singh’s</span> name to make false promises about Canada visas and job offers.
            </p>
            
            <div className="bg-white p-5 rounded-xl border border-red-100 space-y-3 shadow-inner">
              <p className="font-medium text-red-800 flex items-center gap-2 text-sm sm:text-base">
                <FaShieldAlt className="text-red-500 flex-shrink-0" />
                If anyone contacts you claiming to be him and asks for money, remember:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm sm:text-base">
                <li><span className="font-semibold text-gray-900">Sukhchain Singh</span> does not charge for visa services.</li>
                <li>Report any suspicious calls, WhatsApp messages, or SMS immediately.</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500">
              <strong className="text-gray-700">For legitimate inquiries:</strong> Visit our official website for verified contact details and services. Always verify through trusted channels to avoid scams.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Scammer;
