import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

const banks = [
  { name: 'BB', logo: '/bancos-svg/banco-do-brasil-sem-fundo.svg?v=2' },
  { name: 'Banrisul', logo: '/bancos-svg/banrisul-logo-nome-2023.svg?v=2' },
  { name: 'Santander', logo: '/santander-1.jpg' },
  { name: 'Itaú', logo: '/bancos-svg/itau.svg?v=2' },
  { name: 'C6 Bank', logo: '/c6-1.jpg' },
  { name: 'PicPay', logo: '/bancos-svg/picpay.svg?v=2' },
  { name: 'Safra', logo: '/bancos-svg/logo-safra-nome.svg?v=2' },
  { name: 'Bradesco', logo: '/bancos-svg/bradesco.svg?v=2' },
  { name: 'Caixa', logo: '/bancos-svg/caixa-economica-federal-1.svg?v=2' },
  { name: 'BMG', logo: '/bancos-svg/bmg.svg?v=2' },
  { name: 'PAN', logo: '/bancos-svg/bancoPan-nome.svg?v=2' },
  { name: 'Daycoval', logo: '/bancos-svg/logo-Daycoval.svg?v=2' },
  { name: 'Facta', logo: '/facta-1.jpg' },
  { name: 'Inbursa', logo: '/inubrasa-1.png' },
  { name: 'Agibank', logo: '/agibank-1.png' },
  { name: 'Cetelem', logo: '/cetelem-2.png' },
  { name: 'Master', logo: '/master-1.jpg' },
  { name: 'Mercantil', logo: '/banco mercantil-1.png' },
  { name: 'BV', logo: '/bv-1.png' },
  { name: 'Sicoob', logo: '/sicoob-1.png' },
  { name: 'Sicredi', logo: '/sicredi-1.webp' },
  { name: 'Omni', logo: '/omni-2.png' },
  { name: 'Porto', logo: '/porto seguro-2.jpg' },
  { name: 'Inter', logo: '/inter-1.webp' },
  { name: 'Nubank', logo: '/nubank-1.png' },
  { name: 'Neon', logo: '/neon-1.png' },
  { name: 'Original', logo: '/original-1.webp' },
  { name: 'Pine', logo: '/pine-1.jpg' },
  { name: 'Alfa', logo: '/alfa-1.jpg' },
  { name: 'BTG', logo: '/btg-2.png' },
  { name: 'Creditas', logo: '/creditas-1.jpg' },
  { name: 'Semear', logo: '/semear-1.jpg' },
  { name: 'Paraná', logo: '/parana-1.png' },
  { name: 'BRB', logo: '/brb-1.png' },
  { name: 'Paulista', logo: '/paulista-2.png' },
  { name: 'Votorantim', logo: '/votarantim-2.png' },
  { name: 'Fin. Alfa', logo: '/alfa financeira.png' },
  { name: 'Nordeste', logo: '/nordeste-3.webp' },
  { name: 'Amazônia', logo: '/bancos-svg/banco-da-amazonia.svg?v=2' },
  { name: 'Fin. BRB', logo: '/brb-1.png' },
  { name: 'CREFISA', logo: '/crefisa-3.jpg' },
  { name: 'Via Certa', logo: '/via certa.jpg' }
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = performance.now();
    // Velocidade = 0.65 conforme solicitado
    const pixelsPerSecond = 0.65; 
    let accumulatedScroll = 0;

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered && el) {
        accumulatedScroll += (pixelsPerSecond * delta) / 1000;
        
        if (accumulatedScroll >= 1) {
          const pixelsToMove = Math.floor(accumulatedScroll);
          el.scrollLeft += pixelsToMove;
          accumulatedScroll -= pixelsToMove;
          
          const firstBlock = document.getElementById('scroll-content-1');
          if (firstBlock) {
            if (el.scrollLeft >= firstBlock.offsetWidth) {
              el.scrollLeft -= firstBlock.offsetWidth;
            }
          } else if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          }
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      if (el.scrollLeft <= 0) {
        const firstBlock = document.getElementById('scroll-content-1');
        if (firstBlock) {
          el.scrollLeft += firstBlock.offsetWidth;
        }
      }
      el.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-8 lg:p-14 relative overflow-hidden flex flex-col justify-center shadow-xl backdrop-blur-none lg:backdrop-blur-sm">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 z-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Bancos Parceiros</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Os <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">melhores</span> do mercado.
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-light max-w-sm leading-relaxed md:pb-2">
              Comparamos e filtramos as taxas em dezenas de instituições financeiras.
            </p>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={scrollLeftBtn} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-secondary-dark border border-slate-200 dark:border-secondary-light/50 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors hover:border-primary/50">
                <ChevronLeft size={20} />
              </button>
              <button onClick={scrollRightBtn} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-secondary-dark border border-slate-200 dark:border-secondary-light/50 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors hover:border-primary/50">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Wrapper with soft fade edges */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4 group">
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full items-center pb-4 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {/* Renderizar os bancos duas vezes em containers separados para cálculo perfeito do loop infinito */}
            <div id="scroll-content-1" className="flex gap-6 pr-6">
              {banks.map((bank, index) => {
                const isWhiteLogo = bank.logo.toLowerCase().includes('branco') || bank.logo.includes('bancoPan') || bank.logo.includes('white') || bank.logo.includes('logo_mercantil-nome-branco') || bank.logo.includes('stone-branco') || bank.logo.includes('banco-do-brasil') || bank.logo.includes('safra') || bank.logo.toLowerCase().includes('daycoval');
                const isBlackLogo = bank.logo.toLowerCase().includes('preto') || bank.logo.includes('c6') || bank.logo.includes('logo-sicred-preto');

                return (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-52 bg-white/60 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-secondary-dark shadow-md hover:shadow-lg"
                  >
                    <div className="w-24 h-14 md:w-28 md:h-16 rounded-xl border border-slate-200 dark:border-secondary-light/50 bg-white/60 dark:bg-secondary/50 flex items-center justify-center text-primary-light transition-all duration-300 overflow-hidden shadow-sm">
                      {bank.logo ? (
                        <img 
                          src={bank.logo} 
                          alt={bank.name} 
                          className={`w-full h-full object-contain p-2 ${
                            isBlackLogo 
                              ? 'dark:invert' 
                              : isWhiteLogo
                                ? 'brightness-0 dark:invert'
                                : ''
                          }`} 
                        />
                      ) : (
                        <Building2 size={32} />
                      )}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-lg transition-colors text-center w-full truncate px-2">{bank.name}</span>
                  </div>
                );
              })}
            </div>
            <div id="scroll-content-2" className="flex gap-6 pr-6">
              {banks.map((bank, index) => {
                const isWhiteLogo = bank.logo.toLowerCase().includes('branco') || bank.logo.includes('bancoPan') || bank.logo.includes('white') || bank.logo.includes('logo_mercantil-nome-branco') || bank.logo.includes('stone-branco') || bank.logo.includes('banco-do-brasil') || bank.logo.includes('safra') || bank.logo.toLowerCase().includes('daycoval');
                const isBlackLogo = bank.logo.toLowerCase().includes('preto') || bank.logo.includes('c6') || bank.logo.includes('logo-sicred-preto');

                return (
                  <div 
                    key={`clone-${index}`} 
                    className="flex-shrink-0 w-52 bg-white/60 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-secondary-dark shadow-md hover:shadow-lg"
                  >
                    <div className="w-24 h-14 md:w-28 md:h-16 rounded-xl border border-slate-200 dark:border-secondary-light/50 bg-white/60 dark:bg-secondary/50 flex items-center justify-center text-primary-light transition-all duration-300 overflow-hidden shadow-sm">
                      {bank.logo ? (
                        <img 
                          src={bank.logo} 
                          alt={bank.name} 
                          className={`w-full h-full object-contain p-2 ${
                            isBlackLogo 
                              ? 'dark:invert' 
                              : isWhiteLogo
                                ? 'brightness-0 dark:invert'
                                : ''
                          }`} 
                        />
                      ) : (
                        <Building2 size={32} />
                      )}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-lg transition-colors text-center w-full truncate px-2">{bank.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button onClick={scrollLeftBtn} className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-secondary-dark border border-slate-200 dark:border-secondary-light/50 text-slate-600 dark:text-slate-400 active:text-primary transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollRightBtn} className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-secondary-dark border border-slate-200 dark:border-secondary-light/50 text-slate-600 dark:text-slate-400 active:text-primary transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </motion.section>
  );
}
