import { Home, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 pt-32 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <h3 className="text-3xl font-light tracking-tighter italic">PrimeNest<span className="text-gold">.</span></h3>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Curating the most exclusive architectural masterpieces in Lagos for the discerning global citizen.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social, idx) => (
                <a key={idx} href="#" className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 hover:text-gold transition-colors duration-500">
                  <social.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-10">Collections</h4>
            <ul className="space-y-6">
              {['Banana Island', 'Eko Atlantic', 'Old Ikoyi', 'Victoria Island'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors font-light text-sm flex items-center gap-2 group">
                    <div className="w-1 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-10">Company</h4>
            <ul className="space-y-6">
              {['Our Legacy', 'Advisory', 'Insights', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors font-light text-sm flex items-center gap-2 group">
                    <div className="w-1 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-10">Newsletter</h4>
            <p className="text-white/40 text-sm mb-8 font-light">Subscribe to receive exclusive off-market opportunities.</p>
            <div className="flex border-b border-white/10 pb-2 group focus-within:border-gold transition-colors duration-500">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent w-full focus:outline-none text-sm font-light placeholder:text-white/20"
              />
              <button className="text-gold hover:text-gold-light transition-colors group-hover:translate-x-1 duration-500">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© 2026 PrimeNest Realty. All Rights Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
