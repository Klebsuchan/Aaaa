const fs = require('fs');
let content = fs.readFileSync('src/components/Testimonials.tsx', 'utf8');

const newTestimonials = `  const testimonials = [
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
      content: "O Arthur e o pessoal da GTB me ajudaram muito no empréstimo da firma. O Arthur revirou tudo até achar os juros mais baratos para mim e resolveu tudo rapidinho. Sem enrolação, direto e valeu muito a pena financeiramente.",
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
  ];`;

content = content.replace(/const testimonials = \[([\s\S]*?)\];/, newTestimonials);
fs.writeFileSync('src/components/Testimonials.tsx', content);
