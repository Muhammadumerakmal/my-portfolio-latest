import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, href }) => {
  const baseStyles = 'px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center gap-2';

  const variants = {
    primary: 'bg-primary text-black hover:bg-primary/90 glow-border hover:shadow-lg hover:shadow-primary/20',
    secondary: 'bg-card text-white border border-white/10 hover:border-primary/50 hover:bg-card/80',
    ghost: 'text-white hover:text-primary border border-white/10 hover:border-primary/50'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  const ButtonContent = () => (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
};

export default Button;
