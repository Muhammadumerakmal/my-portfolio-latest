import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { services, servicesMeta } from '../data/portfolioData';
import { iconMap } from '../data/icons';
import Card from '../components/Card';

const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-32 px-6 md:px-12">
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
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">{servicesMeta.badge}</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            {servicesMeta.title} <span className="text-primary">{servicesMeta.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {servicesMeta.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full flex items-start gap-5" tilt>
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 shrink-0">
                    {Icon && <Icon size={28} className="text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
