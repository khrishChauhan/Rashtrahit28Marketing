import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "917290873707";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
