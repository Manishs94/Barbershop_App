import React from 'react';
import ServiceCard from '../components/ServiceCard';
import AnimatedSection from '../components/AnimatedSection';

const SERVICES = [
  {
    name: 'Classic Cut',
    price: 35,
    duration: 30,
    description: 'Traditional haircut with modern styling, includes consultation, wash, cut, and style.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Beard Trim',
    price: 25,
    duration: 20,
    description: 'Professional beard trimming and shaping, includes hot towel and beard oil treatment.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Hot Towel Shave',
    price: 40,
    duration: 45,
    description: 'Luxurious straight razor shave with hot towel treatment and facial massage.',
    image: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Hair + Beard Combo',
    price: 55,
    duration: 45,
    description: 'Complete grooming package including haircut and beard trim.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Kids Cut',
    price: 25,
    duration: 30,
    description: 'Specialized haircuts for children under 12.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Senior Cut',
    price: 30,
    duration: 30,
    description: 'Tailored service for our senior clients, includes neck shave.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=500'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of professional grooming services. 
            Each service includes a consultation to ensure we achieve your desired look.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}