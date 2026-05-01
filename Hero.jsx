import { motion, useTransform, useScroll } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      {/* الفيديو الخلفي */}
      <video 
        autoPlay loop muted playsInline 
        className="absolute w-full h-full object-cover"
      >
        <source src="https://your-video-url.mp4" type="video/mp4" />
      </video>

      {/* الطبقة السوداء الشفافة */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* النص المتفاعل (Parallax) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          الدعيس مول
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-[0.2em] uppercase">
          حيث تبدأ الأناقة
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-10 py-3 bg-brand-gold text-white rounded-full text-sm font-bold uppercase tracking-widest"
        >
          اكتشف المجموعة
        </motion.button>
      </motion.div>
    </section>
  );
};
