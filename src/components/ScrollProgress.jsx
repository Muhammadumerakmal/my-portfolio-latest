import { motion, useScroll, useSpring } from 'framer-motion';

// Thin progress bar at the very top that fills as the page scrolls.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
