import { Building, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    icon: Building,
    title: 'Nossa História',
    desc: 'Com anos de experiência no mercado financeiro, a GTB nasceu do desejo de desburocratizar o acesso ao crédito, conectando clientes às melhores oportunidades com transparência e agilidade.'
  },
  {
    icon: Users,
    title: 'Nossa Equipe',
    desc: 'Contamos com especialistas dedicados que analisam o seu perfil de forma individual. Nosso atendimento humano garante que você terá suporte em todas as etapas.'
  },
  {
    icon: Target,
    title: 'Nossa Missão',
    desc: 'Viabilizar os projetos e sonhos dos nossos clientes por meio de soluções financeiras inteligentes e taxas competitivas no mercado.'
  }
];


const partners = [
  {
    name: 'Bernardo Bonfante',
    role: 'Sócio Fundador',
    photo: '/bernardo.jpeg',
    imagePosition: 'object-[center_15%]',
    description: 'Especialista em crédito e planejamento previdenciário, com 6 anos de experiência no mercado financeiro. Dedicado a simplificar o acesso a recursos e estruturar as melhores soluções para cada cliente.'
  },
  {
    name: 'Arthur Tolotti',
    role: 'Sócio Fundador',
    photo: '/arthur.jpeg',
    imagePosition: 'object-top',
    description: 'Especialista em soluções de crédito e mercado financeiro. Com ampla experiência em ajudar clientes a encontrar as melhores taxas e condições para seus projetos.'
  }
];

export default function AboutUs() {
  return (
    <motion.section 
      id="quem-somos" 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 lg:p-14 overflow-hidden relative backdrop-blur-none lg:backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Quem Somos</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
              A ponte para os seus<br/>
              <span className="text-primary-light">objetivos financeiros.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light">
              Na GTB, acreditamos que encontrar o crédito ideal não precisa ser complicado. Somos correspondentes bancários autorizados, trabalhando ao lado dos maiores bancos do Brasil para oferecer segurança e soluções personalizadas para você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 p-8 rounded-[1.5rem] flex flex-col items-start hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-secondary flex items-center justify-center border border-slate-200 dark:border-secondary-light/50 mb-6 shadow-sm">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{v.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      
        {/* Sócios Section */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-secondary-light/30">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Nossos Sócios</h4>
            <p className="text-slate-600 dark:text-slate-400 mt-2 font-light">Os especialistas por trás da GTB</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center max-w-sm text-center"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-secondary shadow-xl mb-4">
                  <img 
                    src={partner.photo} 
                    alt={`Foto de ${partner.name}`} 
                    className={`w-full h-full object-cover ${partner.imagePosition || 'object-center'}`}
                  />
                </div>
                <h5 className="text-xl font-bold text-slate-900 dark:text-white">{partner.name}</h5>
                <span className="text-primary-light font-medium mt-1 mb-3">{partner.role}</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>

  );
}
