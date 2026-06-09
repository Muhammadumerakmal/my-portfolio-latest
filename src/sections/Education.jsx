import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { education, certifications, languages } from '../data/portfolioData';
import Card from '../components/Card';

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 md:px-12">
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
            <GraduationCap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Learning Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Cards */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={edu.type === 'certification' ? 'md:col-span-2' : ''}
            >
              <Card className="p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                    {edu.field && (
                      <p className="text-primary font-semibold mb-2">{edu.field}</p>
                    )}
                    <p className="text-sm text-muted">{edu.year}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-2 md:row-span-2"
          >
            <Card className="p-8 h-full" glow>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm font-medium">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:row-span-2"
          >
            <Card className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                  <Languages className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-xs text-muted">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.level === 'Native' ? '100%' : '90%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
