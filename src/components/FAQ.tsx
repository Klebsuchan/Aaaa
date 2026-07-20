import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'A GTB cobra algum valor antecipado para liberar o empréstimo?',
    answer: 'Não! Nunca cobramos valores antecipados. Se alguém pedir depósito antecipado em nome da GTB ou de nossos parceiros, é golpe. A liberação do crédito é feita diretamente na sua conta após a aprovação.'
  },
  {
    question: 'Como funciona a Antecipação do Saque-Aniversário do FGTS?',
    answer: 'Você pode antecipar até 10 parcelas do seu saque-aniversário de forma digital. O desconto é feito anualmente direto no saldo do seu FGTS, não comprometendo sua renda mensal. O dinheiro cai na conta em minutos.'
  },
  {
    question: 'Estou negativado. Posso fazer um empréstimo?',
    answer: 'Sim! Modalidades como Empréstimo Consignado, Antecipação do FGTS e Empréstimo na Conta de Luz não consultam SPC/Serasa.'
  },
  {
    question: 'Quanto tempo demora para o dinheiro cair na conta?',
    answer: 'Depende da modalidade. A Antecipação do FGTS pode cair em até 30 minutos. O Consignado e Crédito na Conta de Luz costumam ser liberados em até 24h úteis após a aprovação final.'
  },
  {
    question: 'O que é o Crédito na Conta de Luz?',
    answer: 'É uma modalidade onde o pagamento das parcelas vem descontado mensalmente na sua fatura de energia elétrica. Muito prático para quem não possui conta bancária tradicional ou margem em outras linhas.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 md:p-8 lg:p-14 relative overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 backdrop-blur-none lg:backdrop-blur-sm shadow-xl">
        <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
           <HelpCircle size={240} />
        </div>
        
        <div className="lg:w-1/3 relative z-10 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Tire suas dúvidas</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Perguntas <br className="hidden lg:block"/>Frequentes.
          </h3>
          <p className="text-slate-700 dark:text-slate-300 font-light mb-10 max-w-sm leading-relaxed">
            Aqui estão as principais dúvidas dos nossos clientes sobre a liberação de crédito, prazos e taxas.
          </p>
        </div>

        <div className="lg:w-2/3 relative z-10 flex flex-col gap-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/60 dark:bg-secondary-dark/60 border border-slate-200 dark:border-secondary-light/30 rounded-2xl overflow-hidden cursor-pointer hover:border-primary/30 transition-colors shadow-md"
              onClick={() => toggleOpen(index)}
            >
              <div className="p-6 flex justify-between items-center bg-transparent">
                <h4 className="text-slate-900 dark:text-white font-semibold pr-4 text-left leading-relaxed">{faq.question}</h4>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-[#0a1422]' : 'bg-white/60 dark:bg-secondary text-primary-light'}`}>
                  {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
              
              <motion.div 
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 pb-6 text-slate-700 dark:text-slate-300 font-light text-base leading-relaxed border-t border-slate-200 dark:border-secondary-light/30 mt-2 mx-6">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
          </div>
          
          <div className="bg-gradient-to-br from-white dark:from-secondary-dark to-white dark:to-secondary border border-slate-200 dark:border-secondary-light/50 p-6 rounded-2xl shadow-inner mt-4">
             <div className="flex items-center gap-3 mb-3">
               <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                 <HelpCircle size={20} className="text-primary"/>
               </div>
               <span className="text-slate-900 dark:text-white font-bold tracking-wide">Ainda tem dúvidas?</span>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-light mb-5">Nossos especialistas respondem na hora.</p>
             <a href="https://wa.me/5554997013983?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20empr%C3%A9stimos." target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-[#0a1422] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary-light transition-colors shadow-md">
               Falar com Suporte
             </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
