const Jimp = require('jimp');

Jimp.read('public/logo.jpeg')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const brightness = (r + g + b) / 3;
      
      // The grey background is around >100 brightness. GTB is basically black.
      if (brightness > 100) {
          // Transparent
          this.bitmap.data[idx + 3] = 0;
      } else {
          // Keep it opaque black
          this.bitmap.data[idx + 0] = 0;
          this.bitmap.data[idx + 1] = 0;
          this.bitmap.data[idx + 2] = 0;
          this.bitmap.data[idx + 3] = 255;
      }
    });

    image.write('public/logo.png', () => {
      console.log('Saved transparent logo to public/logo.png');
    });
  })
  .catch(err => {
    console.error(err);
  });
