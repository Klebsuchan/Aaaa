const fs = require('fs');
let content = fs.readFileSync('src/components/AboutUs.tsx', 'utf8');

content = content.replace(/imagePosition: 'object-\\[center_15%\\]'/, "imagePosition: 'object-[center_25%]'");

fs.writeFileSync('src/components/AboutUs.tsx', content);
console.log('Successfully updated AboutUs.tsx');
