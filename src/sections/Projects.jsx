import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Rocket, BookOpen, Maximize2, X } from 'lucide-react';
import { track } from '@vercel/analytics';
import { projects, projectsMeta } from '../data/portfolioData';
import Card from '../components/Card';
import CaseStudyModal from '../components/CaseStudyModal';
import SectionHeading from '../components/SectionHeading';

// Build the filter list from the categories actually present in the data,
// so the chips never drift out of sync with the projects themselves.
const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

const INITIAL_COUNT = 6; // featured (2x2) + 2 beside it + 3 below fills the grid exactly

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCase, setActiveCase] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { src, title } | null
  const [showAll, setShowAll] = useState(false);

  // While the lightbox is open, close on Escape and lock background scroll.
  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);
  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  const visibleProjects = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hiddenCount = filtered.length - visibleProjects.length;

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-32 px-6 md:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="05"
          badge={projectsMeta.badge}
          icon={Rocket}
          title={projectsMeta.title}
          titleAccent={projectsMeta.titleAccent}
          subtitle={projectsMeta.subtitle}
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? 'bg-primary/15 border-primary/40 text-primary'
                    : 'bg-card border-foreground/10 text-muted hover:border-primary/30 hover:text-foreground'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-60">
                  {category === 'All' ? projects.length : projects.filter((p) => p.category === category).length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className={project.featured ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <Card className={`p-6 sm:p-8 h-full flex flex-col ${project.featured ? 'glow-border' : ''}`} glow={project.featured} tilt>
                <div className={`group -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden border-b border-foreground/5 relative ${project.featured ? 'lg:flex-1 lg:min-h-0 lg:max-h-[36rem]' : ''}`}>
                  {project.image ? (
                    <button
                      type="button"
                      onClick={() => setLightbox({ src: project.image, title: project.title })}
                      aria-label={`Enlarge ${project.title} screenshot`}
                      className={`block w-full cursor-zoom-in ${project.featured ? 'lg:h-full' : ''} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        decoding="async"
                        width={1280}
                        height={800}
                        className={`w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 ${project.featured ? 'h-64 sm:h-80 lg:h-full' : 'h-40'}`}
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Maximize2 size={16} />
                      </span>
                    </button>
                  ) : (
                    // No screenshot: branded banner with a project monogram and a
                    // live/code badge so every card has a consistent header.
                    <div
                      aria-hidden="true"
                      className={`relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/25 via-card to-surface ${project.featured ? 'h-64 sm:h-80 lg:h-full' : 'h-40'}`}
                    >
                      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px] text-primary/40" />
                      <span className="relative text-5xl font-black tracking-tight text-primary/60 select-none">
                        {project.title.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join('')}
                      </span>
                      {project.demo && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className={`flex-1 ${project.featured ? 'lg:flex-none' : ''}`}>
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
                      onClick={() => track('project_demo', { project: project.title })}
                      className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  {project.caseStudy && (
                    <motion.button
                      type="button"
                      onClick={() => setActiveCase(project)}
                      className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors ml-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                      whileHover={{ x: 3 }}
                    >
                      <BookOpen size={18} />
                      <span>Read case study</span>
                    </motion.button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {(hiddenCount > 0 || (showAll && filtered.length > INITIAL_COUNT)) && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {showAll ? 'Show fewer projects' : `Show ${hiddenCount} more project${hiddenCount === 1 ? '' : 's'}`}
            </button>
          </div>
        )}

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

      <AnimatePresence>
        {activeCase && (
          <CaseStudyModal project={activeCase} onClose={() => setActiveCase(null)} />
        )}
      </AnimatePresence>

      {/* Screenshot lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-label={`${lightbox.title} screenshot`}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
            <motion.img
              src={lightbox.src}
              alt={`${lightbox.title} preview`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-6xl w-auto rounded-xl border border-foreground/15 shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full bg-card border border-foreground/15 text-foreground hover:text-primary hover:border-primary/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
