import { Wallet, Car, Landmark, HandCoins, Lightbulb, RefreshCcw, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Wallet,
    title: 'Crédito Pessoal',
    description: 'Dinheiro rápido no boleto ou carnê, com ou sem garantia. Ideal para resolver imprevistos.'
  },
  {
    icon: Landmark,
    title: 'Consignado INSS',
    description: 'Menores taxas do mercado. Exclusivo para aposentados e pensionistas do INSS com desconto em folha.'
  },
  {
    icon: RefreshCcw,
    title: 'Portabilidade e Refin.',
    description: 'Traga seu empréstimo de outro banco para nós, reduza sua parcela ou libere um novo troco.'
  },
  {
    icon: CreditCard,
    title: 'Consignado CLT',
    description: 'Empréstimo com desconto direto na folha de pagamento para trabalhadores com carteira assinada.'
  },
  {
    icon: Car,
    title: 'Refinanciamento',
    description: 'Use seu carro ou moto quitado como garantia e consiga crédito com juros menores.'
  }
];

export default function Features() {
  return (
    <motion.section 
      id="servicos" 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Features Header Card */}
      <div className="bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between mb-6 shadow-lg backdrop-blur-none lg:backdrop-blur-sm">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Soluções Financeiras</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Mais dinheiro, <br className="hidden md:block" /> menos complicação.
          </h3>
        </div>
        <div className="flex flex-col gap-4 bg-white/60 dark:bg-secondary-dark/50 p-6 rounded-2xl border border-slate-200 dark:border-secondary-light/20 w-full md:w-auto">
           <span className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300"><Wallet className="w-5 h-5 mr-3 text-primary-light"/> Atendimento humanizado</span>
           <span className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300"><Landmark className="w-5 h-5 mr-3 text-primary-light"/> Correspondente Autorizado</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const msg = encodeURIComponent(`Olá, vim do site e gostaria de simular: ${service.title}`);
          const wppLink = `https://wa.me/5554997013983?text=${msg}`;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 dark:bg-secondary border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-slate-100 dark:bg-secondary-light/20 transition-all duration-300 group relative shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-primary-light mb-8 bg-white/60 dark:bg-secondary-dark/80 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-secondary-light shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Icon size={28} className="text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h4>
              </div>
              <div className="mt-4 flex flex-col gap-8 relative z-10">
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-base font-light">
                   {service.description}
                 </p>
                 <a 
                   href={wppLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-auto block w-full text-center py-4 bg-white/60 dark:bg-secondary-dark text-slate-800 dark:text-slate-200 font-bold rounded-xl border border-slate-200 dark:border-secondary-light group-hover:bg-primary group-hover:text-[#0a1422] group-hover:border-primary transition-all duration-300"
                 >
                   Simular {service.title}
                 </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  );
}
