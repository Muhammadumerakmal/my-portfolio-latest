import { motion } from 'framer-motion';
import { ExternalLink, Code2, Rocket } from 'lucide-react';
import { projects, projectsMeta } from '../data/portfolioData';
import Card from '../components/Card';

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-32 px-6 md:px-12 bg-surface/50">
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
            <Rocket size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">{projectsMeta.badge}</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            {projectsMeta.title} <span className="text-primary">{projectsMeta.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {projectsMeta.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={project.featured ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <Card className={`p-8 h-full flex flex-col ${project.featured ? 'glow-border' : ''}`} glow={project.featured} tilt>
                {project.image && (
                  <div className="-mx-8 -mt-8 mb-6 overflow-hidden border-b border-foreground/5">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      width={1280}
                      height={800}
                      className={`w-full object-cover object-center ${project.featured ? 'h-56' : 'h-40'}`}
                    />
                  </div>
                )}
                <div className="flex-1">
                  {project.featured && (
                    <motion.span
                      className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-semibold text-primary mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      Featured
                    </motion.span>
                  )}

                  <h3 className={`font-bold mb-3 ${project.featured ? 'text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>

                  <p className={`text-muted leading-relaxed mb-6 ${project.featured ? 'text-base' : 'text-sm'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 bg-surface border border-foreground/10 rounded-lg font-medium text-primary ${
                          project.featured ? 'text-sm' : 'text-xs'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-foreground/5 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <Code2 size={18} />
                    <span>Code</span>
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href={projectsMeta.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-foreground/10 hover:border-primary/50 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Code2 size={18} />
            <span>{projectsMeta.viewAllLabel}</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
