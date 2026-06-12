import { useState } from 'react';
import { Eye, X, BookOpen, User, Users } from 'lucide-react';
import { Github } from './SocialIcons';

interface Project {
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: 'Web' | 'Mobile' | 'Research';
  type: 'Personal Project' | 'Group Project' | 'Research Project';
  icon: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'Research'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      name: 'UniFinder',
      description: 'A higher education recommendation platform designed to assist students in identifying suitable degree paths and universities.',
      longDescription: 'Conducted extensive research and development for UniFinder as part of my Final Year Research Project. The platform streamlines requirement gathering, system modeling, university profiles, and course recommendation logics. Designed the system flow to guide students systematically, generating technical documentation and research findings based on testing benchmarks.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Research',
      type: 'Research Project',
      icon: '🎓'
    },
    {
      name: 'Selyn Automated Garment System',
      description: 'An automated enterprise application for Selyn Company to streamline manufacturing operations, procurement, and logs.',
      longDescription: 'Collaborated in a development team to build this automation platform. Specifically designed, implemented, and tested the Supplier Management function. Integrated supplier profiles, order histories, status tracking, and automated restocking notifications to bridge communication between departments.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Git'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Web',
      type: 'Group Project',
      icon: '👗'
    },
    {
      name: 'Inventory Management System',
      description: 'A web-based system built with .NET following the MVC pattern to manage inventories, items, and sales analytics.',
      longDescription: 'Developed this personal web application using ASP.NET MVC. Implemented full CRUD features for stock tracking, product categorization, threshold alerts, and custom sales reporting. Styled using Bootstrap and backed by an optimized MySQL relational database schema.',
      technologies: ['C#', 'ASP.NET MVC', 'MySQL', 'Visual Studio', 'Bootstrap', 'Entity Framework'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Web',
      type: 'Personal Project',
      icon: '📊'
    },
    {
      name: 'Task Tracker Mobile App',
      description: 'An Android task management app utilizing modern architecture and Room storage for persistent tracking.',
      longDescription: 'Designed a Kotlin-based task tracking application using Android Studio. Leveraged the MVVM architecture patterns, Room Persistence Library for local SQLite database management, and Kotlin Coroutines for asynchronous background threads. Features include custom reminder categorizations, search filters, and progress charts.',
      technologies: ['Kotlin', 'Android Studio', 'Room DB', 'SQLite', 'Coroutines', 'MVVM'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Mobile',
      type: 'Personal Project',
      icon: '📝'
    },
    {
      name: 'Event Planning System',
      description: 'An interactive system designed to plan, schedule, and process payments for custom corporate and personal events.',
      longDescription: 'Worked in a group project setting to engineer a complete event scheduling portal. Owned the Payment Management module, designing safe payment checkout forms, transaction log records, and integration with payment simulation handlers. Utilized OOP principles to construct secure transaction services.',
      technologies: ['Java', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Servlet/JSP'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Web',
      type: 'Group Project',
      icon: '🎉'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Featured <span className="text-gradient font-sans">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm md:text-base max-w-lg mx-auto">
            A showcase of academic research, enterprise group works, and personal software builds highlighting my engineering capabilities.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex justify-center space-x-2 mb-12">
          {['All', 'Web', 'Mobile', 'Research'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-xl border transition-all duration-300 ${
                filter === cat
                  ? 'bg-purple-600 dark:bg-purple-500 text-white border-purple-600 dark:border-purple-500 shadow-md shadow-purple-500/20'
                  : 'bg-white dark:bg-darkCard text-gray-650 dark:text-gray-300 border-gray-200 dark:border-darkBorder/60 hover:border-purple-300 dark:hover:border-purple-800'
              }`}
            >
              {cat === 'All' ? 'All Projects' : `${cat} Apps`}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div 
              key={i}
              className="glass-card flex flex-col h-full border border-gray-200/40 dark:border-darkBorder/40 overflow-hidden hover:border-purple-400/60 dark:hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl"
            >
              
              {/* Project Card Header with Icon */}
              <div className="p-6 pb-0 flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-2xl flex items-center justify-center border border-purple-100/50 dark:border-purple-800/30 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                
                {/* Project Type Badge */}
                <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${
                  project.type === 'Research Project'
                    ? 'bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 border-indigo-500/20'
                    : project.type === 'Group Project'
                    ? 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20'
                    : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
                }`}>
                  {project.type.split(' ')[0]}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-medium text-purple-650 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/20 rounded border border-purple-100/25 dark:border-purple-900/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-darkBg rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-darkBorder/40">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-purple-650 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-50 dark:bg-darkBg hover:bg-purple-55 dark:hover:bg-purple-950/30 text-gray-550 dark:text-gray-400 hover:text-purple-650 dark:hover:text-purple-450 transition-colors border border-gray-150/30 dark:border-darkBorder/20"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
            <div className="relative w-full max-w-2xl bg-white dark:bg-darkCard border border-gray-200 dark:border-darkBorder rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in-up">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 dark:border-darkBorder/60 flex items-center justify-between bg-purple-50/20 dark:bg-purple-950/10">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedProject.icon}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedProject.name}
                    </h3>
                    <span className="inline-block mt-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {selectedProject.type}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-650 dark:hover:text-gray-250 hover:bg-gray-100 dark:hover:bg-darkBorder"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    Description
                  </h4>
                  <p className="text-sm md:text-base text-gray-655 dark:text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-purple-650 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 rounded-lg border border-purple-100/30 dark:border-purple-900/35"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-gray-50 dark:bg-darkBg border border-gray-100 dark:border-darkBorder/40">
                  <div className="flex items-center space-x-2.5">
                    {selectedProject.type === 'Personal Project' ? (
                      <User className="w-4 h-4 text-purple-500" />
                    ) : (
                      <Users className="w-4 h-4 text-purple-500" />
                    )}
                    <div>
                      <p className="text-[10px] text-gray-450 dark:text-gray-500 uppercase">Team Size</p>
                      <p className="text-xs font-semibold text-gray-750 dark:text-gray-300">
                        {selectedProject.type === 'Personal Project' ? 'Individual' : 'Team / Group'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <BookOpen className="w-4 h-4 text-pink-500" />
                    <div>
                      <p className="text-[10px] text-gray-450 dark:text-gray-500 uppercase">Category</p>
                      <p className="text-xs font-semibold text-gray-750 dark:text-gray-300">
                        {selectedProject.category} Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100 dark:border-darkBorder/60 flex items-center justify-end space-x-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center space-x-2 py-2 px-4 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary py-2 px-6 text-sm"
                >
                  Close Details
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
