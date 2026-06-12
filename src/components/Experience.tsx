import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Quality Assurance Engineer',
      company: 'Sun System Technologies & Developers (Pvt) Ltd',
      location: 'Sri Lanka',
      period: 'September 2025 - Present',
      type: 'Full-time',
      logoLetter: 'S',
      color: 'from-pink-500 to-rose-400',
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
      logoLetter: 'e',
      color: 'from-purple-600 to-indigo-550',
      highlights: [
        'Contributed to the development and maintenance of the Student Management System (SMS) and Higher Education Management System (HEMS).',
        'Built modern, responsive frontend modules with Angular and structured robust backend functionalities using PHP.',
        'Designed, optimized, and maintained report generation utilities and database tables with MySQL.',
        'Fixed critical production bugs, added requested customer features, and actively participated in Agile sprints, stand-ups, and PR reviews.'
      ],
      skills: ['PHP', 'Angular', 'MySQL', 'MVC Architecture', 'Git', 'Agile Methodologies']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50/50 dark:bg-darkCard/20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Professional <span className="text-gradient font-sans">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-400 to-transparent -translate-x-1/2"></div>

          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <div 
                key={i} 
                className={`relative mb-12 flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Dot with Logo/Letter */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 w-10 h-10 rounded-full bg-white dark:bg-darkCard border-4 border-purple-500 dark:border-purple-400 shadow-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110">
                  <span className="font-bold text-sm text-purple-600 dark:text-purple-400">{exp.logoLetter}</span>
                </div>

                {/* Left/Right empty space for alignment in desktop */}
                <div className="w-full md:w-1/2"></div>

                {/* Card Container */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card p-6 md:p-8 border border-gray-200/40 dark:border-darkBorder/40 hover:border-purple-400/50 dark:hover:border-purple-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1">
                    
                    {/* Period Badge */}
                    <div className="inline-flex items-center space-x-2 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 px-3 py-1 rounded-full mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">
                      {exp.company}
                    </h4>

                    <div className="flex items-center space-x-3 text-xs text-gray-400 dark:text-gray-500 mt-2 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                      <span>•</span>
                      <span className="font-semibold text-gray-500 dark:text-gray-400">{exp.type}</span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-sm text-gray-650 dark:text-gray-400 list-disc list-inside mb-6">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="leading-relaxed pl-1 marker:text-purple-500">
                          <span className="relative -left-2 text-gray-650 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills acquired tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-105/50 dark:border-darkBorder/40">
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-darkBg rounded-lg border border-gray-200/30 dark:border-darkBorder/20"
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
