// Shared theme helpers so every entry point (ThemeToggle, Terminal, and the
// command palette) flips the theme identically — no divergent copies.

export const getTheme = () =>
  document.documentElement.classList.contains('light') ? 'light' : 'dark';

// Apply a concrete theme ('light' | 'dark'): toggle the <html> class, keep the
// browser UI colour in sync, and remember the choice.
export const setTheme = (theme) => {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  try {
    localStorage.setItem('theme', theme);
  } catch {
    /* storage unavailable — ignore */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#ffffff' : '#000000');
  // Let any mounted toggle re-sync its icon when the theme is changed elsewhere
  // (e.g. from the command palette or terminal).
  window.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
  return theme;
};

// Flip to the opposite theme and return the new value.
export const toggleTheme = () => setTheme(getTheme() === 'light' ? 'dark' : 'light');
