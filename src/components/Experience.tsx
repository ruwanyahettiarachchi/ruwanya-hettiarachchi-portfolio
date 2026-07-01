import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  typeColor: string;
  highlights: string[];
  skills: string[];
  gradient: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Developer',
      company: 'Sun System Technologies & Developers (Pvt) Ltd',
      location: 'Sri Lanka',
      period: 'September 2025 – Present',
      type: 'Full-time',
      typeColor: 'rgba(16,185,129,0.1)',
      highlights: [
        'Design, develop, and maintain web applications and internal software systems across multiple active platforms.',
        'Collaborate with cross-functional teams to gather requirements and translate them into scalable technical solutions.',
        'Build and optimize backend APIs, business logic, and database schemas to support product features.',
        'Participate in code reviews, agile sprints, and continuous delivery pipelines to ensure high-quality software releases.'
      ],
      skills: ['Full Stack Development', 'REST APIs', 'Database Design', 'Agile Methodology', 'Git', 'Code Review'],
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      role: 'Software Engineer Intern',
      company: 'eArrow (Pvt) Ltd',
      location: 'Nugegoda, Sri Lanka',
      period: 'October 2024 – April 2025',
      type: 'Internship',
      typeColor: 'rgba(59,130,246,0.1)',
      highlights: [
        'Contributed to development of the Student Management System (SMS) and Higher Education Management System (HEMS).',
        'Built modern, responsive frontend modules with Angular and structured backend using PHP.',
        'Designed and optimized report generation utilities and database tables with MySQL.',
        'Fixed production bugs, added requested features, and participated in Agile sprints and PR reviews.'
      ],
      skills: ['PHP', 'Angular', 'MySQL', 'MVC Architecture', 'Git', 'Agile'],
      gradient: 'from-pink-500 to-rose-500',
    }
  ];

  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({ 0: true, 1: false });

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(236,72,153,0.08) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.18)' }}>
            <Briefcase className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span className="text-xs font-mono font-bold text-pink-700 dark:text-pink-300 tracking-widest uppercase">Work Experience</span>
          </div>
          <h2 className="section-heading mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }} />
        </div>

        {/* Experience Cards */}
        <div className="space-y-5 max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndices[index];
            return (
              <div
                key={index}
                className="console-card overflow-hidden"
              >
                {/* Card Header */}
                <div
                  onClick={() => toggleExpand(index)}
                  className="flex items-start justify-between cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: `linear-gradient(135deg, ${index === 0 ? '#7c3aed, #a855f7' : '#ec4899, #f43f5e'})`, boxShadow: `0 8px 20px ${index === 0 ? 'rgba(124,58,237,0.3)' : 'rgba(236,72,153,0.3)'}` }}>
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded-full"
                          style={{
                            background: exp.typeColor,
                            color: index === 0 ? '#059669' : '#2563eb',
                            border: `1px solid ${index === 0 ? 'rgba(16,185,129,0.25)' : 'rgba(59,130,246,0.25)'}`
                          }}>
                          {exp.type}
                        </span>
                        <div className="flex items-center space-x-1 text-[11px] font-mono text-gray-400 dark:text-grayCustom">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-sans">
                        {exp.role}
                      </h3>

                      <h4 className="text-sm font-semibold text-gray-600 dark:text-grayCustom font-sans">
                        {exp.company}
                      </h4>

                      <div className="flex items-center space-x-1 text-xs text-gray-400 dark:text-grayCustom">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="p-2 ml-4 rounded-xl transition-all duration-300 hover:scale-110 flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded
                      ? <ChevronUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      : <ChevronDown className="w-4 h-4 text-gray-400 dark:text-grayCustom" />
                    }
                  </button>
                </div>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-5 border-t" style={{ borderColor: 'rgba(124,58,237,0.1)' }}>
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: index === 0 ? '#a855f7' : '#ec4899' }} />
                          <span className="text-sm text-gray-600 dark:text-grayCustom leading-relaxed font-sans">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-mono font-semibold rounded-lg"
                          style={{ background: 'rgba(124,58,237,0.08)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.2)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
