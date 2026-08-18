import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Code2, Target, Wrench, TrendingUp } from 'lucide-react';

// Accessible, self-contained case-study modal. Rendered inside an
// <AnimatePresence> in Projects.jsx so it animates in/out. Pass the project
// (which must have a `caseStudy`) and an `onClose` handler.
const CaseStudyModal = ({ project, onClose }) => {
  const panelRef = useRef(null);
  const cs = project.caseStudy;

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Move focus into the dialog for keyboard/screen-reader users.
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const sections = [
    { key: 'problem', title: 'The problem', icon: Target, text: cs.problem },
    { key: 'build', title: 'What I built', icon: Wrench, text: cs.build },
    { key: 'outcome', title: 'The outcome', icon: TrendingUp, text: cs.outcome },
  ].filter((s) => s.text);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative w-full max-w-2xl my-8 sm:my-0 bg-card border border-foreground/10 rounded-2xl glow-soft outline-none"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-semibold text-primary mb-4">
            Case Study
          </span>
          <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold mb-2">
            {project.title}
          </h2>
          {(cs.role || cs.timeline) && (
            <p className="text-sm text-muted mb-6">
              {[cs.role, cs.timeline].filter(Boolean).join(' · ')}
            </p>
          )}

          {/* Metrics */}
          {cs.metrics?.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="text-center p-3 rounded-xl bg-surface/50 border border-foreground/5"
                >
                  <div className="text-base sm:text-lg font-bold text-primary leading-tight">
                    {m.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Narrative */}
          <div className="space-y-6">
            {sections.map(({ key, title, icon: Icon, text }) => (
              <div key={key}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} className="text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="text-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-foreground/5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/15 border border-primary/40 text-primary text-sm font-medium hover:bg-primary/25 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-foreground/10 text-sm font-medium hover:border-primary/50 transition-colors"
            >
              <Code2 size={16} />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyModal;
