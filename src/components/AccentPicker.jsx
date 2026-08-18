import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { ACCENTS, applyAccent, getSavedAccent } from '../data/accents';

const Swatch = ({ accent, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={`Accent color ${accent.name}`}
    aria-pressed={active}
    title={accent.name}
    className="relative w-6 h-6 rounded-full border border-white/25 grid place-items-center transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    style={{ backgroundColor: `rgb(${accent.value})` }}
  >
    {active && <Check size={14} className="text-black" />}
  </button>
);

// A palette button that opens a row of accent swatches. Re-themes the whole
// site instantly by swapping the --color-primary token; choice persists.
const AccentPicker = ({ className = '' }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(getSavedAccent);

  const pick = (value) => {
    setCurrent(value);
    applyAccent(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change accent color"
        aria-expanded={open}
        title="Accent color"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`grid place-items-center rounded-full text-foreground/70 hover:text-primary transition-colors ${className}`}
      >
        <Palette size={18} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-3 z-50 p-3 rounded-2xl bg-card border border-foreground/10 glow-soft flex gap-2"
              role="menu"
            >
              {ACCENTS.map((a) => (
                <Swatch
                  key={a.value}
                  accent={a}
                  active={a.value === current}
                  onClick={() => pick(a.value)}
                />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccentPicker;
