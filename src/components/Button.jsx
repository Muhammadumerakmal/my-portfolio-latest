import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, href, type, disabled = false, external = false }) => {
  const baseStyles = 'px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center gap-2';

  const variants = {
    primary: 'bg-primary text-black hover:bg-primary/90 glow-border hover:shadow-lg hover:shadow-primary/20',
    secondary: 'bg-card text-foreground border border-foreground/10 hover:border-primary/50 hover:bg-card/80',
    ghost: 'text-foreground hover:text-primary border border-foreground/10 hover:border-primary/50',
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

  // Shared motion props for both the button and link variants so the
  // magnetic hover effect behaves identically.
  const motionProps = {
    ref,
    className: `${buttonClass} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: springX, y: springY },
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (href) {
    // Render an anchor, not a button, so we never nest an interactive
    // element inside another one (invalid HTML / a11y issue).
    return (
      <motion.a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...motionProps}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default Button;
