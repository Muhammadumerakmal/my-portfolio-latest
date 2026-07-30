import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { personalInfo, footerContent, navigation } from '../data/portfolioData';
import { iconMap } from '../data/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = navigation.filter((item) => item.name !== 'Home');

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-primary">{footerContent.brandAccent}</span> {footerContent.brandRest}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {footerContent.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              {footerContent.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-card rounded-xl border border-foreground/10 hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="text-muted hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted flex items-center gap-2">
            © {currentYear} {personalInfo.name}. Built with
            <Heart size={14} className="text-primary inline" fill="currentColor" />
            and React
          </p>
          <p className="text-sm text-muted">
            {footerContent.bottomNote}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
