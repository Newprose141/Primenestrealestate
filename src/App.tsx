/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Settings, BarChart3, CheckCircle2, Quote, Home, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Trust Strip */}
      <div className="bg-navy py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-bold">
            Trusted by the World's Most Discerning Homeowners & Investors
          </span>
        </div>
      </div>

      {/* About Section */}
      <section className="py-32 md:py-56 bg-white overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-off-white">
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Luxury Interior Design"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-16 -right-16 hidden lg:block w-72 h-96 border border-border-subtle -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-10"
            >
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">The PrimeNest Vision</span>
              <h2 className="text-5xl md:text-8xl font-light tracking-tight text-navy leading-[0.9]">
                Where <span className="italic font-light">Elegance</span> <br />
                Meets Precision
              </h2>
              <div className="space-y-8 text-navy/60 text-xl leading-relaxed font-light">
                <p>
                  At PrimeNest Realty, we curate more than just properties; we curate a lifestyle of unparalleled distinction. Our expertise lies in identifying architectural masterpieces that offer both aesthetic brilliance and strategic investment value.
                </p>
                <p>
                  With a focus on the most prestigious enclaves of Lagos, we bring a level of transparency and precision that is as rare as the homes we represent.
                </p>
              </div>
              <div className="pt-6">
                <button className="group relative px-12 py-5 overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative text-white text-[10px] uppercase tracking-[0.3em] font-bold">
                    Our Philosophy
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 md:py-56 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block"
          >
            Bespoke Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-navy mb-8"
          >
            Our <span className="italic">Expertise</span>
          </motion.h2>
          <p className="text-navy/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Tailored real estate solutions designed for the global elite, ensuring every transaction is handled with absolute discretion and excellence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
          {[
            { 
              icon: <Shield className="w-6 h-6 text-gold" />, 
              title: "Property Sales", 
              desc: "Securing the most coveted addresses in Lagos with seamless execution." 
            },
            { 
              icon: <TrendingUp className="w-6 h-6 text-gold" />, 
              title: "Investment Advisory", 
              desc: "Strategic insights into high-yield luxury real estate portfolios." 
            },
            { 
              icon: <Settings className="w-6 h-6 text-gold" />, 
              title: "Asset Management", 
              desc: "Preserving the architectural integrity and market value of your estate." 
            },
            { 
              icon: <BarChart3 className="w-6 h-6 text-gold" />, 
              title: "Global Marketing", 
              desc: "Positioning your masterpiece before the world's most qualified buyers." 
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-off-white p-12 hover:bg-white transition-all duration-500 group"
            >
              <div className="mb-10 group-hover:-translate-y-2 transition-transform duration-500">{service.icon}</div>
              <h3 className="text-2xl font-light text-navy mb-6 tracking-tight">{service.title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Properties />

      {/* Why Choose Us */}
      <section className="py-32 md:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">The PrimeNest Distinction</span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-navy leading-tight">Uncompromising <br /><span className="italic">Standards</span></h2>
            </div>
            
            <div className="space-y-10">
              {[
                "Unrivaled knowledge of the Lagos luxury market",
                "Exclusive access to off-market architectural gems",
                "A transparent, client-centric acquisition process",
                "A legacy of high-value, successful transactions",
                "Bespoke services tailored to your unique vision"
              ].map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform duration-500" />
                  <span className="text-navy/70 text-xl font-light tracking-tight">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-navy p-16 md:p-24 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Home className="w-64 h-64" />
            </div>
            <h3 className="text-4xl md:text-5xl font-light mb-10 relative z-10 leading-tight">Secure Your <br /><span className="italic text-gold-light">Legacy Property</span></h3>
            <p className="text-white/50 mb-12 font-light text-lg leading-relaxed relative z-10 max-w-md">
              Allow our experts to guide you through the acquisition of a property that transcends mere living.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 relative z-10">
              <button className="px-12 py-5 bg-gold text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold-light transition-colors duration-500">
                Get Started
              </button>
              <button className="px-12 py-5 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-navy transition-all duration-500">
                Schedule Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 md:py-56 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-32">
          <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Client Chronicles</span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-navy">Refined <span className="italic">Perspectives</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
          {[
            { text: "PrimeNest redefined my expectations of real estate. Their discretion and architectural insight are truly unmatched in the Lagos market.", author: "Estate Owner, Ikoyi" },
            { text: "The strategic guidance provided for our portfolio expansion was exceptional. They identify value where others see only structures.", author: "Institutional Investor" },
            { text: "A seamless journey from vision to acquisition. Their commitment to excellence is evident in every interaction.", author: "International Developer" }
          ].map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="bg-off-white p-16 relative group hover:bg-white transition-all duration-700"
            >
              <Quote className="w-12 h-12 text-gold/10 absolute top-12 left-12 group-hover:text-gold/20 transition-colors duration-500" />
              <p className="text-navy/70 italic text-xl mb-12 relative z-10 leading-relaxed font-light">"{t.text}"</p>
              <div className="pt-8 border-t border-border-subtle">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-navy/40">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-56 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-16">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Inquiries</span>
                <h2 className="text-5xl md:text-8xl font-light tracking-tight leading-none mb-10">Begin Your <br /><span className="italic text-gold-light">Journey</span></h2>
                <p className="text-white/50 text-xl font-light leading-relaxed max-w-md">
                  Our advisors are ready to provide bespoke guidance for your next architectural acquisition.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Email</p>
                    <p className="text-xl font-light group-hover:text-gold transition-colors duration-500">concierge@primenest.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Phone</p>
                    <p className="text-xl font-light group-hover:text-gold transition-colors duration-500">+234 800 PRIMENEST</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Office</p>
                    <p className="text-xl font-light group-hover:text-gold transition-colors duration-500">Banana Island, Lagos</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/5 backdrop-blur-xl p-12 md:p-20 border border-white/10"
            >
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-lg"
                      placeholder="Alexander Sterling"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-lg"
                      placeholder="alexander@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Property Interest</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-lg appearance-none">
                    <option className="bg-navy">Residential Acquisition</option>
                    <option className="bg-navy">Investment Portfolio</option>
                    <option className="bg-navy">Property Management</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-lg resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>
                <button className="w-full py-6 bg-gold text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-gold-light transition-all duration-500 shadow-2xl shadow-gold/10">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
