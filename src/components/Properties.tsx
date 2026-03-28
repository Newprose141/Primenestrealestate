import React from 'react';
import { motion } from 'motion/react';

const properties = [
  {
    id: 1,
    title: 'The Obsidian Pavilion',
    location: 'Banana Island, Lagos',
    price: '$4,250,000',
    image: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop',
    category: 'Waterfront'
  },
  {
    id: 2,
    title: 'Azure Heights Penthouse',
    location: 'Eko Atlantic, Lagos',
    price: '$2,900,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    category: 'Skyline'
  },
  {
    id: 3,
    title: 'Elysian Smart Estate',
    location: 'Old Ikoyi, Lagos',
    price: '$5,500,000',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop',
    category: 'Heritage'
  }
];

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    image: string;
    category: string;
  };
  index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-off-white">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-500" />
        <div className="absolute top-8 left-8">
          <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-[0.3em] font-bold text-navy shadow-sm">
            {property.category}
          </span>
        </div>
      </div>
      <div className="space-y-4 px-2">
        <div className="flex justify-between items-baseline border-b border-border-subtle pb-4">
          <h3 className="text-2xl font-light tracking-tight text-navy group-hover:text-gold transition-colors duration-300">
            {property.title}
          </h3>
          <span className="text-sm font-medium text-gold tracking-wider">{property.price}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-navy/40 font-semibold">{property.location}</p>
          <span className="text-[10px] uppercase tracking-widest font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Properties() {
  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block"
            >
              The Curated Collection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-tight text-navy leading-tight"
            >
              Featured <span className="italic font-light">Masterpieces</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-navy/50 mt-8 text-lg font-light leading-relaxed"
            >
              A hand-selected portfolio of the most prestigious architectural achievements in Lagos, defined by uncompromising quality and visionary design.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-navy/20 pb-3 hover:text-gold hover:border-gold transition-all duration-300"
          >
            View All Properties
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
