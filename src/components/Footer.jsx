import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
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
              <span className="text-primary">Umar</span> Akmal
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Building scalable systems and AI-powered applications that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {item}
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
            <h4 className="text-sm font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-card rounded-xl border border-white/10 hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="text-muted hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl border border-white/10 hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} className="text-muted hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl border border-white/10 hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} className="text-muted hover:text-primary transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted flex items-center gap-2">
            © {currentYear} Muhammed Umar Akmal. Built with
            <Heart size={14} className="text-primary inline" fill="currentColor" />
            and React
          </p>
          <p className="text-sm text-muted">
            Designed & Developed with passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
