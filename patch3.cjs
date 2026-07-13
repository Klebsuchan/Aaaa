const fs = require('fs');
let content = fs.readFileSync('src/components/AboutUs.tsx', 'utf8');

const partnersCode = `
const partners = [
  {
    name: 'Arthur',
    role: 'Sócio Fundador',
    photo: '/arthur.jpeg',
    imagePosition: 'object-top',
    description: 'Especialista em soluções de crédito e mercado financeiro. Com ampla experiência em ajudar clientes a encontrar as melhores taxas e condições para seus projetos.'
  },
  {
    name: 'Bernardo',
    role: 'Sócio Fundador',
    photo: '/bernardo.jpeg',
    imagePosition: 'object-[center_15%]',
    description: 'Especialista em atendimento estratégico e negociações bancárias. Dedicado a simplificar o acesso a recursos financeiros com total transparência.'
  }
];
`;

content = content.replace(/const partners = \[\s*{\s*name: 'Arthur'[\s\S]*?\];/, partnersCode.trim());

content = content.replace(/className="w-full h-full object-cover object-top"/g, 'className={`w-full h-full object-cover ${partner.imagePosition || \'object-center\'}`}');

fs.writeFileSync('src/components/AboutUs.tsx', content);
console.log('Successfully updated AboutUs.tsx');
