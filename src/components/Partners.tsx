import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import bbImg from '../assets/bancos/bb.svg';
import banrisulImg from '../assets/bancos/banrisul.svg';
import santanderImg from '../assets/bancos/santander.svg';
import itauImg from '../assets/bancos/itau.svg';
import c6Img from '../assets/bancos/c6.svg';
import picpayImg from '../assets/bancos/picpay.svg';
import safraImg from '../assets/bancos/safra.svg';
import bradescoImg from '../assets/bancos/bradesco.svg';
import caixaImg from '../assets/bancos/caixa.svg';
import bmgImg from '../assets/bancos/bmg.svg';
import panImg from '../assets/bancos/pan.png';
import daycovalImg from '../assets/bancos/daycoval.jpg';
import factaImg from '../assets/bancos/facta.jpg';
import inbursaImg from '../assets/bancos/inbursa.png';
import agibankImg from '../assets/bancos/agibank.png';
import cetelemImg from '../assets/bancos/cetelem.png';
import masterImg from '../assets/bancos/master.jpg';
import mercantilImg from '../assets/bancos/mercantil.svg';
import bvImg from '../assets/bancos/bv.svg';
import sicoobImg from '../assets/bancos/sicoob.svg';
import sicrediImg from '../assets/bancos/sicredi.svg';
import omniImg from '../assets/bancos/omni.svg';
import portoImg from '../assets/bancos/porto.png';
import interImg from '../assets/bancos/inter.svg';
import nubankImg from '../assets/bancos/nubank.svg';
import neonImg from '../assets/bancos/neon.jpg';
import originalImg from '../assets/bancos/original.svg';
import pineImg from '../assets/bancos/pine.svg';
import alfaImg from '../assets/bancos/alfa.jpg';
import btgImg from '../assets/bancos/btg.png';
import creditasImg from '../assets/bancos/creditas.jpg';
import semearImg from '../assets/bancos/semear.jpg';
import paranaImg from '../assets/bancos/parana.png';
import brbImg from '../assets/bancos/brb.svg';
import paulistaImg from '../assets/bancos/paulista.svg';
import votorantimImg from '../assets/bancos/votorantim.png';
import fin_alfaImg from '../assets/bancos/fin_alfa.png';
import nordesteImg from '../assets/bancos/nordeste.svg';
import amazoniaImg from '../assets/bancos/amazonia.svg';
import crefisaImg from '../assets/bancos/crefisa.jpg';
import via_certaImg from '../assets/bancos/via_certa.png';

const banks = [
  { name: 'BB', logo: bbImg },
  { name: 'Banrisul', logo: banrisulImg },
  { name: 'Santander', logo: santanderImg },
  { name: 'Itaú', logo: itauImg },
  { name: 'C6 Bank', logo: c6Img },
  { name: 'PicPay', logo: picpayImg },
  { name: 'Safra', logo: safraImg },
  { name: 'Bradesco', logo: bradescoImg },
  { name: 'Caixa', logo: caixaImg },
  { name: 'BMG', logo: bmgImg },
  { name: 'PAN', logo: panImg },
  { name: 'Daycoval', logo: daycovalImg },
  { name: 'Facta', logo: factaImg },
  { name: 'Inbursa', logo: inbursaImg },
  { name: 'Agibank', logo: agibankImg },
  { name: 'Cetelem', logo: cetelemImg },
  { name: 'Master', logo: masterImg },
  { name: 'Mercantil', logo: mercantilImg },
  { name: 'BV', logo: bvImg },
  { name: 'Sicoob', logo: sicoobImg },
  { name: 'Sicredi', logo: sicrediImg },
  { name: 'Omni', logo: omniImg },
  { name: 'Porto', logo: portoImg },
  { name: 'Inter', logo: interImg },
  { name: 'Nubank', logo: nubankImg },
  { name: 'Neon', logo: neonImg },
  { name: 'Original', logo: originalImg },
  { name: 'Pine', logo: pineImg },
  { name: 'Alfa', logo: alfaImg },
  { name: 'BTG', logo: btgImg },
  { name: 'Creditas', logo: creditasImg },
  { name: 'Semear', logo: semearImg },
  { name: 'Paraná', logo: paranaImg },
  { name: 'BRB', logo: brbImg },
  { name: 'Paulista', logo: paulistaImg },
  { name: 'Votorantim', logo: votorantimImg },
  { name: 'Fin. Alfa', logo: fin_alfaImg },
  { name: 'Nordeste', logo: nordesteImg },
  { name: 'Amazônia', logo: amazoniaImg },
  { name: 'Fin. BRB', logo: brbImg },
  { name: 'CREFISA', logo: crefisaImg },
  { name: 'Via Certa', logo: via_certaImg }
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
              {banks.map((bank, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-52 bg-white/60 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-secondary-dark shadow-md hover:shadow-lg"
                  >
                    <div className="w-24 h-14 md:w-28 md:h-16 rounded-xl border border-slate-200 dark:border-secondary-light/50 bg-white/60 dark:bg-white flex items-center justify-center text-primary-light transition-all duration-300 overflow-hidden shadow-sm">
                      {bank.logo ? (
                        <img loading="lazy" 
                          src={bank.logo} 
                          alt={bank.name} 
                          className="w-full h-full object-contain p-2 mix-blend-multiply dark:mix-blend-normal" 
                        />
                      ) : (
                        <Building2 size={32} />
                      )}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-lg transition-colors text-center w-full truncate px-2">{bank.name}</span>
                  </div>
              ))}
            </div>
            <div id="scroll-content-2" className="flex gap-6 pr-6">
              {banks.map((bank, index) => (
                  <div 
                    key={`clone-${index}`} 
                    className="flex-shrink-0 w-52 bg-white/60 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-secondary-dark shadow-md hover:shadow-lg"
                  >
                    <div className="w-24 h-14 md:w-28 md:h-16 rounded-xl border border-slate-200 dark:border-secondary-light/50 bg-white/60 dark:bg-white flex items-center justify-center text-primary-light transition-all duration-300 overflow-hidden shadow-sm">
                      {bank.logo ? (
                        <img loading="lazy" 
                          src={bank.logo} 
                          alt={bank.name} 
                          className="w-full h-full object-contain p-2 mix-blend-multiply dark:mix-blend-normal" 
                        />
                      ) : (
                        <Building2 size={32} />
                      )}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-lg transition-colors text-center w-full truncate px-2">{bank.name}</span>
                  </div>
              ))}
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
