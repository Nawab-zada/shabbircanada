import { FaCheckCircle, FaClipboardCheck, FaPassport } from 'react-icons/fa';

const data = [
  {
    step: "01",
    title: "Initial Selection",
    description: "Begin your journey with Eden Company by getting selected! You'll receive an official selection letter to get started on the process.",
    icon: <FaClipboardCheck className="text-3xl" />,
  },
  {
    step: "02",
    title: "Issuance of Letter",
    description: "Your selection letter will be issued, confirming your acceptance. This letter is your gateway to moving forward in the process.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    step: "03",
    title: "Visa Stamp & Entry",
    description: "Your journey to Canada becomes official with the visa stamp! You'll also undergo a medical checkup as part of the immigration process.",
    icon: <FaPassport className="text-3xl" />,
  },
];

export default function Features() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[120px] py-16 lg:py-20 bg-slate-50/50 rounded-3xl border border-gray-100 my-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">Path to Success</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
          Your Journey to Canada in 3 Steps
        </h2>
        <div className="bg-red-500 h-1.5 w-20 rounded-full mt-3 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
          >
            {/* Step Number Badge */}
            <div className="absolute top-6 right-8 text-6xl font-black text-gray-100 select-none group-hover:text-red-50 transition-colors duration-300">
              {item.step}
            </div>

            {/* Icon Circle */}
            <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
              <span className="group-hover:scale-110 transition-transform duration-300 text-red-600 group-hover:text-white">
                {item.icon}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
              Step {item.step}: {item.title}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed flex-grow">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
