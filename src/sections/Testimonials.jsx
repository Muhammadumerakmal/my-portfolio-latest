import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';
import Card from '../components/Card';

const initialsOf = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();

const Testimonials = () => {
  // Stay invisible until real quotes exist — no fabricated social proof.
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 md:py-32 px-6 md:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Quote size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Kind Words</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            What People <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        <div
          className={`grid gap-6 ${
            testimonials.length === 1
              ? 'max-w-2xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 sm:p-8 h-full flex flex-col" glow={i === 0}>
                <Quote className="text-primary/40 mb-4" size={32} aria-hidden="true" />
                <p className="text-muted leading-relaxed flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-foreground/5">
                  <div className="grid place-items-center w-11 h-11 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-sm shrink-0">
                    {initialsOf(t.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{t.name}</p>
                    <p className="text-sm text-muted truncate">
                      {t.role}
                      {t.company ? ` · ${t.company}` : ''}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
