import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import Card from '../components/Card';

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-surface/50">
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
            <Briefcase size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Professional Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Building scalable systems and AI-powered solutions across leading tech companies
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={exp.featured ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <Card className={`p-8 h-full flex flex-col ${exp.featured ? 'glow-border' : ''}`} glow={exp.featured}>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`font-bold mb-2 ${exp.featured ? 'text-3xl' : 'text-xl'}`}>
                        {exp.company}
                      </h3>
                      <p className={`text-primary font-semibold ${exp.featured ? 'text-lg' : 'text-base'}`}>
                        {exp.role}
                      </p>
                    </div>
                    {exp.featured && (
                      <motion.span
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-semibold text-primary"
                        whileHover={{ scale: 1.05 }}
                      >
                        Current
                      </motion.span>
                    )}
                  </div>

                  <p className={`text-muted leading-relaxed ${exp.featured ? 'text-lg mb-6' : 'text-sm mb-4'}`}>
                    {exp.description}
                  </p>

                  {exp.featured && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Backend Architecture & API Development</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>AI Integration & Automation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Production Deployment & Optimization</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 mt-auto">
                  <p className="text-sm text-muted">{exp.period}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
