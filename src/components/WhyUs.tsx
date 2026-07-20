import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  'Taxas justas e condições personalizadas para o seu perfil.',
  'Processo 100% digital, sem burocracia desnecessária.',
  'Atendimento humano e especialista diretamente pelo WhatsApp.',
  'Aprovação ágil, com dinheiro na conta no mesmo dia para soluções pré-aprovadas.',
  'Segurança total com seus dados durante todo o processo.',
  'Amplo portfólio de parceiros para garantir a melhor oferta.'
];

export default function WhyUs() {
  return (
    <section id="vantagens" className="w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-5 bg-gradient-to-br from-white dark:from-secondary to-white dark:to-secondary-dark border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 lg:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl"
          >
             <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
             
             {/* Decorative Pattern / Abstract representation of trusting a human advisor */}
             <div className="w-full max-w-sm aspect-square border border-slate-200 dark:border-secondary-light/30 rounded-3xl flex flex-col items-center justify-center p-8 bg-white/60 dark:bg-secondary-dark/60 backdrop-blur-none lg:backdrop-blur-md z-10 shadow-inner group">
                <div className="w-24 h-24 mb-10 relative">
                  <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-secondary-light"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-t-primary border-r-primary border-b-transparent border-l-transparent group-hover:rotate-180 transition-transform duration-1000"></div>
                  <div className="absolute inset-2 rounded-full bg-white/60 dark:bg-secondary shadow-inner flex items-center justify-center font-bold text-slate-900 dark:text-white text-xl tracking-wider">
                    <img src="/logogtb.png" alt="GTB" className="w-12 h-12 object-contain dark:hidden" />
                  <img src="/logogtb_white.png" alt="GTB" className="w-12 h-12 object-contain hidden dark:block" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Simulação Ágil</h4>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-light">Nossos especialistas analisam <br/> o melhor cenário para você</p>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-7 bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 md:p-8 lg:p-14 flex flex-col justify-center backdrop-blur-none lg:backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Por que a GTB?</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white max-w-xl leading-tight">
              Transparência e agilidade na medida certa.
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Sabemos que quando você precisa de crédito, agilidade é fundamental. Por isso, simplificamos nossos processos para que você receba atendimento direto, via WhatsApp.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 p-2">
                  <CheckCircle2 className="flex-shrink-0 text-primary mt-0.5" size={24} />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-base leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div>
              <a 
                 href="https://wa.me/5554997013983?text=Ol%C3%A1%2C%20quais%20s%C3%A3o%20as%20vantagens%20para%20o%20meu%20perfil%3F"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-10 py-4 sm:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 rounded-2xl font-bold text-base sm:text-lg transition-colors shadow-xl"
              >
                Falar com Consultor
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
