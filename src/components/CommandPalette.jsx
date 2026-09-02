import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CornerDownLeft,
  Sun,
  FileText,
  TerminalSquare,
  Palette,
  ArrowRight,
  FolderGit2,
  Link2,
  Mail,
} from 'lucide-react';
import { track } from '@vercel/analytics';
import { navigation, personalInfo } from '../data/portfolioData';
import { ACCENTS, applyAccent } from '../data/accents';
import { toggleTheme } from '../lib/theme';

// A discoverable, keyboard-first navigator (⌘K / Ctrl+K). Complements the
// terminal: same reach, but searchable and mouse-free. All actions are
// client-side and reuse existing helpers so behaviour never diverges.
const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const openRef = useRef(false); // mirrors `open` for stable event handlers

  // Open/close go through helpers so state (and the ref) reset together in
  // event handlers — never synchronously inside an effect.
  const show = useCallback(() => {
    openRef.current = true;
    setQuery('');
    setActive(0);
    setOpen(true);
  }, []);

  const hide = useCallback(() => {
    openRef.current = false;
    setOpen(false);
  }, []);

  const go = useCallback((href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Full command set, grouped. Each has an `onSelect` side effect.
  const commands = useMemo(() => {
    const nav = navigation.map((item) => ({
      id: `nav-${item.href}`,
      group: 'Navigation',
      label: `Go to ${item.name}`,
      keywords: `${item.name} section jump scroll`,
      icon: ArrowRight,
      onSelect: () => go(item.href),
    }));

    const actions = [
      {
        id: 'theme',
        group: 'Actions',
        label: 'Toggle light / dark theme',
        keywords: 'theme dark light mode appearance',
        icon: Sun,
        onSelect: () => toggleTheme(),
      },
      {
        id: 'resume',
        group: 'Actions',
        label: 'Download résumé',
        keywords: 'resume cv download pdf',
        icon: FileText,
        onSelect: () => {
          track('resume_download');
          window.open(personalInfo.resumeUrl, '_blank', 'noopener');
        },
      },
      {
        id: 'terminal',
        group: 'Actions',
        label: 'Open interactive terminal',
        keywords: 'terminal shell console command',
        icon: TerminalSquare,
        onSelect: () => window.dispatchEvent(new CustomEvent('open-terminal')),
      },
    ];

    const accents = ACCENTS.map((a) => ({
      id: `accent-${a.name}`,
      group: 'Accent color',
      label: `Accent: ${a.name}`,
      keywords: `accent color theme ${a.name}`,
      icon: Palette,
      swatch: a.value,
      onSelect: () => applyAccent(a.value),
    }));

    const links = [
      {
        id: 'github',
        group: 'Links',
        label: 'Open GitHub',
        keywords: 'github code repos profile',
        icon: FolderGit2,
        onSelect: () => window.open(personalInfo.github, '_blank', 'noopener'),
      },
      {
        id: 'linkedin',
        group: 'Links',
        label: 'Open LinkedIn',
        keywords: 'linkedin profile connect',
        icon: Link2,
        onSelect: () => window.open(`https://${personalInfo.linkedin}`, '_blank', 'noopener'),
      },
      {
        id: 'email',
        group: 'Links',
        label: 'Send an email',
        keywords: 'email mail contact reach',
        icon: Mail,
        onSelect: () => {
          window.location.href = `mailto:${personalInfo.email}`;
        },
      },
    ];

    return [...nav, ...actions, ...accents, ...links];
  }, [go]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.keywords.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Open on ⌘K / Ctrl+K from anywhere; also open on request from the navbar
  // hint chip. Toggling reads the ref so the handler stays stable.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (openRef.current) hide();
        else show();
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', show);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', show);
    };
  }, [show, hide]);

  // Focus the input once it mounts (DOM side effect only — no setState here).
  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  const runCommand = useCallback(
    (cmd) => {
      if (!cmd) return;
      hide();
      // Defer so the overlay unmounts before we scroll/navigate.
      setTimeout(() => cmd.onSelect(), 60);
    },
    [hide]
  );

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(filtered[active]);
    } else if (e.key === 'Escape') {
      hide();
    }
  };

  // Scroll the active row into view during keyboard navigation.
  useEffect(() => {
    const node = listRef.current?.querySelector(`[data-idx="${active}"]`);
    node?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  let lastGroup = null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={hide}
          />
          <motion.div
            role="dialog"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl rounded-2xl border border-foreground/15 bg-card/95 backdrop-blur-md glow-soft overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 border-b border-foreground/10">
              <Search size={18} className="text-muted shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search…"
                aria-label="Search commands"
                spellCheck={false}
                autoComplete="off"
                className="flex-1 bg-transparent py-4 outline-none text-foreground placeholder:text-muted/60"
              />
              <kbd className="hidden sm:block px-2 py-1 rounded bg-surface border border-foreground/10 text-xs text-muted">
                Esc
              </kbd>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-muted">No matches.</p>
              )}
              {filtered.map((cmd, i) => {
                const Icon = cmd.icon;
                const showGroup = cmd.group !== lastGroup;
                lastGroup = cmd.group;
                const isActive = i === active;
                return (
                  <div key={cmd.id}>
                    {showGroup && (
                      <div className="px-3 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted/70">
                        {cmd.group}
                      </div>
                    )}
                    <button
                      type="button"
                      data-idx={i}
                      onMouseMove={() => setActive(i)}
                      onClick={() => runCommand(cmd)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                        isActive ? 'bg-primary/15 text-foreground' : 'text-muted hover:text-foreground'
                      }`}
                    >
                      {cmd.swatch ? (
                        <span
                          className="w-4 h-4 rounded-full border border-foreground/20 shrink-0"
                          style={{ backgroundColor: `rgb(${cmd.swatch})` }}
                          aria-hidden="true"
                        />
                      ) : (
                        <Icon size={17} className={isActive ? 'text-primary' : ''} aria-hidden="true" />
                      )}
                      <span className="flex-1 text-sm font-medium">{cmd.label}</span>
                      {isActive && (
                        <CornerDownLeft size={15} className="text-primary shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
