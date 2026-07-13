const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace the video tag with motion.video
const videoTag = `
        <motion.video 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/crie_um_video_que_pode_ser_usa.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/40 dark:from-secondary-dark/95 dark:via-secondary-dark/80 dark:to-secondary-dark/40"></div>
`;

content = content.replace(/<video[\s\S]*?<\/video>\s*<div className="absolute inset-0 bg-gradient-to-t[\s\S]*?<\/div>/, videoTag.trim());

fs.writeFileSync('src/components/Hero.tsx', content);
console.log('Successfully updated Hero.tsx with motion.video');
