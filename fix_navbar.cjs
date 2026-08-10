const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const regex = /<span className=\{`font-black text-slate-900 dark:text-white transition-all duration-300 \$\{isScrolled \? 'text-2xl' : 'text-4xl'\}`\}>[\s\S]*?<\/span>/;
const replacement = '<img src={isDark ? "/logogtb-white.png" : "/logogtbatual.png"} alt="GTB Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? \'h-10 md:h-12\' : \'h-20 md:h-32\'}`} />';

code = code.replace(regex, replacement);
fs.writeFileSync('src/components/Navbar.tsx', code);
