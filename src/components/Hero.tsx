import { ArrowRight, ShieldCheck, Clock, Percent } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useState } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    whatsapp: '',
    value: '10000',
    installments: '36'
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de fazer uma simulação de crédito.
    
*Dados informados:*
Nome: ${formData.name}
E-mail: ${formData.email}
CPF: ${formData.cpf}
WhatsApp: ${formData.whatsapp}
Valor Desejado: R$ ${parseInt(formData.value || "0").toLocaleString('pt-BR')}
Parcelas: ${formData.installments}x`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5554997013983?text=${encodedText}`, '_blank');
  };

  return (
    <section ref={ref} className="relative w-full pt-4 md:pt-8 overflow-hidden rounded-3xl md:rounded-[2rem] border border-slate-200 dark:border-secondary-light/30">
      <div className="absolute inset-0 z-0">
        <motion.video 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/crie_um_video_que_pode_ser_usa.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/40 dark:from-secondary-dark/95 dark:via-secondary-dark/80 dark:to-secondary-dark/40"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        
        <motion.div 
          style={{ opacity: opacityText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 lg:col-span-8 p-6 sm:p-8 lg:p-14 flex flex-col justify-center relative"
        >
          {/* Video Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-80"
            >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 dark:from-secondary-dark/95 dark:via-secondary-dark/80 dark:to-secondary-dark/40 backdrop-blur-[2px]"></div>
          </div>

          {/* Parallax Background Layer */}
          <div className="absolute -inset-20 z-0 overflow-hidden pointer-events-none hidden md:block">
            {/* Soft background gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 dark:bg-primary/10 rounded-full blur-2xl md:blur-3xl opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 dark:bg-primary/10 rounded-full blur-2xl md:blur-3xl opacity-60"></div>
            
            {/* Parallax elements */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]), rotate: 5 }}
              className="absolute top-[15%] right-[15%] text-primary/40 dark:text-primary/20 drop-shadow-xl"
            >
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]), x: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
              className="absolute top-[30%] left-[8%] text-primary/30 dark:text-primary/15 drop-shadow-lg"
            >
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]), rotate: -15 }}
              className="absolute bottom-[10%] right-[25%] text-primary/30 dark:text-primary/20 drop-shadow-xl"
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </motion.div>
            </motion.div>
            
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), rotate: 10 }}
              className="absolute top-[60%] right-[8%] text-primary/40 dark:text-primary/25 drop-shadow-lg"
            >
              <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]), rotate: -5 }}
              className="absolute top-[80%] left-[20%] text-primary/20 dark:text-primary/10 drop-shadow-md"
            >
               <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                 <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
               </motion.div>
            </motion.div>
          </div>

            <div className="flex flex-col gap-6 lg:gap-8 relative z-10 text-center lg:text-left">
            <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light backdrop-blur-none lg:backdrop-blur-md text-xs sm:text-sm font-semibold w-fit text-primary-light shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(184,134,11,0.8)]"></span>
              Agência de crédito regulamentada
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Transforme seus planos em <br className="hidden lg:block" />
              <span className="text-primary-dark dark:text-primary drop-shadow-sm">
                realidade hoje.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              As melhores taxas do mercado para crédito pessoal, consignado e financiamento com aprovação rápida.
            </p>
            
            <div className="pt-4 sm:pt-6 pb-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5554997013983?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20cr%C3%A9dito!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-primary text-[#0a1422] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl hover:bg-primary-light border border-white/50 dark:border-black/20 transition-all"
              >
                Falar pelo WhatsApp
                <ArrowRight size={20} />
              </motion.a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6 mt-4 border-t border-slate-200 dark:border-secondary-light/30 bg-white/40 dark:bg-black/20 p-5 rounded-3xl backdrop-blur-none lg:backdrop-blur-sm shadow-sm text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/60 dark:bg-secondary-dark border border-slate-200 dark:border-secondary-light flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={18} className="text-primary-light" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Aprovação <br className="hidden sm:block"/>em até 24h</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/60 dark:bg-secondary-dark border border-slate-200 dark:border-secondary-light flex items-center justify-center shrink-0 shadow-sm">
                  <Percent size={18} className="text-primary-light" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Taxas reais <br className="hidden sm:block"/>e justas</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 col-span-2 md:col-span-1 border-t md:border-t-0 border-slate-200 dark:border-secondary-light/30 pt-4 md:pt-0 mt-2 md:mt-0">
                <div className="w-10 h-10 rounded-full bg-white/60 dark:bg-secondary-dark border border-slate-200 dark:border-secondary-light flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck size={18} className="text-primary-light" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Processo <br className="hidden sm:block"/>100% seguro</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="col-span-1 lg:col-span-4 flex flex-col"
        >
          {/* Abstract financial card graphic */}
          <div className="bg-gradient-to-b from-white dark:from-secondary to-white dark:to-secondary-dark border border-slate-200 dark:border-secondary-light/50 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 h-full flex flex-col relative shadow-2xl">
            <div className="mb-6 relative z-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Simulação Expressa</p>
              <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
            </div>
            
            {!isFormOpen ? (
              <div className="space-y-6 flex-1 flex flex-col justify-center relative z-10 mx-auto w-full max-w-[320px]">
                
                {/* Interactive Slider for Loan Amount */}
                <div className="bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl p-5 backdrop-blur-none lg:backdrop-blur-md">
                  <div className="flex justify-between items-end mb-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Valor desejado</p>
                    <p className="font-black text-2xl text-slate-900 dark:text-white tracking-tight">R$ {parseInt(formData.value || "10000").toLocaleString('pt-BR')}</p>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="500"
                    value={formData.value || "10000"} 
                    onChange={(e) => setFormData({...formData, value: e.target.value})}
                    className="w-full h-2 bg-slate-200 dark:bg-secondary-light rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium">
                    <span>R$ 1.000</span>
                    <span>R$ 50.000</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl p-5 backdrop-blur-none lg:backdrop-blur-md flex flex-col justify-between">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-2">Parcelas</p>
                    <select 
                      className="bg-transparent font-bold text-xl text-slate-900 dark:text-white focus:outline-none appearance-none cursor-pointer w-full"
                      value={formData.installments}
                      onChange={(e) => setFormData({...formData, installments: e.target.value})}
                    >
                      <option value="12" className="text-black">12x</option>
                      <option value="24" className="text-black">24x</option>
                      <option value="36" className="text-black">36x</option>
                      <option value="48" className="text-black">48x</option>
                      <option value="60" className="text-black">60x</option>
                    </select>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-secondary-dark/80 border border-primary/30 rounded-2xl p-5 backdrop-blur-none lg:backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-2 relative z-10">Parcela Est.</p>
                    <p className="font-bold text-xl text-primary-dark dark:text-primary-light relative z-10">
                      R$ {Math.round((parseInt(formData.value || "10000") * 1.3) / parseInt(formData.installments || "36")).toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="mt-2 block w-full text-center py-4 bg-primary text-white hover:bg-primary-dark transition-colors rounded-2xl font-bold text-lg shadow-xl shadow-primary/20"
                >
                  Solicitar Agora
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-3 flex-1 flex flex-col justify-center relative z-10 mx-auto w-full max-w-[280px]">
                <input
                  required
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  required
                  type="text"
                  placeholder="CPF"
                  value={formData.cpf}
                  onChange={e => setFormData({...formData, cpf: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  required
                  type="tel"
                  placeholder="WhatsApp"
                  value={formData.whatsapp}
                  onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 mb-2">
                  <p className="text-xs text-primary-dark dark:text-primary-light font-medium text-center">
                    Valor selecionado: <strong className="text-sm">R$ {parseInt(formData.value || "10000").toLocaleString('pt-BR')}</strong>
                  </p>
                </div>
                <button 
                  type="submit"
                  className="mt-2 block w-full text-center py-3 bg-primary text-white hover:bg-primary-dark transition-colors rounded-xl font-bold text-base shadow-lg shadow-primary/20"
                >
                  Enviar via WhatsApp
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsFormOpen(false)} 
                  className="block w-full text-center py-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors text-sm font-medium"
                >
                  Voltar para simulação
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
