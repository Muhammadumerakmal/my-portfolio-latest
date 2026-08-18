import { useEffect } from 'react';

// A tiny delight: when the visitor switches tabs, nudge them back via the
// document title (terminal-flavoured), then restore it when they return.
// Renders nothing; pure side effect.
const AWAY_TITLES = [
  '$ wait — come back',
  '// still shipping…',
  '👋 come back!',
];

const TabTitleGreeting = () => {
  useEffect(() => {
    const original = document.title;
    let idx = 0;

    const onVisibility = () => {
      if (document.hidden) {
        document.title = AWAY_TITLES[idx % AWAY_TITLES.length];
        idx += 1;
      } else {
        document.title = original;
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      document.title = original;
    };
  }, []);

  return null;
};

export default TabTitleGreeting;
