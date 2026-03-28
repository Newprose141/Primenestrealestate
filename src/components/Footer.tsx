import { Home, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-gold" />
              <span className="text-xl font-medium tracking-widest uppercase">PrimeNest</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium real estate solutions in Lagos, connecting you to the finest properties and investment opportunities.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8 text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8 text-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>Lagos, Nigeria</li>
              <li>info@primenestrealty.com</li>
              <li>+234 XXX XXX XXXX</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8 text-gold">Newsletter</h4>
            <p className="text-sm text-white/60 mb-6">Join our exclusive list for early access to new investment opportunities.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-0 bottom-3 text-[10px] uppercase tracking-widest font-bold text-gold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[10px] uppercase tracking-widest text-white/30">
            © 2026 PrimeNest Realty. All rights reserved.
          </span>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
