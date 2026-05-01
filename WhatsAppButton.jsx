import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '../lib/settings';

const WhatsAppButton = () => {
  return (
    <a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      {/* نص يظهر عند تمرير الماوس (اختياري) */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out font-medium">
        خدمة العملاء
      </span>
      <FaWhatsapp size={30} />
      
      {/* تنبيه صغير لجذب الانتباه (Pulse Animation) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
    </a>
  );
};

export default WhatsAppButton;
