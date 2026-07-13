const fs = require('fs');
let content = fs.readFileSync('src/components/Features.tsx', 'utf8');

content = content.replace(
  /icon: Wallet,\s*title: 'Refinanciamento de Veículo'/g,
  "icon: Car,\n    title: 'Refinanciamento de Veículo'"
);
fs.writeFileSync('src/components/Features.tsx', content);
