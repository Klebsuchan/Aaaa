import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary to-primary-dark border border-primary-light/50 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="mb-10 md:mb-0 md:mr-10 flex-1 relative z-10">
          <div className="bg-white/60 dark:bg-secondary-dark/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-none lg:backdrop-blur-sm shadow-inner">
             <MessageCircle size={32} className="text-[#0a1422]" />
          </div>
          
          <h2 className="text-[#0a1422] text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 max-w-2xl">
            Simule direto no seu WhatsApp
          </h2>
          <p className="text-[#0a1422]/80 font-medium text-xl max-w-xl">
            Nossos consultores estão prontos para te atender sem robôs ou burocracia.
          </p>
        </div>
        
        <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end relative z-10">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5554997013983?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20GTB%20e%20gostaria%20de%20ajuda!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/60 dark:bg-secondary-dark text-slate-900 dark:text-white px-10 py-6 rounded-2xl font-bold text-xl hover:bg-slate-100 dark:bg-secondary-light transition-all shadow-xl"
          >
            INICIAR ATENDIMENTO
            <MessageCircle size={24} className="text-primary" />
          </motion.a>
          <p className="mt-4 text-[#0a1422]/70 font-bold text-sm text-center md:text-right">
            Atendimento Seg. a Sex.<br/> das 9h às 18h
          </p>
        </div>
      </motion.div>
    </section>
  );
}
