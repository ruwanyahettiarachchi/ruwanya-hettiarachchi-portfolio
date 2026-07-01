import { useEffect, useState } from 'react';
import { Mail, Download, ArrowRight, Phone, Sparkles, Code2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import profilepic from '../assets/profilepic.jpeg';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Software Engineering Undergraduate', 'Full Stack Developer', 'Quality Assurance Engineer', 'Problem Solver'];
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
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex flex-col justify-center relative overflow-hidden">

      {/* Background Glow Orbs */}
      <div className="glow-orb w-96 h-96 bg-purple-500 top-[-80px] left-[-80px]" />
      <div className="glow-orb w-80 h-80 bg-pink-500 bottom-[-60px] right-[-60px]" />
      <div className="glow-orb w-64 h-64 bg-violet-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Background outline text */}
      <div className="absolute top-[18%] left-[-3%] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black uppercase tracking-widest text-outline select-none pointer-events-none font-mono">
        SOFTWARE
      </div>
      <div className="absolute bottom-[18%] right-[-3%] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black uppercase tracking-widest text-outline select-none pointer-events-none font-mono">
        ENGINEER
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-14 items-center z-10">

        {/* Left Side */}
        <div className="lg:col-span-7 flex flex-col space-y-7 text-left order-2 lg:order-1 animate-fade-in-left">

          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-2xl w-fit"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600 dark:bg-purple-400"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 font-mono">
              Available for opportunities
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-sm font-mono text-gray-500 dark:text-grayCustom tracking-widest uppercase">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none font-sans">
              <span className="text-gray-900 dark:text-white">Ruwanya</span>
              <br />
              <span className="text-gradient">Hettiarachchi</span>
            </h1>
          </div>

          {/* Typed Role */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 text-purple-600 dark:text-purple-400">
              <Code2 className="w-4 h-4" />
              <span className="font-mono text-xs text-gray-400 dark:text-gray-500">//</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 font-sans">
              <span className="text-purple-600 dark:text-accent-purple border-r-2 border-purple-500 dark:border-purple-400 pr-1">{typedText}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-500 dark:text-grayCustom max-w-xl leading-relaxed font-sans">
            A passionate Software Engineering undergraduate dedicated to crafting elegant web experiences, building scalable backend APIs, and ensuring top-tier software quality.
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap gap-5 py-4">
            {[
              { value: '1+', label: 'Years Experience', color: 'from-violet-500 to-purple-600' },
              { value: '5+', label: 'Projects Completed', color: 'from-pink-500 to-rose-500' },
              { value: '20+', label: 'Skills & Tools', color: 'from-cyan-500 to-blue-500' },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <h4 className={`text-3xl md:text-4xl font-black font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </h4>
                <p className="text-[10px] md:text-xs text-gray-400 dark:text-grayCustom uppercase tracking-wider mt-1 font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/Ruwanya_Hettiarachchi_CV.pdf"
              download="Ruwanya_Hettiarachchi_CV.pdf"
              className="btn-primary flex items-center space-x-2 group text-sm"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              <span>Download CV</span>
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
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-1">
            {[
              { href: 'https://github.com/ruwanyahettiarachchi', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/ruwanya-hettiarachchi', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: 'mailto:ruwanyahettiarachchi@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
              { href: 'tel:+94703810618', icon: <Phone className="w-4 h-4" />, label: 'Phone' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.label !== 'Email' && social.label !== 'Phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={social.label}
                className="p-2.5 rounded-xl text-gray-500 dark:text-grayCustom transition-all duration-300 hover:scale-110 hover:text-purple-600 dark:hover:text-purple-400"
                style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)' }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-fade-in-right">
          <div className="relative group">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-3 rounded-3xl animate-spin-slow opacity-60"
              style={{ background: 'conic-gradient(from 0deg, #7c3aed, #a855f7, #ec4899, #f97316, #7c3aed)', borderRadius: '28px', filter: 'blur(4px)' }}
            />
            {/* Glow behind */}
            <div className="absolute -inset-2 rounded-3xl opacity-40 group-hover:opacity-70 transition duration-700"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(236,72,153,0.5))', filter: 'blur(20px)' }}
            />
            {/* Photo container */}
            <div className="relative w-60 h-72 sm:w-68 sm:h-80 md:w-72 md:h-84 lg:w-80 lg:h-96 rounded-3xl overflow-hidden"
              style={{ border: '2px solid rgba(167,139,250,0.3)', background: '#0d0d1a' }}>
              <img
                src={profilepic}
                alt="Ruwanya Hettiarachchi"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: 'linear-gradient(to top, rgba(13,13,26,0.6) 0%, transparent 100%)' }}
              />
            </div>

            {/* Floating skill chips */}
            <div className="absolute -left-14 top-12 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold text-white shadow-lg animate-float"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 8px 24px rgba(124,58,237,0.4)' }}>
              React.js
            </div>
            <div className="absolute -right-12 top-1/3 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold text-white shadow-lg animate-float"
              style={{ background: 'linear-gradient(135deg, #ec4899, #f97316)', boxShadow: '0 8px 24px rgba(236,72,153,0.4)', animationDelay: '1.5s' }}>
              Node.js
            </div>
            <div className="absolute -left-10 bottom-16 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold text-white shadow-lg animate-float"
              style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)', boxShadow: '0 8px 24px rgba(8,145,178,0.4)', animationDelay: '3s' }}>
              TypeScript
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
