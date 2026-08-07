const fs = require('fs');
const files = fs.readdirSync('src/assets/bancos/');
const imports = [];

// Sort the list based on how they appear or just use the same names
const names = {
  'bb.svg': 'BB',
  'banrisul.svg': 'Banrisul',
  'santander.svg': 'Santander',
  'itau.svg': 'Itaú',
  'c6.jpg': 'C6 Bank',
  'picpay.svg': 'PicPay',
  'safra.svg': 'Safra',
  'bradesco.svg': 'Bradesco',
  'caixa.svg': 'Caixa',
  'bmg.svg': 'BMG',
  'pan.svg': 'PAN',
  'daycoval.svg': 'Daycoval',
  'facta.jpg': 'Facta',
  'inbursa.png': 'Inbursa',
  'agibank.png': 'Agibank',
  'cetelem.png': 'Cetelem',
  'master.jpg': 'Master',
  'mercantil.png': 'Mercantil',
  'bv.png': 'BV',
  'sicoob.svg': 'Sicoob',
  'sicredi.svg': 'Sicredi',
  'omni.png': 'Omni',
  'porto.jpg': 'Porto',
  'inter.svg': 'Inter',
  'nubank.svg': 'Nubank',
  'neon.png': 'Neon',
  'original.svg': 'Original',
  'pine.jpg': 'Pine',
  'alfa.jpg': 'Alfa',
  'btg.png': 'BTG',
  'creditas.jpg': 'Creditas',
  'semear.jpg': 'Semear',
  'parana.png': 'Paraná',
  'brb.svg': 'BRB',
  'paulista.png': 'Paulista',
  'votorantim.png': 'Votorantim',
  'fin_alfa.png': 'Fin. Alfa',
  'nordeste.svg': 'Nordeste',
  'amazonia.svg': 'Amazônia',
  'crefisa.jpg': 'CREFISA',
  'via_certa.jpg': 'Via Certa'
};

const originalOrder = [
  'bb', 'banrisul', 'santander', 'itau', 'c6', 'picpay', 'safra', 'bradesco',
  'caixa', 'bmg', 'pan', 'daycoval', 'facta', 'inbursa', 'agibank', 'cetelem',
  'master', 'mercantil', 'bv', 'sicoob', 'sicredi', 'omni', 'porto', 'inter',
  'nubank', 'neon', 'original', 'pine', 'alfa', 'btg', 'creditas', 'semear',
  'parana', 'brb', 'paulista', 'votorantim', 'fin_alfa', 'nordeste', 'amazonia',
  'brb', 'crefisa', 'via_certa'
];

let res = '';
for (const [filename, name] of Object.entries(names)) {
  const varName = filename.split('.')[0];
  res += `import ${varName}Img from '../assets/bancos/${filename}';\n`;
}

res += '\nconst banks = [\n';

for (const key of originalOrder) {
  let found = false;
  for (const [filename, name] of Object.entries(names)) {
    if (filename.split('.')[0] === key) {
       let objName = name;
       if (key === 'brb' && !res.includes("{ name: 'Fin. BRB', logo: brbImg }")) {
           // We will handle Fin BRB separately
           objName = 'BRB';
       }
       res += `  { name: '${name}', logo: ${key}Img },\n`;
       found = true;
       break;
    }
  }
}
res += '];\n';

console.log(res);
