import { ShieldCheck, Lock, FileKey } from 'lucide-react';
import { motion } from 'motion/react';

const guarantees = [
  {
    icon: Lock,
    title: 'Criptografia de Ponta (SSL)',
    desc: 'Seus dados são protegidos por criptografia de última geração em todas as etapas da simulação.',
  },
  {
    icon: FileKey,
    title: 'Conformidade com a LGPD',
    desc: 'Tratamos suas informações com total transparência e rigoroso cumprimento da Lei Geral de Proteção de Dados.',
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente 100% Seguro',
    desc: 'Nossos sistemas contam com múltiplas camadas de segurança para garantir sigilo total e privacidade.',
  }
];

export default function Security() {
  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-8 lg:p-14 overflow-hidden relative backdrop-blur-none lg:backdrop-blur-sm">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Segurança e Privacidade</h2>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Seus dados estão <span className="text-primary-light">blindados</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 font-light max-w-xl mx-auto">
            A proteção das suas informações pessoais e financeiras é a nossa maior prioridade. Utilizamos as tecnologias mais avançadas do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/60 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 p-8 rounded-[1.5rem] flex flex-col items-center text-center hover:-translate-y-1 transition-transform shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-secondary flex items-center justify-center border border-slate-200 dark:border-secondary-light/50 mb-6 shadow-md shadow-primary/5">
                <g.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{g.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
