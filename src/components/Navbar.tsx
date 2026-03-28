import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#' },
    { name: 'Architecture', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'premium-blur py-5 shadow-sm' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Home className={`w-5 h-5 transition-colors duration-500 ${scrolled ? 'text-gold' : 'text-white'}`} />
          <span className={`text-2xl font-serif tracking-[0.2em] uppercase transition-colors duration-500 ${scrolled ? 'text-navy' : 'text-white'}`}>
            PrimeNest
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 hover:text-gold relative group ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <button className={`px-10 py-3 text-[10px] uppercase tracking-[0.3em] font-bold border transition-all duration-700 ${
            scrolled 
              ? 'border-navy/20 text-navy hover:bg-navy hover:text-white' 
              : 'border-white/20 text-white hover:bg-white hover:text-navy'
          }`}>
            Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-navy' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-navy' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-off-white shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-navy font-medium border-b border-off-white pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-navy text-white text-xs uppercase tracking-widest">
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
