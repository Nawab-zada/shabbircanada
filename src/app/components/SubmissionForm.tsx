'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaSpinner, 
  FaCheckCircle, 
  FaCloudUploadAlt, 
  FaFileAlt, 
  FaTrashAlt, 
  FaEnvelope, 
  FaUser, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaExclamationCircle
} from 'react-icons/fa';

interface SubmissionFormProps {
  defaultJob?: string;
  isModal?: boolean;
  onClose?: () => void;
}

const LOCATIONS = [
  'Afghanistan',
  'India',
  'Nepal',
  'Bangladesh',
  'Pakistan',
  'Saudi Arab',
  'Qatar',
  'Kuwait',
  'Dubai',
  'Oman',
  'Malaysia',
  'Bahrain',
];
const VISAS = [
  'Driving',
  'Food Packing',
  'Security Guard',
  'Cashier',
  'Accounting',
  'Store Keeper',
  'Electrician',
  'Plumber',
  'Cooking',
];

export default function SubmissionForm({ defaultJob = '', isModal = false, onClose }: SubmissionFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Form fields state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [visa, setVisa] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  
  // Drag and drop state
  const [isDragging, setIsDragging] = useState(false);

  // Set default job if provided
  useEffect(() => {
    if (defaultJob && VISAS.includes(defaultJob)) {
      setVisa(defaultJob);
    } else if (defaultJob && defaultJob !== 'General Application') {
      // Find matching visa if not exact
      const matched = VISAS.find(v => v.toLowerCase() === defaultJob.toLowerCase());
      if (matched) setVisa(matched);
    }
  }, [defaultJob]);

  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndAddFiles(Array.from(e.dataTransfer.files));
    }
  };

  // Handle file select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndAddFiles(Array.from(e.target.files));
    }
  };

  // File validator (max 5MB, common doc types)
  const validateAndAddFiles = (selectedFiles: File[]) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const validFiles = selectedFiles.filter(f => {
      if (f.size > maxSize) {
        alert(`File ${f.name} exceeds the 5MB limit. It will not be uploaded.`);
        return false;
      }
      return true;
    });
    setFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('location', location);
    formData.append('visa', visa);
    formData.append('message', message);
    if (files.length > 0) {
      files.forEach((f) => {
        formData.append('files', f);
      });
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit application. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10 px-4 animate-in fade-in zoom-in duration-300">
        <FaCheckCircle className="text-green-500 mx-auto mb-5 animate-bounce" size={64} />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Received!</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-8 text-base">
          Thanks for the application, we will contact you soon...
        </p>
        {isModal && onClose ? (
          <button 
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Close Window
          </button>
        ) : (
          <button 
            onClick={() => {
              setStatus('idle');
              setName('');
              setPhone('');
              setEmail('');
              setLocation('');
              setVisa(defaultJob || '');
              setMessage('');
              setFiles([]);
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            Submit Another Application
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl animate-shake">
          <FaExclamationCircle className="flex-shrink-0" size={18} />
          <p className="text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      {/* Grid for Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FaUser className="text-gray-400" size={13} /> Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            required 
            placeholder="John Doe" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 placeholder-gray-400 bg-white transition-all outline-none"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FaEnvelope className="text-gray-400" size={13} /> Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            type="email" 
            required 
            placeholder="john@example.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 placeholder-gray-400 bg-white transition-all outline-none"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FaPhone className="text-gray-400" size={13} /> Phone Number <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel" 
            required 
            placeholder="+1 234 567 890" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 placeholder-gray-400 bg-white transition-all outline-none"
          />
        </div>

        {/* Location Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" size={13} /> Location / Country <span className="text-red-500">*</span>
          </label>
          <select 
            required 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 bg-white transition-all outline-none appearance-none cursor-pointer"
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
          >
            <option value="" disabled>Select your location</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Available Visas Dropdown */}
        <div className="space-y-1.5 md:col-span-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FaBriefcase className="text-gray-400" size={13} /> Available Visas <span className="text-red-500">*</span>
            </label>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 shadow-sm">
              Visa Selection fee $194
            </span>
          </div>
          <select 
            required 
            value={visa} 
            onChange={(e) => setVisa(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 bg-white transition-all outline-none appearance-none cursor-pointer"
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
          >
            <option value="" disabled>Select visa category</option>
            {VISAS.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message box */}
      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-gray-700">Message / Cover Letter (Optional)</label>
        <textarea 
          rows={3} 
          placeholder="Tell us about your work experience and why you are applying..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-gray-700 placeholder-gray-400 bg-white transition-all outline-none resize-y"
        />
      </div>

      {/* File Upload Section */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700">Upload Passport & Documents (Optional)</label>
        
        <div className="w-full">
          {/* Browse Files Button */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all flex flex-col items-center justify-center relative ${
              isDragging 
                ? 'border-red-500 bg-red-50/50 scale-[0.99]' 
                : 'border-gray-300 hover:border-red-500 hover:bg-slate-50/50'
            }`}
          >
            <input 
              type="file" 
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              multiple
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              title="Browse files"
            />
            <FaCloudUploadAlt className="text-gray-400 mb-2" size={28} />
            <p className="text-sm font-semibold text-gray-700">
              Browse Files or Drag & Drop
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, DOC, JPG, PNG (Max 5MB per file)
            </p>
          </div>
        </div>

        {/* Selected Files List */}
        {files.length > 0 && (
          <div className="space-y-2 mt-3">
            {files.map((f, index) => (
              <div key={index} className="flex items-center justify-between border border-gray-200 bg-slate-50 p-3 rounded-xl shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center gap-3 overflow-hidden">
                  <FaFileAlt className="text-red-500 flex-shrink-0" size={20} />
                  <div className="truncate">
                    <p className="text-sm font-bold text-gray-700 truncate">{f.name}</p>
                    <p className="text-xs text-gray-400">{(f.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors flex-shrink-0"
                  title="Remove file"
                >
                  <FaTrashAlt size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex justify-center items-center gap-2 hover:-translate-y-0.5"
      >
        {status === 'loading' ? (
          <>
            <FaSpinner className="animate-spin" size={18} />
            <span>Submitting Application...</span>
          </>
        ) : (
          <span>Submit Application</span>
        )}
      </button>
    </form>
  );
}
