import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Quality Assurance Engineer',
      company: 'Sun System Technologies & Developers (Pvt) Ltd',
      location: 'Sri Lanka',
      period: 'September 2025 - Present',
      type: 'Full-time',
      highlights: [
        'Perform functional, regression, and system testing to ensure software quality and reliability across multiple active platforms.',
        'Identify, document, and track software defects in collaboration with developer squads to accelerate fix turnaround.',
        'Participate in requirement analysis and validation to ensure business objectives are correctly engineered.',
        'Draft and execute test cases, provide detailed test summaries, and support release verification and user acceptance testing.'
      ],
      skills: ['Functional Testing', 'Regression Testing', 'Defect Tracking', 'Test Case Design', 'Quality Processes']
    },
    {
      role: 'Software Engineer Intern',
      company: 'eArrow (Pvt) Ltd',
      location: 'Nugegoda, Sri Lanka',
      period: 'October 2024 - April 2025',
      type: 'Internship',
      highlights: [
        'Contributed to the development and maintenance of the Student Management System (SMS) and Higher Education Management System (HEMS).',
        'Built modern, responsive frontend modules with Angular and structured robust backend functionalities using PHP.',
        'Designed, optimized, and maintained report generation utilities and database tables with MySQL.',
        'Fixed critical production bugs, added requested customer features, and actively participated in Agile sprints, stand-ups, and PR reviews.'
      ],
      skills: ['PHP', 'Angular', 'MySQL', 'MVC Architecture', 'Git', 'Agile Methodologies']
    }
  ];

  // Track expanded state for each experience item (by index)
  // By default, the first item is expanded (true), and the second is collapsed (false)
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({
    0: true,
    1: false
  });

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="py-20 bg-gray-50/20 dark:bg-darkCard/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Professional <span className="text-gradient font-sans">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-accent-pink dark:to-accent-rose mx-auto rounded-full"></div>
        </div>

        {/* Stacked Cards Layout */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndices[index];
            return (
              <div 
                key={index} 
                className="console-card border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard overflow-hidden transition-all duration-300"
              >
                
                {/* Card Header (Always Visible) */}
                <div 
                  onClick={() => toggleExpand(index)}
                  className="flex items-start justify-between cursor-pointer group"
                >
                  <div className="space-y-1">
                    <div className="inline-flex items-center space-x-2 text-xs font-semibold text-purple-700 dark:text-accent-pink bg-purple-50 dark:bg-darkBg/60 px-2.5 py-1 rounded font-mono">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-accent-pink transition-colors pt-2 font-sans">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-grayCustom font-sans">
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 dark:text-grayCustom mt-1">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                      <span>•</span>
                      <span className="font-mono text-gray-500 dark:text-grayCustom">{exp.type}</span>
                    </div>
                  </div>

                  <button
                    className="p-2 ml-4 rounded-lg bg-gray-50 dark:bg-darkBg text-gray-500 dark:text-grayCustom hover:text-purple-600 dark:hover:text-accent-pink transition-colors"
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Collapsible Details Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[800px] mt-6 pt-6 border-t border-gray-150/40 dark:border-darkBorder/60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-grayCustom list-disc list-inside mb-6 font-sans">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="leading-relaxed pl-1 marker:text-purple-500 dark:marker:text-accent-pink">
                        <span className="relative -left-2 text-gray-600 dark:text-grayCustom">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 text-xs font-mono font-medium text-purple-700 dark:text-accent-pink bg-purple-50 dark:bg-darkBg rounded border border-purple-200/20 dark:border-darkBorder"
                      >
                        {skill}
                      </span>
                    ))}
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
