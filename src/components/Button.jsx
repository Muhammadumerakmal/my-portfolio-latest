import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, href, type, disabled = false, external = false }) => {
  const baseStyles = 'px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center gap-2';

  const variants = {
    primary: 'bg-primary text-black hover:bg-primary/90 glow-border hover:shadow-lg hover:shadow-primary/20',
    secondary: 'bg-card text-white border border-white/10 hover:border-primary/50 hover:bg-card/80',
    ghost: 'text-white hover:text-primary border border-white/10 hover:border-primary/50',
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  // Magnetic pull toward the cursor, spring-smoothed.
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const button = (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`${buttonClass} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-block"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {button}
      </a>
    );
  }

  return button;
};

export default Button;
