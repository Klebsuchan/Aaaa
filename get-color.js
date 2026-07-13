import fs from "fs";
import jpeg from "jpeg-js";

const jpegData = fs.readFileSync("public/logo.jpeg");
const rawImageData = jpeg.decode(jpegData, {useTArray: true});

const width = rawImageData.width;
const height = rawImageData.height;

function getPixel(x, y) {
  const i = (y * width + x) * 4;
  return {
    r: rawImageData.data[i],
    g: rawImageData.data[i + 1],
    b: rawImageData.data[i + 2],
  };
}

let counts = {};
// sample the whole border
for(let x=0; x<width; x++) {
   [0, 1, 2, height-1, height-2, height-3].forEach(y => {
       const p = getPixel(x, y);
       const hex = `#${p.r.toString(16).padStart(2,'0')}${p.g.toString(16).padStart(2,'0')}${p.b.toString(16).padStart(2,'0')}`;
       counts[hex] = (counts[hex] || 0) + 1;
   });
}
for(let y=0; y<height; y++) {
   [0, 1, 2, width-1, width-2, width-3].forEach(x => {
       const p = getPixel(x, y);
       const hex = `#${p.r.toString(16).padStart(2,'0')}${p.g.toString(16).padStart(2,'0')}${p.b.toString(16).padStart(2,'0')}`;
       counts[hex] = (counts[hex] || 0) + 1;
   });
}

let maxStr = "";
let maxCount = 0;
for (const [hex, count] of Object.entries(counts)) {
    if (count > maxCount) {
        maxCount = count;
        maxStr = hex;
    }
}
console.log("Most common border color:", maxStr, "with count", maxCount);
