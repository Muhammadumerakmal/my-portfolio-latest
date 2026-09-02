import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { getTheme, toggleTheme } from '../lib/theme';

const ThemeToggle = ({ className = '' }) => {
  // Seed from the DOM (set by the inline boot script in index.html) so the
  // icon starts in sync with no flash.
  const [theme, setThemeState] = useState(() =>
    typeof document === 'undefined' ? 'dark' : getTheme()
  );

  // Re-sync whenever the theme is changed anywhere (toggle, palette, terminal).
  useEffect(() => {
    const sync = () => setThemeState(getTheme());
    window.addEventListener('themechange', sync);
    return () => window.removeEventListener('themechange', sync);
  }, []);

  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={() => toggleTheme()}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`grid place-items-center rounded-full text-foreground/70 hover:text-primary transition-colors ${className}`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="grid place-items-center"
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
