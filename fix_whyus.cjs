const fs = require('fs');
let code = fs.readFileSync('src/components/WhyUs.tsx', 'utf8');

const regex = />[\s]*GTB[\s]*<\/div>/;
const replacement = '><img loading=\"lazy\" src=\"/logogtbatual.png\" alt=\"GTB\" className=\"w-12 h-12 object-contain dark:hidden\" /><img loading=\"lazy\" src=\"/logogtb-white.png\" alt=\"GTB\" className=\"w-12 h-12 object-contain hidden dark:block\" /></div>';

code = code.replace(regex, replacement);
fs.writeFileSync('src/components/WhyUs.tsx', code);
