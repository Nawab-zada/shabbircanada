import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={28} />,
    label: "Address",
    value: "Toronto, Canada",
    subtext: "Official Operations Support",
    link: "https://maps.google.com/?q=Toronto,Canada"
  },
  {
    icon: <FaPhoneAlt size={24} />,
    label: "Phone",
    value: "+1 (807) 697-3974",
    subtext: "Call or WhatsApp Anytime",
    link: "tel:+18076973974"
  },
  {
    icon: <FaWhatsapp size={28} />,
    label: "WhatsApp",
    value: "Chat With Us",
    subtext: "Quick Response Guaranteed",
    link: "https://wa.me/18076973974"
  },
];

export default function Contact() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[120px] py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-red-100 mb-3">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
          Contact <span className="text-red-600">Our Offices</span>
        </h2>
        <div className="bg-gradient-to-r from-red-500 to-red-400 h-1.5 w-24 rounded-full mt-4 mx-auto"></div>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Reach out to us through any of the channels below. We&apos;re here to help you with your Canada visa journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            target={info.label === "Address" || info.label === "WhatsApp" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2"
          >
            {/* Icon Circle */}
            <div className="bg-red-50 w-18 h-18 p-5 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <span className="group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </span>
            </div>

            {/* Labels & Details */}
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1.5">
              {info.label}
            </span>
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
              {info.value}
            </h3>
            <p className="text-sm text-gray-400">
              {info.subtext}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}