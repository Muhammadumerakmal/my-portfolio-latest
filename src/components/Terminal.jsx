import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalSquare, X } from 'lucide-react';
import {
  personalInfo,
  projects,
  skills,
  experiences,
  education,
  certifications,
} from '../data/portfolioData';

// ---------------------------------------------------------------------------
// An interactive, fully client-side terminal that lets visitors explore the
// portfolio by typing commands. All content is pulled from portfolioData so it
// never drifts. No backend, no API keys — safe on static hosting.
// A "line" is either a plain string or { text, href } for a link.
// ---------------------------------------------------------------------------

const SECTION_IDS = [
  'home', 'about', 'services', 'experience', 'education', 'projects', 'skills', 'contact',
];

const BANNER = [
  `${personalInfo.name} — interactive shell`,
  `Type "help" to see what you can do. Try "projects" or "goto contact".`,
  '',
];

const setTheme = (theme) => {
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
};

// Each command returns { lines?, action? }. `action` runs a side effect
// (scroll, theme, clear) after printing.
const COMMANDS = {
  help: () => ({
    lines: [
      'Available commands:',
      '  about        Who I am',
      '  projects     Selected work (add --all for repos)',
      '  skills       My tech stack',
      '  experience   Where I have worked',
      '  education    Education & certifications',
      '  contact      How to reach me',
      '  resume       Download my résumé',
      '  goto <sec>   Jump to a section (e.g. goto contact)',
      '  theme        Toggle light / dark',
      '  clear        Clear the screen',
      '',
      `Sections: ${SECTION_IDS.join(', ')}`,
    ],
  }),

  about: () => ({
    lines: [
      personalInfo.name,
      personalInfo.title,
      personalInfo.location,
      '',
      personalInfo.description,
    ],
  }),

  whoami: () => COMMANDS.about(),

  projects: (args) => {
    const showAll = args.includes('--all');
    const lines = [];
    projects.forEach((p) => {
      lines.push(`• ${p.title}  [${p.category || 'project'}]`);
      const link = p.demo || p.github;
      if (showAll) {
        if (p.demo) lines.push({ text: `    demo: ${p.demo}`, href: p.demo });
        lines.push({ text: `    code: ${p.github}`, href: p.github });
      } else if (link) {
        lines.push({ text: `    ${link}`, href: link });
      }
    });
    lines.push('');
    lines.push('Tip: "projects --all" shows demo + repo links.');
    return { lines };
  },

  skills: () => {
    const labels = {
      backend: 'Backend', frontend: 'Frontend', ai: 'AI & ML',
      database: 'Database', devops: 'DevOps',
    };
    const lines = [];
    Object.entries(skills).forEach(([key, list]) => {
      lines.push(`${(labels[key] || key).padEnd(10)} ${list.join(', ')}`);
    });
    return { lines };
  },

  experience: () => {
    const lines = [];
    experiences.forEach((e) => {
      lines.push(`${e.role} @ ${e.company}`);
      lines.push(`    ${e.period}`);
    });
    return { lines };
  },

  education: () => {
    const lines = education.map(
      (e) => `${e.institution}${e.field ? ` — ${e.field}` : ''} (${e.year})`
    );
    lines.push('');
    lines.push('Certifications:');
    certifications.forEach((c) => lines.push(`  • ${c.name} — ${c.issuer}`));
    return { lines };
  },

  contact: () => ({
    lines: [
      { text: `email:    ${personalInfo.email}`, href: `mailto:${personalInfo.email}` },
      { text: `linkedin: ${personalInfo.linkedin}`, href: `https://${personalInfo.linkedin}` },
      { text: `github:   ${personalInfo.github}`, href: personalInfo.github },
    ],
  }),

  resume: () => ({
    lines: [{ text: `Opening résumé → ${personalInfo.resumeUrl}`, href: personalInfo.resumeUrl }],
    action: { type: 'open', href: personalInfo.resumeUrl },
  }),

  theme: () => {
    const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
    return { lines: [`Switched to ${next} theme.`], action: { type: 'theme', theme: next } };
  },

  goto: (args) => {
    const target = (args[0] || '').toLowerCase();
    if (!SECTION_IDS.includes(target)) {
      return { lines: [`goto: unknown section "${target || ''}". Try: ${SECTION_IDS.join(', ')}`] };
    }
    return { lines: [`Jumping to ${target}…`], action: { type: 'goto', target } };
  },

  clear: () => ({ action: { type: 'clear' } }),

  echo: (args) => ({ lines: [args.join(' ')] }),

  sudo: () => ({ lines: ["Nice try. You already have root here 😉"] }),
};

const Terminal = () => {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState(() => [...BANNER]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);

  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Global shortcut: Ctrl+` toggles the terminal.
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Focus the input and scroll to the newest output whenever things change.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, open]);

  const runAction = useCallback((action) => {
    if (!action) return;
    if (action.type === 'clear') setLines([]);
    if (action.type === 'theme') setTheme(action.theme);
    if (action.type === 'open' || action.type === 'goto') {
      // Defer so the "Jumping…" line paints first.
      setTimeout(() => {
        if (action.type === 'open') window.open(action.href, '_blank', 'noopener');
        if (action.type === 'goto') {
          document.getElementById(action.target)?.scrollIntoView({ behavior: 'smooth' });
          setOpen(false);
        }
      }, 250);
    }
  }, []);

  const submit = useCallback(
    (raw) => {
      const trimmed = raw.trim();
      const echoed = [...lines, { text: `visitor@umer:~$ ${raw}`, prompt: true }];
      if (!trimmed) {
        setLines(echoed);
        return;
      }
      setHistory((h) => [...h, trimmed]);
      setHistIndex(-1);

      const [name, ...args] = trimmed.split(/\s+/);
      const cmd = COMMANDS[name.toLowerCase()];

      if (!cmd) {
        setLines([
          ...echoed,
          `command not found: ${name}. Type "help" for options.`,
          '',
        ]);
        return;
      }

      const { lines: out = [], action } = cmd(args) || {};
      if (action?.type === 'clear') {
        setLines([]);
      } else {
        setLines([...echoed, ...out, '']);
      }
      runAction(action);
    },
    [lines, runAction]
  );

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      submit(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const idx = histIndex === -1 ? history.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(idx);
      setInput(history[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex === -1) return;
      const idx = histIndex + 1;
      if (idx >= history.length) {
        setHistIndex(-1);
        setInput('');
      } else {
        setHistIndex(idx);
        setInput(history[idx]);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const renderLine = (line, i) => {
    if (typeof line === 'object' && line?.href) {
      return (
        <a
          key={i}
          href={line.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-primary hover:underline break-all"
        >
          {line.text}
        </a>
      );
    }
    const text = typeof line === 'object' ? line.text : line;
    const isPrompt = typeof line === 'object' && line.prompt;
    return (
      <div
        key={i}
        className={`whitespace-pre-wrap break-words ${isPrompt ? 'text-foreground' : 'text-muted'}`}
      >
        {text || ' '}
      </div>
    );
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open interactive terminal"
        title="Interactive terminal (Ctrl+`)"
        className="fixed bottom-6 right-6 z-[90] grid place-items-center w-12 h-12 rounded-full bg-card border border-primary/30 text-primary glow-soft hover:border-primary/60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <TerminalSquare size={20} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Interactive terminal"
            className="fixed bottom-24 right-6 z-[95] w-[min(92vw,30rem)] h-[min(70vh,26rem)] flex flex-col rounded-xl border border-foreground/15 bg-card/95 backdrop-blur-md glow-soft overflow-hidden font-mono text-sm"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-foreground/10 bg-surface/60">
              <span className="w-3 h-3 rounded-full bg-red-400/80" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" aria-hidden="true" />
              <span className="ml-2 text-xs text-muted">visitor@umer — bash</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close terminal"
                className="ml-auto p-1 rounded text-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
              >
                <X size={16} />
              </button>
            </div>

            {/* Output */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-0.5 leading-relaxed">
              {lines.map(renderLine)}

              {/* Prompt */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-primary shrink-0">visitor@umer:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label="Terminal input"
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted/60"
                  placeholder="type a command…"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
