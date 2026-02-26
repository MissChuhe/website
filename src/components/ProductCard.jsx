// src/components/ProductCard/ProductCard.jsx
import { motion } from 'framer-motion';
import './ProductCard.scss';

export default function ProductCard({ product }) {
  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>View Details</button>
    </motion.div>
  );
}