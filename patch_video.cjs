const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const videoBg = `
    <section ref={ref} className="relative w-full pt-4 md:pt-8 overflow-hidden rounded-3xl md:rounded-[2rem] border border-slate-200 dark:border-secondary-light/30">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 dark:opacity-20 transition-opacity duration-1000"
        >
          <source src="/crie_um_video_que_pode_ser_usa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent dark:from-secondary-dark/90 dark:via-secondary-dark/50 dark:to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
`;

// Looking at the original:
//     <section ref={ref} className="relative w-full pt-4 md:pt-8">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

content = content.replace(/<section ref={ref} className="relative w-full pt-4 md:pt-8">\s*<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">/, videoBg.trim());

// Also we should probably remove the background from the left container so the video is visible through it.
// The left container is:
// className="col-span-1 lg:col-span-8 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 lg:p-14 flex flex-col justify-center relative overflow-hidden shadow-2xl"

// Let's modify the left container to be transparent or translucent.
content = content.replace(/className="col-span-1 lg:col-span-8 border border-slate-200 dark:border-secondary-light\/30 rounded-3xl md:rounded-\[2rem\] p-6 sm:p-8 lg:p-14 flex flex-col justify-center relative overflow-hidden shadow-2xl"/, 'className="col-span-1 lg:col-span-8 p-6 sm:p-8 lg:p-14 flex flex-col justify-center relative"');

fs.writeFileSync('src/components/Hero.tsx', content);
console.log('Successfully updated Hero.tsx');
