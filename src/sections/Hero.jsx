import { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, FileText } from 'lucide-react';
import { track } from '@vercel/analytics';
import Button from '../components/Button';
import { personalInfo, hero } from '../data/portfolioData';

// Types out and deletes each role in a loop.
const TypewriterRoles = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!roles.length) return;
    const current = roles[index];
    const atEnd = !deleting && subIndex === current.length;
    const atStart = deleting && subIndex === 0;
    const delay = atEnd ? 1500 : deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setSubIndex((s) => s + (deleting ? -1 : 1));
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <span className="text-primary">
      {roles[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Circular headshot that gracefully falls back to an initials monogram when
// public/profile.jpg is missing — so it looks intentional before a photo exists.
const Avatar = () => {
  const [failed, setFailed] = useState(!personalInfo.photo);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 18 }}
      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary/30 glow-soft overflow-hidden grid place-items-center bg-card mb-6"
    >
      {failed ? (
        <span className="text-3xl font-bold text-primary glow-text">
          {personalInfo.avatarInitials}
        </span>
      ) : (
        <img
          src={personalInfo.photo}
          alt={personalInfo.name}
          width={112}
          height={112}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  );
};

const Hero = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgb(var(--color-primary) / 0.10), transparent 70%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 pt-28 pb-20 lg:pt-32"
    >
      {/* Cursor-reactive spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <div className="text-left space-y-8 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar />

              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">{hero.badge}</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block"
                >
                  {personalInfo.name.split(' ')[0]}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block text-primary glow-text"
                >
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </motion.span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-muted font-light mb-8 min-h-[2rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <TypewriterRoles roles={hero.roles} />
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {hero.buttons.map((btn) => (
                  <Button key={btn.label} href={btn.href} variant={btn.variant}>
                    {btn.label}
                    {btn.variant === 'primary' && <ArrowRight size={20} />}
                  </Button>
                ))}
                {personalInfo.resumeUrl && (
                  <Button
                    href={personalInfo.resumeUrl}
                    variant="ghost"
                    external
                    onClick={() => track('resume_download')}
                  >
                    <FileText size={18} />
                    {personalInfo.resumeLabel}
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Large Typography */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
                {hero.headlineLines.map((line, i) => (
                  <motion.span
                    key={i}
                    className={`block ${i === hero.headlineAccentLine ? 'text-primary glow-text' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h2>

              <motion.p
                className="text-lg text-muted leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {personalInfo.description}
              </motion.p>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 border border-primary/20 rounded-2xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 border border-primary/10 rounded-full"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          type="button"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Scroll to About section"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-muted">Scroll to explore</span>
          <ChevronDown className="text-primary" size={24} aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
