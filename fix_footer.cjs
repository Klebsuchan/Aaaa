const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const regex = /<span className="font-black text-4xl text-slate-900 dark:text-white">GTB<\/span>/;
const replacement = '<img loading=\"lazy\" src=\"/logogtbatual.png\" alt=\"GTB Logo\" className=\"h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity dark:hidden\" /><img loading=\"lazy\" src=\"/logogtb-white.png\" alt=\"GTB Logo\" className=\"h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity hidden dark:block\" />';

code = code.replace(regex, replacement);
fs.writeFileSync('src/components/Footer.tsx', code);
