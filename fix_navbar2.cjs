const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(
  'className={}',
  'className={`w-auto object-contain transition-all duration-300 ${isScrolled ? \'h-10 md:h-12\' : \'h-20 md:h-32\'}`}'
);

fs.writeFileSync('src/components/Navbar.tsx', code);
