import { GraduationCap, Award, Layers, Database, Code, ShieldCheck } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern client frameworks and robust server APIs.'
    },
    {
      icon: <Code className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
      title: 'Backend Development',
      description: 'Designing structured servers, business logic, and RESTful web services using C#, PHP, and Node.'
    },
    {
      icon: <Database className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
      title: 'Database Design',
      description: 'Modeling normalized entity relationships, optimizing queries, and working with MySQL and SQL Server.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      title: 'Software Quality Assurance',
      description: 'Ensuring application reliability through regression, system, functional testing, and bug tracking.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-darkCard/20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            About <span className="text-gradient font-sans">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text and Education Details */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Who I Am
            </h3>
            <p className="text-gray-650 dark:text-gray-400 leading-relaxed">
              I am an energetic and dedicated Software Engineering undergraduate from the Sri Lanka Institute of Information Technology (SLIIT). Recently having completed my internship, I have transitioned into quality assurance while actively working on full-stack projects.
            </p>
            <p className="text-gray-650 dark:text-gray-400 leading-relaxed">
              I thrive in challenging environments that foster constant learning. My goal is to build secure, robust, and client-centric solutions that resolve real-world dilemmas, employing Agile workflows and software design patterns.
            </p>

            {/* Education Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 border border-purple-100/50 dark:border-darkBorder/40">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Education</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  SLIIT (2022 - 2026)
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  BSc. (Hons) in Software Engineering
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-semibold bg-green-500/10 text-green-600 dark:text-green-400 rounded-md border border-green-500/20">
                  Awaiting Final Results
                </span>
              </div>

              <div className="glass-card p-5 border border-purple-100/50 dark:border-darkBorder/40">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Performance</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  CGPA: 3.3 / 4.0
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Strong performance across development and QA coursework.
                </p>
              </div>
            </div>
          </div>

          {/* Core Areas Grid */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center lg:text-left">
              Areas of Interest
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div 
                  key={i} 
                  className="glass-card p-6 border border-gray-150/40 dark:border-darkBorder/40 hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-800 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-gray-50 dark:bg-darkBg w-fit rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
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
