import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

const Card = ({ children, className = '', hover = true, glow = false, tilt = false }) => {
  const baseStyles = 'bg-card rounded-2xl border border-foreground/5 overflow-hidden';
  const glowStyles = glow ? 'glow-soft' : '';

  // Cursor position within the card (0..1 on each axis).
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Map cursor position to a gentle 3D tilt, smoothed with a spring.
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  const glareX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glareY = useTransform(mouseY, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${glareX} ${glareY}, rgba(163,255,18,0.12), transparent 70%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const resetTilt = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const revealProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  if (!tilt) {
    return (
      <motion.div
        className={`${baseStyles} ${glowStyles} ${className}`}
        {...revealProps}
        whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className={`${baseStyles} ${glowStyles} ${className} relative`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      {...revealProps}
      whileHover={hover ? { y: -5 } : {}}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: spotlight }}
      />
      {children}
    </motion.div>
  );
};

export default Card;
