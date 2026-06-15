import { GraduationCap, Award, Layers, Database, Code, ShieldCheck } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Layers className="w-5 h-5 text-purple-600 dark:text-accent-pink" />,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern client frameworks and robust server APIs.'
    },
    {
      icon: <Code className="w-5 h-5 text-pink-500 dark:text-accent-rose" />,
      title: 'Backend Development',
      description: 'Designing structured servers, business logic, and RESTful web services using C#, PHP, and Node.'
    },
    {
      icon: <Database className="w-5 h-5 text-teal-500 dark:text-accent-orchid" />,
      title: 'Database Design',
      description: 'Modeling normalized entity relationships, optimizing queries, and working with MySQL and SQL Server.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500 dark:text-accent-purple" />,
      title: 'Software Quality Assurance',
      description: 'Ensuring application reliability through regression, system, functional testing, and bug tracking.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/20 dark:bg-darkCard/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            About <span className="text-gradient font-sans">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-accent-pink dark:to-accent-rose mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left: Bio & Education */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white font-sans">
              // PROFILE SUMMARY
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-grayCustom leading-relaxed font-sans">
              I am an energetic and dedicated Software Engineering undergraduate from the Sri Lanka Institute of Information Technology (SLIIT). Recently having completed my internship, I have transitioned into quality assurance while actively working on full-stack projects.
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-grayCustom leading-relaxed font-sans">
              I thrive in challenging environments that foster constant learning. My goal is to build secure, robust, and client-centric solutions that resolve real-world dilemmas, employing Agile workflows and software design patterns.
            </p>

            {/* Flat console education box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="console-card border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-darkBg text-purple-600 dark:text-accent-pink">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm font-sans">Education</h4>
                </div>
                <p className="text-xs text-gray-700 dark:text-white font-semibold font-mono">
                  SLIIT [2022 - 2026]
                </p>
                <p className="text-[11px] text-gray-400 dark:text-grayCustom mt-1 font-sans">
                  BSc. (Hons) in Software Engineering
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 text-[9px] font-mono font-bold bg-green-500/10 text-green-600 dark:text-green-400 rounded border border-green-500/20">
                  Awaiting Results
                </span>
              </div>

              <div className="console-card border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-darkBg text-purple-600 dark:text-accent-pink">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm font-sans">Performance</h4>
                </div>
                <p className="text-xs text-gray-750 dark:text-white font-semibold font-mono">
                  CGPA: 3.3 / 4.0
                </p>
                <p className="text-[11px] text-gray-400 dark:text-grayCustom mt-1 font-sans">
                  Focus in development and testing.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Core Areas */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white font-sans">
              // CORE EXPERTISE
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div 
                  key={i} 
                  className="console-card group"
                >
                  <div className="p-2.5 bg-gray-50 dark:bg-darkBg w-fit rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-800 dark:text-white mb-2 font-sans">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-grayCustom leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
