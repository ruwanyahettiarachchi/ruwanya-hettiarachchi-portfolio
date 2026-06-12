import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-card mx-4 my-3 px-4 py-3 md:px-8 border border-gray-200/50 dark:border-darkBorder/50 rounded-2xl">
      <div className="flex items-center justify-between">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse-slow" />
          <span className="font-sans font-bold text-lg tracking-wider text-gray-800 dark:text-white">
            RUWANYA<span className="text-purple-600 dark:text-purple-400">.H</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`nav-link text-sm font-medium ${
                activeSection === link.id ? 'active text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 ml-4 rounded-xl bg-purple-50 dark:bg-darkCard text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-darkBorder/80 transition-colors duration-300 border border-purple-200/20"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-purple-50 dark:bg-darkCard text-purple-600 dark:text-purple-400 border border-purple-200/20"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-darkBorder/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-gray-100 dark:border-darkBorder/50 flex flex-col space-y-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-darkBorder/20'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
