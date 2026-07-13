const fs = require('fs');
let content = fs.readFileSync('src/components/AboutUs.tsx', 'utf8');

const partnersCode = `
const partners = [
  {
    name: 'Arthur',
    role: 'Sócio Fundador',
    photo: '/arthur.jpeg',
    description: 'Especialista em soluções de crédito e mercado financeiro. Com ampla experiência em ajudar clientes a encontrar as melhores taxas e condições para seus projetos.'
  },
  {
    name: 'Bernardo',
    role: 'Sócio Fundador',
    photo: '/bernardo.jpeg',
    description: 'Especialista em atendimento estratégico e negociações bancárias. Dedicado a simplificar o acesso a recursos financeiros com total transparência.'
  }
];
`;

content = content.replace(/const partners = \[\s*{\s*name: 'Arthur'[\s\S]*?\];/, partnersCode.trim());

const partnersRender = `
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
                    alt={\`Foto de \${partner.name}\`} 
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
                <h5 className="text-xl font-bold text-slate-900 dark:text-white">{partner.name}</h5>
                <span className="text-primary-light font-medium mt-1 mb-3">{partner.role}</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
`;

content = content.replace(/<motion\.div\s*key={i}\s*initial={{ opacity: 0, scale: 0\.95 }}[\s\S]*?<\/motion\.div>/, partnersRender.trim());

fs.writeFileSync('src/components/AboutUs.tsx', content);
console.log('Successfully updated AboutUs.tsx');
