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
    <section id="home" className="min-h-screen pt-28 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-pink-300 dark:bg-pink-900/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-10 right-1/4 w-60 h-60 bg-teal-200 dark:bg-teal-900/10 rounded-full filter blur-2xl opacity-20 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Intro Text */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1 animate-fade-in-left">
          <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/30 px-4 py-2 rounded-full w-fit mx-auto lg:mx-0 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-ping"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight font-sans">
            Hi, I'm{' '}
            <span className="text-gradient">
              Ruwanya Hettiarachchi
            </span>
          </h1>

          <div className="h-8 md:h-10">
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
              I am a <span className="text-purple-600 dark:text-purple-400 font-semibold border-r-2 border-purple-600 dark:border-purple-400 pr-1 animate-pulse">{typedText}</span>
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A passionate Software Engineering undergraduate dedicated to crafting elegant web experiences, building scalable backend APIs, designing efficient database systems, and ensuring top-tier software quality.
          </p>

          {/* Social Links and Call to Action */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="/Ruwanya_Hettiarachchi_CV.pdf"
              download="Ruwanya_Hettiarachchi_CV.pdf"
              className="btn-primary flex items-center space-x-2 group"
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
              className="btn-secondary flex items-center space-x-2"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
            <a
              href="https://github.com/ruwanyahettiarachchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-purple-950/20 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 border border-gray-200/50 dark:border-darkBorder/50 shadow-sm transition-all duration-300 hover:scale-105"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ruwanya-hettiarachchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-purple-950/20 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 border border-gray-200/50 dark:border-darkBorder/50 shadow-sm transition-all duration-300 hover:scale-105"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ruwanyahettiarachchi@gmail.com"
              className="p-3 rounded-xl bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-purple-950/20 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 border border-gray-200/50 dark:border-darkBorder/50 shadow-sm transition-all duration-300 hover:scale-105"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+94703810618"
              className="p-3 rounded-xl bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-purple-950/20 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 border border-gray-200/50 dark:border-darkBorder/50 shadow-sm transition-all duration-300 hover:scale-105"
              title="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-fade-in-right">
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            {/* Glowing borders */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400 rounded-full blur opacity-45 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-purple-600 to-pink-500 rounded-full blur opacity-25 group-hover:opacity-55 transition duration-1000"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-darkCard shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={profilepic}
                alt="Ruwanya Hettiarachchi"
                className="w-full h-full object-cover object-center scale-110 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Custom abstract decorations */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 dark:bg-purple-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30 dark:shadow-purple-400/20 animate-float">
              💻
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-pink-500 dark:bg-pink-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/30 dark:shadow-pink-400/20 animate-float" style={{ animationDelay: '1.5s' }}>
              ✨
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
