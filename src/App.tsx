/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Settings, BarChart3, CheckCircle2, Quote, Home } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Trust Strip */}
      <div className="bg-navy py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-white/60 text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
            Trusted by Homeowners, Investors & Developers Across Lagos
          </span>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-white overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                  alt="PrimeNest Realty Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 hidden md:block w-64 h-80 border-8 border-off-white -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">About PrimeNest Realty</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-navy leading-[1.1]">
                Your Trusted Partner in <br />
                <span className="italic">Premium Real Estate</span>
              </h2>
              <div className="space-y-6 text-navy/70 text-lg leading-relaxed font-light">
                <p>
                  At PrimeNest Realty, we specialize in connecting discerning clients with high-quality residential and investment properties across Lagos. Whether you're searching for a luxury home, a strategic investment, or a complete property transformation, we bring expertise, transparency, and precision to every step.
                </p>
                <p>
                  Our approach is simple — understand your goals, present the best opportunities, and deliver results that exceed expectations.
                </p>
              </div>
              <div className="pt-4">
                <button className="px-10 py-4 bg-navy text-white text-xs uppercase tracking-widest font-medium hover:bg-gold transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy mb-6">What We Offer</h2>
          <p className="text-navy/60 max-w-2xl mx-auto">End-to-end real estate solutions tailored for buyers, sellers, and investors.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Shield className="w-8 h-8 text-gold" />, 
              title: "Property Sales", 
              desc: "We help you find and secure premium homes in prime Lagos locations with confidence and ease." 
            },
            { 
              icon: <TrendingUp className="w-8 h-8 text-gold" />, 
              title: "Investment Advisory", 
              desc: "Make smarter decisions with expert insights on high-return real estate opportunities." 
            },
            { 
              icon: <Settings className="w-8 h-8 text-gold" />, 
              title: "Property Management", 
              desc: "We manage your property efficiently, ensuring value retention and consistent income." 
            },
            { 
              icon: <BarChart3 className="w-8 h-8 text-gold" />, 
              title: "Property Marketing", 
              desc: "We position your property to attract the right buyers using modern marketing strategies." 
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 border border-border hover:border-gold transition-colors group"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-medium text-navy mb-4">{service.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Properties />

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">The PrimeNest Advantage</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy">Why Choose Us</h2>
            </div>
            
            <div className="space-y-8">
              {[
                "Deep knowledge of the Lagos real estate market",
                "Access to exclusive off-market listings",
                "Transparent and client-focused process",
                "Proven track record of successful transactions",
                "Personalized service tailored to your needs"
              ].map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-navy/80 text-lg font-light">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy p-12 md:p-20 text-white relative"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Home className="w-40 h-40" />
            </div>
            <h3 className="text-3xl font-light mb-8 relative z-10">Ready to Find Your <span className="italic text-gold">Perfect Property?</span></h3>
            <p className="text-white/60 mb-10 font-light leading-relaxed relative z-10">
              Let us help you secure a home or investment that matches your vision and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <button className="px-8 py-4 bg-gold text-white text-xs uppercase tracking-widest font-bold hover:bg-gold-dark transition-colors">
                Get Started
              </button>
              <button className="px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-navy transition-all">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy">What Our Clients Say</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "PrimeNest made my home buying experience seamless. Their professionalism and attention to detail stood out.", author: "Homeowner in Lekki" },
            { text: "I secured a great investment property thanks to their guidance. Highly recommended.", author: "Real Estate Investor" },
            { text: "They truly understand the Lagos market and deliver exactly what you need.", author: "Developer" }
          ].map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 relative shadow-sm"
            >
              <Quote className="w-10 h-10 text-gold/20 absolute top-8 left-8" />
              <p className="text-navy/80 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
              <div className="border-t border-border pt-6">
                <span className="text-xs uppercase tracking-widest font-bold text-navy">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-off-white p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy">Get in <span className="italic">Touch</span></h2>
              <p className="text-navy/60 text-lg font-light">Have questions or ready to take the next step? Reach out to our team today.</p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border">
                    <BarChart3 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-navy/40 font-bold mb-1">Office Location</span>
                    <span className="text-navy font-medium">Lagos, Nigeria</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border">
                    <Quote className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-navy/40 font-bold mb-1">Email Address</span>
                    <span className="text-navy font-medium">info@primenestrealty.com</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-navy/20 py-4 focus:outline-none focus:border-gold transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-navy/20 py-4 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-transparent border-b border-navy/20 py-4 focus:outline-none focus:border-gold transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-navy/20 py-4 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
              <button className="w-full py-5 bg-navy text-white text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
