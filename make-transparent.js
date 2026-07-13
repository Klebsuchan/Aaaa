import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('public/logo.jpeg');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const brightness = (r + g + b) / 3;
      
      // Make it black color
      this.bitmap.data[idx + 0] = 0; 
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
      
      // Map brightness to alpha. Black (brightness ~0) -> alpha 255. 
      // Background (brightness ~200) -> alpha 0.
      if (brightness > 180) { // Background
          this.bitmap.data[idx + 3] = 0;
      } else if (brightness < 80) { // Text
          this.bitmap.data[idx + 3] = 255;
      } else { // Anti-aliasing edges
          // Map 80-180 to 255-0
          const alpha = 255 - ((brightness - 80) / 100) * 255;
          this.bitmap.data[idx + 3] = Math.max(0, Math.min(255, Math.round(alpha)));
      }
    });

    await image.write('public/logo.png');
    console.log('Saved smoothed transparent logo to public/logo.png');
  } catch(e) {
    console.error(e);
  }
}
processImage();
