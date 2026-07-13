import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('5511999999999')) {
          content = content.replace(/5511999999999/g, '5554991064604');
          fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(path.join(process.cwd(), 'src'));
console.log('Replaced whatsapp number');
