import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 py-20">
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Available for Work</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
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
                className="text-xl md:text-2xl text-muted font-light mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.title}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button href="#projects" variant="primary">
                  View Projects
                  <ArrowRight size={20} />
                </Button>
                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>
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
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Building the
                </motion.span>
                <motion.span
                  className="block text-primary glow-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Web,
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Cinematically.
                </motion.span>
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
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-muted">Scroll to explore</span>
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
