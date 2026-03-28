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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Home className={`w-6 h-6 ${scrolled ? 'text-gold' : 'text-white'}`} />
          <span className={`text-xl font-medium tracking-widest uppercase ${scrolled ? 'text-navy' : 'text-white'}`}>
            PrimeNest
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-6 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
            scrolled 
              ? 'border-navy text-navy hover:bg-navy hover:text-white' 
              : 'border-white/30 text-white hover:bg-white hover:text-navy'
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
