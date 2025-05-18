import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date: string;
  image: string;
}

export default function ReviewCard({ name, rating, review, date, image }: ReviewCardProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-600">{review}</p>
    </motion.div>
  );
}