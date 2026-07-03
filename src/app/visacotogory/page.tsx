'use client'

import React, { useState } from "react";
import { 
  FaShieldAlt, FaBox, FaUtensils, FaTruck, FaCashRegister, FaCalculator, FaWrench, FaBolt, FaSearch, FaDollarSign, FaWhatsapp, FaWarehouse, FaCheckSquare
} from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion";
import PopupForm from "../components/PopupForm";

const features = [
  { title: "Security Guard", description: "Ensure safety and security at company premises.", salary: 2500, icon: <FaShieldAlt />, image: "/secrityguard.png" },
  { title: "Food Packing", description: "Pack and prepare food products for distribution.", salary: 3700, icon: <FaBox />, image: "/foodpacker.png" },
  { title: "Cooking", description: "Prepare and cook meals according to safety standards.", salary: 2700, icon: <FaUtensils />, image: "/cook.png" },
  { title: "Driving", description: "Transport goods and passengers safely to designated locations.", salary: 4000, icon: <FaTruck />, image: "/driver.png" },
  { title: "Cashier", description: "Handle financial transactions and customer payments.", salary: 2900, icon: <FaCashRegister />, image: "/cashier.png" },
  { title: "Accounting", description: "Manage financial records and transactions.", salary: 3400, icon: <FaCalculator />, image: "/accounting.png" },
  { title: "Store Keeper", description: "Manage inventory, receive shipments, and organize warehouse items.", salary: 2600, icon: <FaWarehouse />, image: "/storekeeper.png" },
  { title: "Plumber", description: "Install and repair piping systems.", salary: 2300, icon: <FaWrench />, image: "/plumber.png" },
  { title: "Electrician", description: "Install and maintain electrical systems.", salary: 3200, icon: <FaBolt />, image: "/electric.png" },
];

const FeatureCards = () => {
  const [search, setSearch] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const filteredFeatures = features.filter((feature) => 
    feature.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full py-16 lg:py-20 px-4 sm:px-8 lg:px-[120px] bg-gradient-to-b from-slate-50 to-white flex flex-col items-center">
      <div className="max-w-4xl text-center mb-10">
        <span className="inline-block bg-red-50 text-red-500 text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider border border-red-100 mb-4">Available Pathways</span>
        <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0f172a] tracking-tight mt-1 mb-8">
          Search <span className="text-[#e11d48]">Available Visas</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-2">
          <span className="bg-red-50/50 text-[#b91c1c] border border-red-100/80 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2">
            <FaCheckSquare className="text-[#10b981] text-base sm:text-lg" /> No Age Limit
          </span>
          <span className="bg-yellow-50/50 text-[#a16207] border border-yellow-100/80 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2">
            <FaCheckSquare className="text-[#10b981] text-base sm:text-lg" /> No Degree Required
          </span>
          <span className="bg-[#f0f9ff]/50 text-[#0369a1] border border-blue-100/80 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2">
            <FaCheckSquare className="text-[#10b981] text-base sm:text-lg" /> Without IELTS
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-16 relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e11d48] transition-colors">
          <FaSearch size={18} />
        </div>
        <input 
          type="text"
          placeholder="Search for a visa or role..."
          className="w-full pl-14 pr-6 py-4 sm:py-4 border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-400 text-gray-700 bg-white transition-all text-sm sm:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={feature.image || '/images/default.jpg'}
                  alt={`${feature.title} - Canada Work Visa`}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl text-red-600 shadow-sm">
                  {React.cloneElement(feature.icon, { size: 20 })}
                </div>
                {/* Salary Badge on Image */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1">
                  <FaDollarSign size={12} className="text-green-600" />
                  <span className="text-sm font-bold text-gray-800">{feature.salary}</span>
                  <span className="text-[10px] text-gray-400">/mo</span>
                </div>
              </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 tracking-tight group-hover:text-red-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  <button
                    onClick={() => {
                      setSelectedJob(feature.title);
                      setIsPopupOpen(true);
                    }}
                    className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    Apply Now
                  </button>
                </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-400 font-medium text-lg">No pathways found matching your search</p>
          </div>
        )}
      </div>

      <PopupForm 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        selectedJob={selectedJob} 
      />
    </div>
  );
};

export default FeatureCards;
