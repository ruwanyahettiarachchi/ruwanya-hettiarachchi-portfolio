import { useEffect, useState } from 'react';
import { Mail, Download, ArrowRight, Phone } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import profilepic from '../assets/profilepic.jpeg';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Software Engineering Undergraduate', 'Full Stack Developer', 'Quality Assurance Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background outline text matching wamsss.com */}
      <div className="absolute top-[20%] left-[-5%] text-[90px] sm:text-[130px] md:text-[160px] lg:text-[190px] font-black uppercase tracking-wider text-outline select-none pointer-events-none font-mono">
        SOFTWARE
      </div>
      <div className="absolute bottom-[20%] right-[-5%] text-[90px] sm:text-[130px] md:text-[160px] lg:text-[190px] font-black uppercase tracking-wider text-outline select-none pointer-events-none font-mono">
        ENGINEER
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Text and Stats */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-2 lg:order-1 animate-fade-in-left">
          
          <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-950/20 border border-purple-200/50 dark:border-darkBorder/80 px-3 py-1.5 rounded-lg w-fit shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-accent-pink animate-pulse"></span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-700 dark:text-accent-pink font-mono">
              SYSTEM.READY // RUNNING PORTFOLIO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight font-sans">
            Hi, I'm{' '}
            <span className="text-gradient">
              Ruwanya Hettiarachchi
            </span>
          </h1>

          <div className="h-8 md:h-10">
            <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
              &gt; <span className="text-purple-600 dark:text-accent-pink font-semibold border-r-2 border-purple-600 dark:border-accent-pink pr-1 animate-pulse font-mono">{typedText}</span>
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-500 dark:text-grayCustom max-w-xl leading-relaxed">
            A passionate Software Engineering undergraduate dedicated to crafting elegant web experiences, building scalable backend APIs, designing efficient database systems, and ensuring top-tier software quality.
          </p>

          {/* Statistics Block from wamsss.com */}
          <div className="grid grid-cols-3 gap-4 py-6 max-w-md border-y border-gray-150/40 dark:border-darkBorder/60">
            <div className="text-left">
              <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white font-mono">1+</h4>
              <p className="text-[10px] md:text-xs text-gray-400 dark:text-grayCustom uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div className="text-left border-x border-gray-150/45 dark:border-darkBorder/60 px-4">
              <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white font-mono">5+</h4>
              <p className="text-[10px] md:text-xs text-gray-400 dark:text-grayCustom uppercase tracking-wider mt-1">Completed Projects</p>
            </div>
            <div className="text-left pl-4">
              <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white font-mono">20+</h4>
              <p className="text-[10px] md:text-xs text-gray-400 dark:text-grayCustom uppercase tracking-wider mt-1">Skills & Tools</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/Ruwanya_Hettiarachchi_CV.pdf"
              download="Ruwanya_Hettiarachchi_CV.pdf"
              className="btn-primary flex items-center space-x-2 group text-sm"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary flex items-center space-x-2 text-sm"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Flat borders Social Icons */}
          <div className="flex items-center space-x-3 pt-3">
            <a
              href="https://github.com/ruwanyahettiarachchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-accent-pink/10 text-gray-600 dark:text-grayCustom hover:text-purple-600 dark:hover:text-accent-pink border border-gray-200/50 dark:border-darkBorder shadow-sm transition-all duration-300 hover:scale-105"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/ruwanya-hettiarachchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-accent-pink/10 text-gray-600 dark:text-grayCustom hover:text-purple-600 dark:hover:text-accent-pink border border-gray-200/50 dark:border-darkBorder shadow-sm transition-all duration-300 hover:scale-105"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ruwanyahettiarachchi@gmail.com"
              className="p-2.5 rounded-lg bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-accent-pink/10 text-gray-600 dark:text-grayCustom hover:text-purple-600 dark:hover:text-accent-pink border border-gray-200/50 dark:border-darkBorder shadow-sm transition-all duration-300 hover:scale-105"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+94703810618"
              className="p-2.5 rounded-lg bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-accent-pink/10 text-gray-600 dark:text-grayCustom hover:text-purple-600 dark:hover:text-accent-pink border border-gray-200/50 dark:border-darkBorder shadow-sm transition-all duration-300 hover:scale-105"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-fade-in-right">
          <div className="relative group w-60 h-60 sm:w-68 sm:h-68 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Minimalist Tech Outline Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink to-accent-orchid rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
            
            {/* Flat console-box container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-darkBorder bg-gray-50 dark:bg-darkCard p-2 transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src={profilepic}
                alt="Ruwanya Hettiarachchi"
                className="w-full h-full object-cover object-center rounded-xl scale-110 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Custom abstract decorations */}
            <div className="absolute -bottom-4 -left-4 px-3 py-1 bg-purple-600 dark:bg-accent-pink text-white font-mono text-[10px] font-bold rounded shadow-lg animate-float">
              PORT://5173
            </div>
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-pink-500 dark:bg-accent-orchid text-white font-mono text-[10px] font-bold rounded shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              ONLINE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
