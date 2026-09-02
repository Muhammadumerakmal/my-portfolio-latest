import { motion } from 'framer-motion';

// Shared section header used across every section, so the "badge → title →
// subtitle" pattern lives in one place. Adds two subtle touches for visual
// variety without new dependencies:
//   • a faint oversized index numeral behind the heading ("01", "02"…)
//   • an animated gradient underline that draws in under the accent word
// `align` ("center" | "left") lets sections alternate rhythm.
const SectionHeading = ({
  badge,
  icon: Icon,
  title,
  titleAccent,
  subtitle,
  index,
  align = 'center',
  className = '',
}) => {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {index && (
        <span
          aria-hidden="true"
          className={`pointer-events-none select-none absolute -top-10 sm:-top-14 font-bold leading-none text-primary/[0.06] text-[5rem] sm:text-[8rem] ${
            centered ? 'left-1/2 -translate-x-1/2' : 'left-0'
          }`}
        >
          {index}
        </span>
      )}

      {badge && (
        <motion.div
          className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          {Icon && <Icon size={16} className="text-primary" />}
          <span className="text-sm font-medium text-primary">{badge}</span>
        </motion.div>
      )}

      <h2 className="relative text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        {title ? <>{title} </> : null}
        {titleAccent && (
          <span className="relative inline-block text-primary">
            {titleAccent}
            <motion.span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary/20"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            />
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-lg text-muted ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
