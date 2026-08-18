// Live-swappable accent colors. Values are space-separated RGB channels so
// they drop straight into the `--color-primary` token that drives every
// primary/glow utility across the site.
export const ACCENTS = [
  { name: 'Lime', value: '163 255 18' }, // default (matches index.css)
  { name: 'Cyan', value: '34 211 238' },
  { name: 'Violet', value: '167 139 250' },
  { name: 'Amber', value: '251 191 36' },
  { name: 'Rose', value: '251 113 133' },
  { name: 'Sky', value: '56 189 248' },
];

export const DEFAULT_ACCENT = ACCENTS[0].value;

// Apply an accent by overriding the CSS variable on <html>. For the default
// lime we *remove* the inline override so the theme's own light/dark values
// (which keep lime readable on light backgrounds) take over again.
export const applyAccent = (value) => {
  const root = document.documentElement;
  if (value && value !== DEFAULT_ACCENT) {
    root.style.setProperty('--color-primary', value);
  } else {
    root.style.removeProperty('--color-primary');
  }
  try {
    localStorage.setItem('accent', value);
  } catch {
    /* storage unavailable — ignore */
  }
};

export const getSavedAccent = () => {
  try {
    return localStorage.getItem('accent') || DEFAULT_ACCENT;
  } catch {
    return DEFAULT_ACCENT;
  }
};
