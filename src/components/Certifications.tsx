import { Award, ShieldCheck, BookOpen, Milestone, Trophy } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle University',
      year: '2023',
      icon: <ShieldCheck className="w-5 h-5" />,
      description: 'Validation of fundamental database design, query optimizations, SQL constructs, and schema administration.',
      gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
      glow: 'rgba(124,58,237,0.3)',
      tag: 'Database',
      tagColor: 'rgba(124,58,237,0.1)',
      tagText: '#7c3aed',
    },
    {
      title: 'Trainee Software Engineer Internship Certificate',
      issuer: 'eArrow (Pvt) Ltd',
      year: '2025',
      icon: <Award className="w-5 h-5" />,
      description: 'Completion of 6-month hands-on industrial training building and deploying student management systems.',
      gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      glow: 'rgba(236,72,153,0.3)',
      tag: 'Industry',
      tagColor: 'rgba(236,72,153,0.1)',
      tagText: '#db2777',
    },
    {
      title: 'English Diploma — Level 3',
      issuer: 'American College of Higher Education',
      year: '2022',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Professional qualification focusing on business communications, technical report drafting, and presentation.',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      glow: 'rgba(6,182,212,0.3)',
      tag: 'Language',
      tagColor: 'rgba(6,182,212,0.1)',
      tagText: '#0e7490',
    },
    {
      title: 'Workshops & Hackathons',
      issuer: 'University & Tech Communities',
      year: '2022–2025',
      icon: <Milestone className="w-5 h-5" />,
      description: 'Active participation in university hackathons and developer workshops centering on Azure cloud and Agile.',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      glow: 'rgba(245,158,11,0.3)',
      tag: 'Events',
      tagColor: 'rgba(245,158,11,0.1)',
      tagText: '#d97706',
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(245,158,11,0.06) 0%, transparent 60%), radial-gradient(ellipse at 30% 60%, rgba(124,58,237,0.06) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 tracking-widest uppercase">Achievements</span>
          </div>
          <h2 className="section-heading mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }} />
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="console-card group flex items-start space-x-5"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: cert.gradient, boxShadow: `0 8px 20px ${cert.glow}` }}
              >
                {cert.icon}
              </div>

              <div className="space-y-2 flex-grow min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight font-sans">
                    {cert.title}
                  </h3>
                  <span className="px-2 py-0.5 text-[9px] font-mono font-bold rounded-full flex-shrink-0"
                    style={{ background: cert.tagColor, color: cert.tagText, border: `1px solid ${cert.tagText}30` }}>
                    {cert.tag}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-grayCustom font-sans">{cert.issuer}</h4>
                  <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">{cert.year}</span>
                </div>

                <p className="text-xs text-gray-500 dark:text-grayCustom leading-relaxed font-sans pt-1">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
