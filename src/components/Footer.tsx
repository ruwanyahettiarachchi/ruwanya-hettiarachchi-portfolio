import { ArrowUp, Heart, Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 relative overflow-hidden">
      {/* Top divider */}
      <div className="section-divider mb-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-1.5">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
              <span className="text-white font-black text-xs font-mono">R</span>
            </div>
            <span className="font-black text-base tracking-tight text-gray-900 dark:text-white font-sans">
              Ruwanya<span className="text-gradient">.H</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-sans">
            © {new Date().getFullYear()} Ruwanya Hettiarachchi. All rights reserved.
          </p>
        </div>

        {/* Social quick links */}
        <div className="flex items-center space-x-3">
          {[
            { href: 'https://github.com/ruwanyahettiarachchi', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/ruwanya-hettiarachchi', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
            { href: 'mailto:ruwanyahettiarachchi@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              title={s.label}
              className="p-2 rounded-xl text-gray-500 dark:text-grayCustom hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.12)' }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Made with + Back to top */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-xs text-gray-400 dark:text-gray-500 font-sans">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse" />
            <span>React & Tailwind</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', boxShadow: '0 4px 14px rgba(124,58,237,0.3)' }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
