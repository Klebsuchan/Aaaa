const Jimp = require('jimp');

Jimp.read('public/logogtbatual.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const alpha = this.bitmap.data[idx + 3];
      
      if (alpha > 0) {
          // Make it white
          this.bitmap.data[idx + 0] = 255;
          this.bitmap.data[idx + 1] = 255;
          this.bitmap.data[idx + 2] = 255;
      }
    });
    image.write('public/logogtb_white.png', () => {
      console.log('Saved transparent white logo to public/logogtb_white.png');
    });
  })
  .catch(err => {
    console.error(err);
  });
