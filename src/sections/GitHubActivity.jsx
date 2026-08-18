import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, GitBranch, Code2, ExternalLink, FolderGit2 } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';
import Card from '../components/Card';

// Username derived from the profile URL in one place.
const USERNAME = personalInfo.github.replace(/\/+$/, '').split('/').pop();
const CACHE_KEY = `gh:v2:${USERNAME}`;

// Shown if the API is unreachable or rate-limited (60 req/hr/IP unauthenticated),
// so the section never renders broken or empty. Grounded, not inflated.
const STATIC_FALLBACK = {
  publicRepos: 69,
  followers: 28,
  following: 12,
  languages: [
    ['Python', 0], ['TypeScript', 0], ['JavaScript', 0], ['HTML', 0],
  ],
  recent: [],
  live: false,
};

const relativeTime = (iso) => {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
};

const summarize = (profile, repos) => {
  const counts = {};
  repos.forEach((r) => {
    if (r.fork || !r.language) return;
    counts[r.language] = (counts[r.language] || 0) + 1;
  });
  const languages = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const recent = repos
    .filter((r) => !r.fork)
    .slice(0, 4)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      language: r.language,
      updated: r.updated_at,
    }));
  return {
    publicRepos: profile.public_repos,
    followers: profile.followers,
    following: profile.following,
    languages: languages.length ? languages : STATIC_FALLBACK.languages,
    recent,
    live: true,
  };
};

const readCache = () => {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

const GitHubActivity = () => {
  // Seed from this session's cache if present, so no setState runs in the effect.
  const [data, setData] = useState(() => readCache() || STATIC_FALLBACK);
  const [loading, setLoading] = useState(() => !readCache());

  useEffect(() => {
    if (readCache()) return; // already have a fresh summary in state

    const controller = new AbortController();
    (async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
            signal: controller.signal,
          }),
        ]);
        if (!profileRes.ok || !reposRes.ok) return; // keep fallback (e.g. rate-limited)
        const profile = await profileRes.json();
        const repos = await reposRes.json();
        if (!Array.isArray(repos) || controller.signal.aborted) return;
        const summary = summarize(profile, repos);
        setData(summary);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(summary));
        } catch {
          /* ignore */
        }
      } catch {
        /* network error / abort — keep fallback */
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  const topLanguage = data.languages[0]?.[0] || skills.frontend[0];
  const maxLangCount = Math.max(1, ...data.languages.map(([, n]) => n));

  const stats = [
    { icon: FolderGit2, label: 'Public repos', value: `${data.publicRepos}+` },
    { icon: Users, label: 'Followers', value: `${data.followers}` },
    { icon: UserPlus, label: 'Following', value: `${data.following}` },
    { icon: GitBranch, label: 'Top language', value: topLanguage },
  ];

  return (
    <section id="github" className="scroll-mt-24 py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              {data.live && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              )}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">
              {loading ? 'Fetching live data…' : data.live ? 'Live from GitHub' : 'Building in public'}
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            GitHub <span className="text-primary">Activity</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I ship constantly — here&apos;s a live snapshot of what I&apos;ve been building.
          </p>
        </motion.div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Card className="p-5 sm:p-6 h-full text-center">
                  <Icon className="text-primary mx-auto mb-2" size={22} aria-hidden="true" />
                  <div
                    className={`text-2xl sm:text-3xl font-bold text-primary mb-1 break-words ${
                      loading ? 'animate-pulse opacity-60' : ''
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <Card className="p-6 sm:p-8" glow>
            <h3 className="text-xl font-bold mb-6">Most-used languages</h3>
            <div className="space-y-4">
              {data.languages.map(([name, count], i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{name}</span>
                    {count > 0 && <span className="text-muted text-xs">{count} repos</span>}
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/50"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max(12, (count / maxLangCount) * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.2, duration: 0.7 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Recently shipped */}
          <Card className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6">Recently shipped</h3>
            {data.recent.length > 0 ? (
              <div className="space-y-3">
                {data.recent.map((repo, i) => (
                  <motion.a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-foreground/5 hover:border-primary/20 transition-all group"
                  >
                    <Code2 size={18} className="text-primary shrink-0" />
                    <span className="font-medium truncate">{repo.name}</span>
                    <span className="ml-auto flex items-center gap-2 text-xs text-muted shrink-0">
                      {repo.language && <span>{repo.language}</span>}
                      <span>·</span>
                      <span>{relativeTime(repo.updated)}</span>
                    </span>
                  </motion.a>
                ))}
              </div>
            ) : (
              <p className="text-muted text-sm">
                Explore the full set of projects and experiments on GitHub.
              </p>
            )}

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-card border border-foreground/10 hover:border-primary/50 transition-all text-sm font-medium"
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <FolderGit2 size={18} />
              <span>View GitHub profile</span>
              <ExternalLink size={15} />
            </motion.a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
