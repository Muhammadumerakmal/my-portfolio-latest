import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus } from 'lucide-react';
import { faqs, faqMeta } from '../data/portfolioData';
import Card from '../components/Card';
import SectionHeading from '../components/SectionHeading';

const FAQ = () => {
  // Single-open accordion; first item open by default for immediate content.
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          index="08"
          badge={faqMeta.badge}
          icon={HelpCircle}
          title={faqMeta.title}
          titleAccent={faqMeta.titleAccent}
          subtitle={faqMeta.subtitle}
        />

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <Card key={item.q} className="overflow-hidden" hover={false}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="font-semibold text-base sm:text-lg">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary"
                    >
                      <Plus size={18} aria-hidden="true" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
