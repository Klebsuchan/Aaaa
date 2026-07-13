import { FileSearch, CheckCircle, HandCoins, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Smartphone,
    title: '1. Solicitação Simples',
    desc: 'Escolha a modalidade de crédito desejada e inicie a simulação direto pelo nosso WhatsApp.'
  },
  {
    icon: FileSearch,
    title: '2. Análise de Perfil',
    desc: 'Nossos corretores verificam instantaneamente as melhores ofertas em nossa rede de bancos parceiros.'
  },
  {
    icon: CheckCircle,
    title: '3. Aprovação Expressa',
    desc: 'Assinatura digital do contrato de forma rápida, tudo seguro e validado por biometria.'
  },
  {
    icon: HandCoins,
    title: '4. Dinheiro na Conta',
    desc: 'Após a formalização, o crédito é liberado direto na sua conta, muitas vezes em menos de 2 horas.'
  }
];

export default function Steps() {
  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-gradient-to-b from-white/40 dark:from-secondary/40 to-white/60 dark:to-secondary-dark/60 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-8 lg:p-16 text-center relative overflow-hidden shadow-2xl backdrop-blur-none lg:backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-white dark:via-secondary-dark/0 to-white dark:to-secondary-dark/0 pointer-events-none"></div>

        <div className="relative z-10 mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Como Funciona</h2>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse w-hidden"></span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Dinheiro rápido em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark">4 passos.</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 px-4">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-slate-100 dark:bg-secondary-light/50 z-0"></div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-white/60 dark:bg-secondary-dark/80 backdrop-blur-none lg:backdrop-blur-md border border-slate-200 dark:border-secondary-light flex items-center justify-center rounded-3xl mb-8 text-primary shadow-xl relative group-hover:scale-110 transition-transform duration-500">
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black text-[#0a1422] border-4 border-slate-300 dark:border-secondary-dark/80 shadow-md">
                     {i + 1}
                   </div>
                   <Icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{step.title}</h4>
                <p className="text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-[240px]">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  );
}
