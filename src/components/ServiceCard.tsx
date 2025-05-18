import { Clock, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  name: string;
  price: number;
  duration: number;
  description: string;
  image: string;
}

export default function ServiceCard({ name, price, duration, description, image }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Scissors size={16} />
            <span>${price}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to="/booking"
          className="block bg-black text-white text-center px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
}