import { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database as DbIcon,
  Cloud,
  CheckSquare,
  Wrench,
  Sparkles
} from 'lucide-react';

interface Skill {
  name: string;
  category: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { id: 'All', label: 'All Skills', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'Languages', label: 'Languages', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'Frontend', label: 'Frontend', icon: <Layout className="w-3.5 h-3.5" /> },
    { id: 'Backend', label: 'Backend', icon: <Server className="w-3.5 h-3.5" /> },
    { id: 'Databases', label: 'Databases', icon: <DbIcon className="w-3.5 h-3.5" /> },
    { id: 'Cloud', label: 'Cloud & DevOps', icon: <Cloud className="w-3.5 h-3.5" /> },
    { id: 'Testing', label: 'Testing & QA', icon: <CheckSquare className="w-3.5 h-3.5" /> },
    { id: 'Tools', label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const skills: Skill[] = [
    { name: 'PHP', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'C#', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'Swift', category: 'Languages' },
    { name: 'Kotlin', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    { name: 'C', category: 'Languages' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'CodeIgniter', category: 'Backend' },
    { name: '.NET MVC', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'SQL Server', category: 'Databases' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'Oracle', category: 'Databases' },
    { name: 'SQLite', category: 'Databases' },
    { name: 'Microsoft Azure', category: 'Cloud' },
    { name: 'Docker', category: 'Cloud' },
    { name: 'Kubernetes', category: 'Cloud' },
    { name: 'GitHub Actions', category: 'Cloud' },
    { name: 'CI/CD Pipelines', category: 'Cloud' },
    { name: 'Manual Testing', category: 'Testing' },
    { name: 'Functional Testing', category: 'Testing' },
    { name: 'Regression Testing', category: 'Testing' },
    { name: 'System Testing', category: 'Testing' },
    { name: 'Defect Tracking', category: 'Testing' },
    { name: 'Test Case Design', category: 'Testing' },
    { name: 'QA Processes', category: 'Testing' },
    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Postman', category: 'Tools' },
    { name: 'Xcode', category: 'Tools' },
    { name: 'Figma', category: 'Tools' },
    { name: 'Visual Studio', category: 'Tools' },
    { name: 'Cisco Packet Tracer', category: 'Tools' },
    { name: 'Microsoft Office', category: 'Tools' }
  ];

  const filteredSkills = activeTab === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
    Languages: { bg: 'rgba(124,58,237,0.1)', text: '#7c3aed', dot: '#7c3aed' },
    Frontend: { bg: 'rgba(236,72,153,0.1)', text: '#db2777', dot: '#ec4899' },
    Backend: { bg: 'rgba(234,179,8,0.1)', text: '#a16207', dot: '#eab308' },
    Databases: { bg: 'rgba(16,185,129,0.1)', text: '#065f46', dot: '#10b981' },
    Cloud: { bg: 'rgba(59,130,246,0.1)', text: '#1d4ed8', dot: '#3b82f6' },
    Testing: { bg: 'rgba(239,68,68,0.1)', text: '#b91c1c', dot: '#ef4444' },
    Tools: { bg: 'rgba(8,145,178,0.1)', text: '#0e7490', dot: '#06b6d4' },
    All: { bg: 'rgba(124,58,237,0.1)', text: '#7c3aed', dot: '#a855f7' },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)' }}>
            <Code2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 tracking-widest uppercase">Technical Skills</span>
          </div>
          <h2 className="section-heading mb-4">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full mb-5"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }} />
          <p className="text-gray-500 dark:text-grayCustom text-sm md:text-base max-w-lg mx-auto font-sans">
            Technologies, frameworks, and workflows mastered through coursework and real-world internships.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const color = categoryColors[cat.id] || categoryColors['All'];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 font-sans"
                style={isActive ? {
                  background: color.bg,
                  color: color.text,
                  border: `1px solid ${color.dot}40`,
                  boxShadow: `0 4px 16px ${color.dot}25`,
                } : {
                  background: 'rgba(255,255,255,0.7)',
                  color: '#6b7280',
                  border: '1px solid rgba(209,213,219,0.5)',
                }}
              >
                <span style={isActive ? { color: color.dot } : {}}>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSkills.map((skill, index) => {
            const color = categoryColors[skill.category] || categoryColors['All'];
            return (
              <div
                key={`${skill.name}-${index}`}
                className="skill-badge flex items-center space-x-2.5 group cursor-default"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-125"
                  style={{ background: color.dot, boxShadow: `0 0 6px ${color.dot}80` }} />
                <span className="font-sans font-medium text-sm text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
