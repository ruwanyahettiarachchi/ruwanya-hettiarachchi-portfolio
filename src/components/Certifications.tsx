import { Award, ShieldCheck, BookOpen, Milestone } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle University',
      year: '2023',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-accent-pink" />,
      description: 'Validation of fundamental database design, query optimizations, SQL constructs, and schema administration.'
    },
    {
      title: 'Trainee Software Engineer Internship Certificate',
      issuer: 'eArrow (Pvt) Ltd',
      year: '2025',
      icon: <Award className="w-5 h-5 text-pink-505 dark:text-accent-rose" />,
      description: 'Completion of 6-month hands-on industrial training building and deploying student management systems.'
    },
    {
      title: 'English Diploma - Level 3',
      issuer: 'American College of Higher Education',
      year: '2022',
      icon: <BookOpen className="w-5 h-5 text-teal-500 dark:text-accent-orchid" />,
      description: 'Professional qualification focusing on business communications, technical report drafting, and presentation skills.'
    },
    {
      title: 'Workshops & Hackathons',
      issuer: 'University & Tech Communities',
      year: '2022 - 2025',
      icon: <Milestone className="w-5 h-5 text-indigo-500 dark:text-accent-purple" />,
      description: 'Active participation in university hackathons and specialized developer workshops centering on Azure cloud operations and Agile development.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50/20 dark:bg-darkCard/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Licenses & <span className="text-gradient font-sans">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-accent-pink dark:to-accent-rose mx-auto rounded-full"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <div 
              key={i}
              className="console-card flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 group"
            >
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-darkBg text-purple-600 dark:text-accent-pink group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {cert.icon}
              </div>

              <div className="space-y-2 flex-grow">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-gray-800 dark:text-white leading-tight font-sans">
                    {cert.title}
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-purple-700 dark:text-accent-pink bg-purple-50 dark:bg-darkBg rounded border border-purple-250/10 dark:border-darkBorder">
                    {cert.year}
                  </span>
                </div>
                
                <h4 className="text-xs font-semibold text-gray-400 dark:text-grayCustom font-sans">
                  {cert.issuer}
                </h4>
                
                <p className="text-sm text-gray-500 dark:text-grayCustom leading-relaxed pt-1 font-sans">
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
