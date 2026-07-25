import { motion } from 'framer-motion';
import { aboutContent } from '../data/portfolioData';
import { iconMap } from '../data/icons';
import Card from '../components/Card';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {aboutContent.title} <span className="text-primary">{aboutContent.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {aboutContent.mainText}
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {aboutContent.subText}
              </p>
            </div>

            <p className="text-lg text-muted leading-relaxed">
              {aboutContent.description}
            </p>

            <div className="pt-6">
              <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                {aboutContent.coreTechLabel}
              </h4>
              <div className="flex flex-wrap gap-3">
                {aboutContent.highlights.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-card rounded-lg border border-primary/20 text-sm font-medium text-primary cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {aboutContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 text-center" glow>
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm text-muted">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {aboutContent.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full">
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 w-fit mb-4">
                    <Icon size={32} className={feature.color} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
