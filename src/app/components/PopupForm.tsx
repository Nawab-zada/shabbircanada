import React from 'react';
import { FaTimes } from 'react-icons/fa';
import SubmissionForm from './SubmissionForm';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob: string;
}

const PopupForm = ({ isOpen, onClose, selectedJob }: PopupFormProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm transition-all overflow-y-auto">
      {/* Modal Card with max height and flex container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] flex flex-col relative animate-in fade-in zoom-in duration-300">
        
        {/* Fixed Header with Close Button */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 border-b border-gray-100 flex justify-between items-start flex-shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Apply for Visa</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
              You are submitting an application for: <span className="font-bold text-red-600">{selectedJob}</span>
            </p>
          </div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 focus:outline-none rounded-full hover:bg-gray-100 transition-all duration-200"
            aria-label="Close"
          >
            <FaTimes size={18} className="sm:w-[20px] sm:h-[20px]" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-grow overflow-y-auto p-5 sm:p-8 md:p-10">
          <SubmissionForm defaultJob={selectedJob} isModal={true} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
