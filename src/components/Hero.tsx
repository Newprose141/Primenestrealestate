import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center hero-bg-zoom"
        />
        <div className="absolute inset-0 bg-navy/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="inline-block text-gold text-[10px] md:text-xs uppercase tracking-[0.6em] font-semibold">
            PrimeNest Realty &bull; Lagos
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl text-white font-light tracking-tight leading-[0.9] mb-12"
        >
          Luxury Living, <br />
          <span className="italic font-light text-gold-light">Perfectly Placed</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/90 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Discover exclusive homes and high-value investments curated for the discerning modern elite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="group relative px-12 py-5 overflow-hidden">
            <div className="absolute inset-0 bg-gold transition-transform duration-500 group-hover:scale-105" />
            <span className="relative text-white text-[10px] uppercase tracking-[0.3em] font-bold">
              Explore Properties
            </span>
          </button>
          <button className="group relative px-12 py-5 overflow-hidden border border-white/40 hover:border-white transition-colors duration-500">
            <span className="relative text-white text-[10px] uppercase tracking-[0.3em] font-bold">
              Book Consultation
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/60"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Side Label (Desktop Only) */}
      <div className="hidden lg:block absolute left-12 bottom-24 z-10 origin-left -rotate-90">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-medium">
          ESTABLISHED MMXXIV
        </span>
      </div>
    </section>
  );
}
