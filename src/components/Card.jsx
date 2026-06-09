import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glow = false }) => {
  const baseStyles = 'bg-card rounded-2xl border border-white/5 overflow-hidden';
  const glowStyles = glow ? 'glow-soft' : '';

  return (
    <motion.div
      className={`${baseStyles} ${glowStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
