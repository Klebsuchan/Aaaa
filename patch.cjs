const fs = require('fs');
let content = fs.readFileSync('src/components/AboutUs.tsx', 'utf8');

const partnersCode = `
const partners = [
  {
    name: 'Arthur',
    role: 'Sócio Fundador',
    photo: '/arthur.jpeg'
  },
  {
    name: 'Bernardo',
    role: 'Sócio Fundador',
    photo: '/bernardo.jpeg'
  }
];

`;

content = content.replace('export default function AboutUs() {', partnersCode + 'export default function AboutUs() {');

const partnersSection = `
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
                className="flex flex-col items-center"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-secondary shadow-xl mb-4">
                  <img 
                    src={partner.photo} 
                    alt={\`Foto de \${partner.name}\`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-xl font-bold text-slate-900 dark:text-white">{partner.name}</h5>
                <span className="text-primary-light font-medium mt-1">{partner.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
`;

content = content.replace(/<\/div>\s*<\/motion\.section>/, partnersSection);

fs.writeFileSync('src/components/AboutUs.tsx', content);
console.log('Successfully updated AboutUs.tsx');
