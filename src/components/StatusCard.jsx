import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Hammer } from 'lucide-react';
import { personalInfo, hero, projects } from '../data/portfolioData';

// Formats the current time in the configured timezone (e.g. Karachi), so the
// card shows real local time for the visitor to gauge overlap.
const localTime = () => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: hero.timezone || 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());
  } catch {
    return '';
  }
};

const StatusCard = () => {
  const [time, setTime] = useState(localTime);

  // Tick once a minute — enough for a clock, cheap on the main thread.
  useEffect(() => {
    const id = setInterval(() => setTime(localTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  const shipped = projects.length;
  const live = projects.filter((p) => p.demo).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative z-10 glass rounded-2xl border border-foreground/10 glow-border p-5 max-w-md"
    >
      {/* Availability + local time */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          {hero.badge}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted" title={personalInfo.location}>
          <Clock size={14} className="text-primary" aria-hidden="true" />
          <span className="tabular-nums">{time}</span>
          <span className="text-muted/70">{hero.timezoneLabel}</span>
        </span>
      </div>

      {/* Currently building */}
      {hero.currentlyBuilding && (
        <div className="flex items-start gap-2.5 mb-4 text-sm">
          <Hammer size={15} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-muted leading-relaxed">
            <span className="text-foreground/90 font-medium">Currently building</span>{' '}
            {hero.currentlyBuilding}.
          </p>
        </div>
      )}

      {/* Mini stat row */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-foreground/10">
        <div>
          <div className="text-2xl font-bold text-primary tabular-nums">{shipped}+</div>
          <div className="text-xs text-muted">Projects shipped</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary tabular-nums">{live}</div>
          <div className="text-xs text-muted">Live demos</div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatusCard;
