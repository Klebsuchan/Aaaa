const fs = require('fs');
let content = fs.readFileSync('src/components/Features.tsx', 'utf8');

const newServices = `const services = [
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
    icon: Wallet,
    title: 'Refinanciamento de Veículo',
    description: 'Use seu carro ou moto quitado como garantia e consiga crédito com juros menores.'
  }
];`;

content = content.replace(/const services = \[([\s\S]*?)\];/, newServices);
fs.writeFileSync('src/components/Features.tsx', content);
