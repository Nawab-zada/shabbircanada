import React from 'react';
import SubmissionForm from '../components/SubmissionForm';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ApplyPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const defaultJob = typeof resolvedParams.job === 'string' ? resolvedParams.job : '';

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden animate-scaleIn">
        {/* Banner area */}
        <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-8 sm:p-10">
          {/* Background decoration elements */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-black/10 rounded-full blur-2xl -translate-x-12 translate-y-12"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-red-100 hover:text-white font-semibold text-xs uppercase tracking-wider mb-6 transition-all duration-200 hover:-translate-x-1"
            >
              <FaArrowLeft size={11} /> Back to Home
            </Link>
            
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Canada Visa Application
            </h1>
            <p className="text-red-100 mt-2 text-sm sm:text-base max-w-lg leading-relaxed">
              Complete your application below. Uploading a copy of your passport and documents helps expedite your response time.
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              <span className="bg-white/15 backdrop-blur-sm text-yellow-300 border border-white/10 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <FaCheckCircle size={10} /> Free Visa & Ticket
              </span>
              <span className="bg-white/15 backdrop-blur-sm text-white border border-white/10 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <FaCheckCircle size={10} /> 2 Months Processing
              </span>
            </div>
          </div>
        </div>
        
        {/* Form container */}
        <div className="p-6 sm:p-10 bg-white">
          <SubmissionForm defaultJob={defaultJob} />
        </div>
      </div>
    </div>
  );
}
