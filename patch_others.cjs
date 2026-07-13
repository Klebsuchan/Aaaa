const fs = require('fs');

// Testimonials
let contentTest = fs.readFileSync('src/components/Testimonials.tsx', 'utf8');
contentTest = contentTest.replace(
  /name: "Ana Paula",\s*role: "Autônoma",\s*image: "https:\/\/i\.pravatar\.cc\/150\?img=9",\s*content: "Sempre achei que seria impossível conseguir crédito sendo autônoma\. O atendimento humano fez toda a diferença, me ouviram e entenderam minha real necessidade\. Realizei o sonho de reformar minha casa e dar conforto para meus pais\.",/,
  `name: "Ana Paula",
      role: "Professora",
      image: "https://i.pravatar.cc/150?img=9",
      content: "Sempre achei que as taxas seriam altas, mas com o crédito consignado CLT, o desconto direto na folha facilitou tudo. O atendimento humano fez toda a diferença, entenderam minha necessidade e realizei o sonho de reformar minha casa.",`
);
fs.writeFileSync('src/components/Testimonials.tsx', contentTest);

// Footer
let contentFooter = fs.readFileSync('src/components/Footer.tsx', 'utf8');
contentFooter = contentFooter.replace('CNPJ: 00.000.000/0001-00', 'CNPJ: 35.211.729/0001-91');
fs.writeFileSync('src/components/Footer.tsx', contentFooter);

// AboutUs
let contentAbout = fs.readFileSync('src/components/AboutUs.tsx', 'utf8');
contentAbout = contentAbout.replace(/name: 'Bernardo',/g, "name: 'Bernardo Bonfante',");
contentAbout = contentAbout.replace(/name: 'Arthur',/g, "name: 'Arthur Tolloti',");
fs.writeFileSync('src/components/AboutUs.tsx', contentAbout);

console.log("Done");
