import { motion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const wppLink = "https://wa.me/5554997013983?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20cr%C3%A9dito!";

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={wppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors border-2 border-white/20"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      <WhatsAppIcon size={32} className="relative z-10" />
    </motion.a>
  );
}
