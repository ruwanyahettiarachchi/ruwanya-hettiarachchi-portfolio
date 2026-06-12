import { Award, ShieldCheck, BookOpen, Milestone } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle University',
      year: '2023',
      icon: <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      description: 'Validation of fundamental database design, query optimizations, SQL constructs, and schema administration.'
    },
    {
      title: 'Trainee Software Engineer Internship Certificate',
      issuer: 'eArrow (Pvt) Ltd',
      year: '2025',
      icon: <Award className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
      description: 'Completion of 6-month hands-on industrial training building and deploying student management systems.'
    },
    {
      title: 'English Diploma - Level 3',
      issuer: 'American College of Higher Education',
      year: '2022',
      icon: <BookOpen className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
      description: 'Professional qualification focusing on business communications, technical report drafting, and presentation skills.'
    },
    {
      title: 'Workshops & Hackathons',
      issuer: 'University & Tech Communities',
      year: '2022 - 2025',
      icon: <Milestone className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      description: 'Active participation in university hackathons and specialized developer workshops centering on Azure cloud operations and Agile development.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50/50 dark:bg-darkCard/20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Licenses & <span className="text-gradient font-sans">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <div 
              key={i}
              className="glass-card p-6 md:p-8 border border-gray-200/40 dark:border-darkBorder/40 hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 group hover:-translate-y-1"
            >
              <div className="p-4 rounded-2xl bg-gray-55 dark:bg-darkBg text-purple-650 dark:text-purple-300 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {cert.icon}
              </div>

              <div className="space-y-2 flex-grow">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-purple-705 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 rounded-full border border-purple-100/30 dark:border-purple-900/30">
                    {cert.year}
                  </span>
                </div>
                
                <h4 className="text-xs font-semibold text-gray-450 dark:text-gray-500">
                  {cert.issuer}
                </h4>
                
                <p className="text-sm text-gray-500 dark:text-gray-450 leading-relaxed pt-1">
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
