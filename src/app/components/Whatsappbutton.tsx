'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Slide in the CTA text box after 800ms
    const showTimer = setTimeout(() => {
      setIsTooltipVisible(true);
    }, 800);

    // Slide it back to the right after staying visible for 3 seconds (3.7s total)
    const hideTimer = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 4500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (isTooltipVisible) {
      setIsTooltipVisible(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/18076973974?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');

    // Reset form and hide it
    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsFormVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Animated Text Box / Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && !isFormVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="bg-white text-gray-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 whitespace-nowrap"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></span>
            Need Help? Chat with us
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={toggleForm}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-all flex-shrink-0"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Contact WhatsApp"
      >
        <motion.div
          animate={{ rotate: isFormVisible ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex items-center justify-center"
        >
          {isFormVisible ? (
            <FaTimes size={24} />
          ) : (
            <FaWhatsapp size={32} />
          )}
        </motion.div>
      </motion.button>

      {/* Form Popup */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute bottom-20 right-0 bg-white p-5 rounded-2xl shadow-2xl w-[calc(100vw-3rem)] sm:w-80 max-w-sm border border-slate-100 origin-bottom-right"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900 border-b border-slate-100 pb-2">Direct Support</h3>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-3.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              {[
                { type: "text", placeholder: "Your Name", value: formData.name, onChange: (e: any) => setFormData({...formData, name: e.target.value}) },
                { type: "tel", placeholder: "Phone Number", value: formData.phone, onChange: (e: any) => setFormData({...formData, phone: e.target.value}) },
                { type: "email", placeholder: "Email Address", value: formData.email, onChange: (e: any) => setFormData({...formData, email: e.target.value}) }
              ].map((input, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 bg-white"
                    required
                  />
                </motion.div>
              ))}
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <textarea
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 bg-white resize-none"
                  rows={3}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl transition-all text-sm font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp size={18} />
                <span>Start Chat</span>
              </motion.button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;