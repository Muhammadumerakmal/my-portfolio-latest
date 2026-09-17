import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import Card from '../components/Card';
import SectionHeading from '../components/SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-32 px-6 md:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="03"
          badge="Professional Journey"
          icon={Briefcase}
          title="Work"
          titleAccent="Experience"
          subtitle="Building scalable systems and AI-powered products across AI, backend, and full-stack roles"
        />

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

                  {exp.highlights && (
                    <div className={exp.featured ? 'space-y-3 mb-6' : 'space-y-2 mb-4'}>
                      {exp.highlights.map((item) => (
                        <div
                          key={item}
                          className={`flex items-start gap-2 text-muted ${exp.featured ? 'text-sm' : 'text-xs'}`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-foreground/5 mt-auto">
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
