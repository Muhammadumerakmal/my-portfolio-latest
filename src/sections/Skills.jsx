import { motion } from 'framer-motion';
import { Code2, Palette, Brain, Database, Server } from 'lucide-react';
import { skills } from '../data/portfolioData';
import Card from '../components/Card';

const skillCategories = [
  { key: 'backend', title: 'Backend', icon: Server, color: 'text-blue-400' },
  { key: 'frontend', title: 'Frontend', icon: Palette, color: 'text-purple-400' },
  { key: 'ai', title: 'AI & ML', icon: Brain, color: 'text-primary' },
  { key: 'database', title: 'Database', icon: Database, color: 'text-green-400' },
  { key: 'devops', title: 'DevOps', icon: Code2, color: 'text-orange-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12">
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
            <Code2 size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent applications
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const categorySkills = skills[category.key] || [];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card className="p-8 h-full" hover glow={category.key === 'ai'}>
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-primary/10 rounded-xl border border-primary/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={category.color} size={24} />
                    </motion.div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {categorySkills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05, duration: 0.5 }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all cursor-default"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12"
        >
          <Card className="p-8" glow>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Full Stack Expertise</h3>
              <p className="text-muted">
                End-to-end development capabilities across the entire technology stack
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Backend APIs', count: '15+' },
                { label: 'AI Integrations', count: '10+' },
                { label: 'Databases', count: '5+' },
                { label: 'Cloud Services', count: '8+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-surface/50 border border-white/5"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.count}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
