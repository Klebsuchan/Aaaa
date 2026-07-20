import { Phone, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content from jumping when the fixed navbar is present */}
      <div className="h-[120px] md:h-[180px] w-full invisible"></div>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-secondary-dark/95 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-secondary-light/30' : 'bg-white/80 dark:bg-secondary-dark/80 backdrop-blur-none border-b border-transparent dark:border-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16 md:h-20' : 'h-[120px] md:h-[180px]'}`}>
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                 src={isDark ? "/logogtb_white.png" : "/logogtb.png"} 
                 alt="GTB Logo" 
                 className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-20 md:h-32'}`}
              />
            </div>
            
            <div className={`hidden md:flex items-center space-x-10 transition-all duration-300`}>
              <a href="#quem-somos" className="text-slate-700 dark:text-slate-300 hover:text-primary-light font-semibold tracking-wide transition-colors text-sm">Quem Somos</a>
              <a href="#servicos" className="text-slate-700 dark:text-slate-300 hover:text-primary-light font-semibold tracking-wide transition-colors text-sm">Serviços</a>
              <a href="#vantagens" className="text-slate-700 dark:text-slate-300 hover:text-primary-light font-semibold tracking-wide transition-colors text-sm">Vantagens</a>
              <a href="#depoimentos" className="text-slate-700 dark:text-slate-300 hover:text-primary-light font-semibold tracking-wide transition-colors text-sm">Depoimentos</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-slate-200 dark:bg-secondary border border-slate-300 dark:border-secondary-light text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-secondary-light transition-all"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5554997013983?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20cr%C3%A9dito!"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full font-bold text-sm shadow-xl shadow-[#25D366]/20 hover:bg-[#128C7E] transition-all h-[44px] ${isScrolled ? 'px-4 sm:px-5' : 'px-6'}`}
              >
                <WhatsAppIcon size={16} />
                <span className="hidden sm:inline">Simular Agora</span>
                <span className="sm:hidden">Simular</span>
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
