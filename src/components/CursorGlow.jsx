import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Soft primary-color glow that trails the cursor. Pointer devices only.
const CursorGlow = () => {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });
  const springY = useSpring(y, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[55] hidden md:block"
      style={{ left: springX, top: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 blur-2xl" />
    </motion.div>
  );
};

export default CursorGlow;
