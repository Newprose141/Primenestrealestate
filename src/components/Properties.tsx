import React from 'react';
import { motion } from 'motion/react';

const properties = [
  {
    id: 1,
    title: 'Luxury 4-Bedroom Detached Duplex',
    location: 'Lekki, Lagos',
    price: 'Contact for Price',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    category: 'Lekki'
  },
  {
    id: 2,
    title: '3-Bedroom Luxury Apartment',
    location: 'Victoria Island, Lagos',
    price: 'Contact for Price',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    category: 'VI'
  },
  {
    id: 3,
    title: '5-Bedroom Smart Home',
    location: 'Ikoyi, Lagos',
    price: 'Contact for Price',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    category: 'Ikoyi'
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-6">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest font-semibold text-navy">
            {property.category}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium tracking-tight text-navy">{property.title}</h3>
          <span className="text-gold font-medium">{property.price}</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{property.location}</p>
      </div>
    </motion.div>
  );
};

export default function Properties() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-navy">
              Featured <span className="italic">Listings</span>
            </h2>
            <p className="text-navy/60 mt-4">Explore a curated selection of high-end properties currently available across Lagos.</p>
          </div>
          <button className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-navy pb-2 hover:text-gold hover:border-gold transition-all">
            View All Properties
          </button>
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
