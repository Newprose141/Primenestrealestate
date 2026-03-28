import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center hero-bg-zoom"
        />
        <div className="absolute inset-0 bg-navy/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-gold text-xs md:text-sm uppercase tracking-[0.4em] font-medium mb-6"
        >
          Premium Real Estate Solutions
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl text-white font-light tracking-tight leading-tight mb-8"
        >
          Luxury Living, <br />
          <span className="italic font-normal text-gold">Perfectly Placed</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
        >
          Discover exclusive homes, high-value investments, and premium real estate opportunities curated for modern living and long-term growth in Lagos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-gold hover:bg-gold-dark text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 min-w-[220px]">
            Explore Properties
          </button>
          <button className="px-10 py-4 border border-white/30 hover:bg-white hover:text-navy text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 min-w-[220px]">
            Book a Consultation
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
