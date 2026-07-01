import { useState } from 'react';
import { Eye, X, BookOpen, User, Users, FolderOpen } from 'lucide-react';
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
  emoji: string;
  gradient: string;
  glow: string;
  langCode: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'Research'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      name: 'UniFinder',
      description: 'A higher education recommendation platform to help students find suitable degree paths and universities.',
      longDescription: 'Conducted extensive research and development for UniFinder as part of my Final Year Research Project. The platform streamlines requirement gathering, system modeling, university profiles, and course recommendation logics. Designed the system flow to guide students systematically, generating technical documentation and research findings based on testing benchmarks.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Research',
      type: 'Research Project',
      emoji: '🎓',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      glow: 'rgba(99,102,241,0.35)',
      langCode: 'JS/TS',
    },
    {
      name: 'Selyn Automated Garment System',
      description: 'Enterprise automation platform for Selyn Company to streamline manufacturing, procurement, and logs.',
      longDescription: 'Collaborated in a development team to build this automation platform. Specifically designed, implemented, and tested the Supplier Management function. Integrated supplier profiles, order histories, status tracking, and automated restocking notifications.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Git'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Web',
      type: 'Group Project',
      emoji: '👗',
      gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
      glow: 'rgba(236,72,153,0.35)',
      langCode: 'MERN',
    },
    {
      name: 'Inventory Management System',
      description: 'Web-based .NET MVC system to manage inventories, items, and generate sales analytics.',
      longDescription: 'Developed using ASP.NET MVC with full CRUD for stock tracking, product categorization, threshold alerts, and custom sales reporting. Styled with Bootstrap, backed by an optimized MySQL relational database schema.',
      technologies: ['C#', 'ASP.NET MVC', 'MySQL', 'Visual Studio', 'Bootstrap', 'Entity Framework'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Web',
      type: 'Personal Project',
      emoji: '📊',
      gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
      glow: 'rgba(124,58,237,0.35)',
      langCode: 'C#/.NET',
    },
    {
      name: 'Task Tracker Mobile App',
      description: 'Android task management app with modern MVVM architecture and Room DB for persistent tracking.',
      longDescription: 'Kotlin-based task tracking application using Android Studio. Leveraged MVVM patterns, Room Persistence Library, and Kotlin Coroutines for async background threads. Features custom reminders, search filters, and progress charts.',
      technologies: ['Kotlin', 'Android Studio', 'Room DB', 'SQLite', 'Coroutines', 'MVVM'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Mobile',
      type: 'Personal Project',
      emoji: '📝',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      glow: 'rgba(6,182,212,0.35)',
      langCode: 'KOTLIN',
    },
    {
      name: 'Event Planning System',
      description: 'Interactive system to plan, schedule, and process payments for corporate and personal events.',
      longDescription: 'Group project engineering a complete event scheduling portal. Owned the Payment Management module — safe payment checkout forms, transaction logs, and integration with payment simulation handlers. Built with OOP principles.',
      technologies: ['Java', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Servlet/JSP'],
      github: 'https://github.com/ruwanyahettiarachchi',
      category: 'Web',
      type: 'Group Project',
      emoji: '🎉',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      glow: 'rgba(245,158,11,0.35)',
      langCode: 'JAVA',
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const filterConfig: Record<string, { color: string; bg: string }> = {
    All: { color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
    Web: { color: '#ec4899', bg: 'rgba(236,72,153,0.1)' },
    Mobile: { color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
    Research: { color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)' }}>
            <FolderOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="section-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full mb-5"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }} />
          <p className="text-gray-500 dark:text-grayCustom text-sm md:text-base max-w-lg mx-auto font-sans">
            A showcase of academic research, enterprise group works, and personal software builds.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {['All', 'Web', 'Mobile', 'Research'].map((cat) => {
            const isActive = filter === cat;
            const cfg = filterConfig[cat];
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className="px-5 py-2 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 font-sans cursor-pointer"
                style={isActive ? {
                  background: cfg.bg,
                  color: cfg.color,
                  border: `1px solid ${cfg.color}40`,
                  boxShadow: `0 4px 16px ${cfg.color}25`,
                } : {
                  background: 'rgba(255,255,255,0.7)',
                  color: '#6b7280',
                  border: '1px solid rgba(209,213,219,0.5)',
                }}
              >
                {cat === 'All' ? 'All Projects' : `${cat} Apps`}
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <div className="space-y-5 max-w-4xl mx-auto">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="console-card overflow-hidden flex flex-col md:flex-row items-stretch p-0 group"
            >
              {/* Left: Visual */}
              <div className="md:w-44 flex flex-col items-center justify-center p-8 text-center border-b md:border-b-0 md:border-r select-none"
                style={{ background: 'rgba(124,58,237,0.04)', borderColor: 'rgba(124,58,237,0.1)' }}>
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {project.emoji}
                </div>
                <div className="w-full border-t pt-3 mt-2 space-y-1.5" style={{ borderColor: 'rgba(124,58,237,0.1)' }}>
                  <div className="flex justify-between text-[10px] font-mono text-gray-400 dark:text-grayCustom">
                    <span>STACK:</span>
                    <span className="font-bold text-gray-700 dark:text-white">{project.langCode}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-gray-400 dark:text-grayCustom">
                    <span>TYPE:</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded-full"
                      style={{
                        background: project.type === 'Research Project' ? 'rgba(99,102,241,0.1)' : project.type === 'Group Project' ? 'rgba(236,72,153,0.1)' : 'rgba(124,58,237,0.1)',
                        color: project.type === 'Research Project' ? '#4f46e5' : project.type === 'Group Project' ? '#db2777' : '#7c3aed',
                        border: `1px solid ${project.type === 'Research Project' ? 'rgba(99,102,241,0.25)' : project.type === 'Group Project' ? 'rgba(236,72,153,0.25)' : 'rgba(124,58,237,0.25)'}`,
                      }}>
                      {project.type === 'Research Project' ? '⚗️' : project.type === 'Group Project' ? '👥' : '👤'} {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-sans group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-grayCustom leading-relaxed mb-5 font-sans">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-lg"
                        style={{ background: 'rgba(124,58,237,0.07)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.15)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(124,58,237,0.1)' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center space-x-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-white transition-colors cursor-pointer font-sans group/btn"
                    >
                      <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
                      style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)' }}
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4 text-gray-600 dark:text-grayCustom" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}>
            <div className="relative w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in-up"
              style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid rgba(124,58,237,0.2)' }}>

              {/* Modal Header */}
              <div className="p-6 border-b flex items-center justify-between"
                style={{ background: `linear-gradient(135deg, rgba(124,58,237,0.06), rgba(236,72,153,0.04))`, borderColor: 'rgba(124,58,237,0.12)' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: selectedProject.gradient, boxShadow: `0 8px 20px ${selectedProject.glow}` }}>
                    {selectedProject.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 font-sans">{selectedProject.name}</h3>
                    <span className="text-xs font-semibold text-purple-600 font-mono">{selectedProject.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">Overview</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-xs font-mono font-bold rounded-xl"
                        style={{ background: 'rgba(124,58,237,0.08)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.2)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl"
                  style={{ background: 'rgba(124,58,237,0.04)', border: '1px solid rgba(124,58,237,0.1)' }}>
                  <div className="flex items-center space-x-3">
                    {selectedProject.type === 'Personal Project' ? <User className="w-5 h-5 text-purple-500" /> : <Users className="w-5 h-5 text-purple-500" />}
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Team Size</p>
                      <p className="text-sm font-bold text-gray-700 font-sans">{selectedProject.type === 'Personal Project' ? 'Individual' : 'Team / Group'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-pink-500" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Category</p>
                      <p className="text-sm font-bold text-gray-700 font-sans">{selectedProject.category} Development</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t flex items-center justify-end space-x-3" style={{ borderColor: 'rgba(124,58,237,0.1)' }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center space-x-2 py-2.5 px-5 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary py-2.5 px-6 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
