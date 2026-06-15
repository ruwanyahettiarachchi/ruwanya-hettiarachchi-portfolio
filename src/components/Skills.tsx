import { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database as DbIcon, 
  Cloud, 
  CheckSquare, 
  Wrench, 
  Check
} from 'lucide-react';

interface Skill {
  name: string;
  category: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { id: 'All', label: 'All Skills', icon: null },
    { id: 'Languages', label: 'Languages', icon: <Code2 className="w-4 h-4" /> },
    { id: 'Frontend', label: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { id: 'Backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'Databases', label: 'Databases', icon: <DbIcon className="w-4 h-4" /> },
    { id: 'Cloud', label: 'Cloud & DevOps', icon: <Cloud className="w-4 h-4" /> },
    { id: 'Testing', label: 'Testing & QA', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'Tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const skills: Skill[] = [
    // Languages
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
    
    // Frontend
    { name: 'React.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },

    // Backend
    { name: 'CodeIgniter', category: 'Backend' },
    { name: '.NET MVC', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },

    // Databases
    { name: 'MySQL', category: 'Databases' },
    { name: 'SQL Server', category: 'Databases' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'Oracle', category: 'Databases' },
    { name: 'SQLite', category: 'Databases' },

    // Cloud & DevOps
    { name: 'Microsoft Azure', category: 'Cloud' },
    { name: 'Docker', category: 'Cloud' },
    { name: 'Kubernetes', category: 'Cloud' },
    { name: 'GitHub Actions', category: 'Cloud' },
    { name: 'Containerization & Deployment', category: 'Cloud' },

    // Testing & QA
    { name: 'Manual Testing', category: 'Testing' },
    { name: 'Functional Testing', category: 'Testing' },
    { name: 'Regression Testing', category: 'Testing' },
    { name: 'System Testing', category: 'Testing' },
    { name: 'Defect Tracking', category: 'Testing' },
    { name: 'Test Case Execution', category: 'Testing' },
    { name: 'Quality Assurance Processes', category: 'Testing' },

    // Tools
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

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Technical <span className="text-gradient font-sans">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm md:text-base max-w-lg mx-auto">
            A comprehensive list of technologies, frameworks, and workflows that I have mastered through coursework and industry internships.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2 text-xs md:text-sm font-medium rounded-xl border transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-purple-600 dark:bg-purple-500 text-white border-purple-600 dark:border-purple-500 shadow-md shadow-purple-500/20'
                  : 'bg-white dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-purple-950/20 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-darkBorder/60 hover:border-purple-300 dark:hover:border-purple-800'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="glass-card px-5 py-4 border border-gray-200/50 dark:border-darkBorder/40 hover:border-purple-400/60 dark:hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-950/10 flex items-center space-x-3 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 dark:group-hover:text-white transition-all duration-300">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans font-medium text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
