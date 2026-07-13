import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
    const testimonials = [
    {
      id: 1,
      name: "Mariana C.",
      role: "Neta de Aposentado",
      image: "https://i.pravatar.cc/150?img=5",
      content: "Contratei o consignado INSS para o meu avô e o atendimento do Bernardo foi excepcional. Ele nos auxiliou em cada etapa, desde o desbloqueio do benefício até o dinheiro cair na conta, explicando tudo de forma muito clara. A GTB mostrou uma agilidade impressionante no processo. Serviço técnico, rápido e de total confiança. Recomendo muito!",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos E.",
      role: "Empreendedor",
      image: "https://i.pravatar.cc/150?img=11",
      content: "O Arthur Tolloti e o pessoal da GTB me ajudaram muito no empréstimo da firma. O Arthur Tolloti revirou tudo até achar os juros mais baratos para mim e resolveu tudo rapidinho. Sem enrolação, direto e valeu muito a pena financeiramente.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ricardo M.",
      role: "Cliente Refinanciamento",
      image: "https://i.pravatar.cc/150?img=8",
      content: "Se você tá zerado de grana e tem carro quitado, corre na GTB. Eu estava desesperado e eles me mostraram que dava para conseguir juro baixo usando o carro. O processo foi tão bom que saí com mais dinheiro no bolso do que eu fui buscar.",
      rating: 5,
    }
  ];

  return (
    <section id="depoimentos" className="w-full">
      <div className="bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-14 relative overflow-hidden backdrop-blur-none lg:backdrop-blur-sm shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl md:blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-dark dark:text-primary-light uppercase">Histórias Reais</h2>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Mais que crédito, <span className="text-primary-dark dark:text-primary-light">transformação de vidas.</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-light">
            Veja como ajudamos pessoas reais a superarem desafios e alcançarem seus sonhos nos momentos em que mais precisavam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={t.id}
              className="bg-white/60 dark:bg-secondary-dark/60 border border-slate-200 dark:border-secondary-light/30 rounded-3xl p-8 relative group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-primary/30 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-secondary-light/30 pt-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
