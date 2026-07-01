import { GraduationCap, Award, Layers, Database, Code, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern client frameworks and robust server APIs.',
      gradient: 'from-violet-500 to-purple-600',
      glow: 'rgba(124,58,237,0.2)',
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Backend Development',
      description: 'Designing structured servers, business logic, and RESTful services using C#, PHP, and Node.js.',
      gradient: 'from-pink-500 to-rose-500',
      glow: 'rgba(236,72,153,0.2)',
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Database Design',
      description: 'Modeling normalized entity relationships, optimizing queries, working with MySQL and SQL Server.',
      gradient: 'from-cyan-500 to-teal-500',
      glow: 'rgba(6,182,212,0.2)',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Software Quality Assurance',
      description: 'Ensuring reliability through regression, system, functional testing, and defect tracking.',
      gradient: 'from-indigo-500 to-blue-500',
      glow: 'rgba(99,102,241,0.2)',
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.08) 0%, transparent 70%), radial-gradient(ellipse at 80% 50%, rgba(236,72,153,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)' }}>
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="section-heading mb-4">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left: Bio & Education */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-4">
              <p className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 tracking-widest uppercase">
                // Profile Summary
              </p>
              <p className="text-base text-gray-600 dark:text-grayCustom leading-relaxed font-sans">
                I'm an energetic Software Engineering undergraduate from <strong className="text-gray-900 dark:text-white">SLIIT</strong>, recently completed my internship and transitioned into quality assurance while actively working on full-stack projects.
              </p>
              <p className="text-base text-gray-600 dark:text-grayCustom leading-relaxed font-sans">
                My goal is to build secure, robust, and client-centric solutions using Agile workflows and modern software patterns.
              </p>
            </div>

            {/* Education & Performance cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="console-card p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(167,139,250,0.1))' }}>
                  <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm font-sans">Education</h4>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-mono font-semibold mt-1">SLIIT · 2022–2026</p>
                  <p className="text-[11px] text-gray-400 dark:text-grayCustom mt-1 font-sans">BSc. (Hons) in Software Engineering</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">
                    ● Awaiting Results
                  </span>
                </div>
              </div>

              <div className="console-card p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(251,113,133,0.1))' }}>
                  <Award className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm font-sans">Performance</h4>
                  <p className="text-xs text-pink-600 dark:text-pink-400 font-mono font-semibold mt-1">CGPA: 3.3 / 4.0</p>
                  <p className="text-[11px] text-gray-400 dark:text-grayCustom mt-1 font-sans">Focus in development & testing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Expertise */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 tracking-widest uppercase">
              // Core Expertise
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="console-card group cursor-default p-6 space-y-4"
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`, backgroundImage: `linear-gradient(135deg, #${card.gradient.includes('violet') ? '7c3aed' : card.gradient.includes('pink') ? 'ec4899' : card.gradient.includes('cyan') ? '06b6d4' : '6366f1'}, #${card.gradient.includes('purple') ? 'a855f7' : card.gradient.includes('rose') ? 'f43f5e' : card.gradient.includes('teal') ? '14b8a6' : '3b82f6'})`, boxShadow: `0 8px 20px ${card.glow}` }}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 font-sans">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-grayCustom leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
