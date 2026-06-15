import React from 'react';
import { 
  Terminal, 
  GitBranch, 
  Layers, 
  Laptop, 
  Hammer, 
  Box
} from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

export default function ToolsGrid() {
  const tools: Tool[] = [
    {
      name: 'VS Code & Visual Studio',
      description: 'Primary IDEs for web apps, C#/.NET MVC architectures, and script automation developments.',
      category: 'Development Environments',
      icon: <Laptop className="w-5 h-5 text-accent-pink" />
    },
    {
      name: 'Git & GitHub',
      description: 'Version controlling, branch sandboxing, CI/CD Actions deployments, and open-source project management.',
      category: 'Version Control',
      icon: <GitBranch className="w-5 h-5 text-purple-500" />
    },
    {
      name: 'Postman',
      description: 'API routing simulation, integration pipeline checks, and response validation suites.',
      category: 'API Engineering',
      icon: <Terminal className="w-5 h-5 text-pink-500" />
    },
    {
      name: 'Docker & Kubernetes',
      description: 'Containerization, microservice partitioning, and deployment orchestration.',
      category: 'DevOps & Containers',
      icon: <Box className="w-5 h-5 text-blue-500" />
    },
    {
      name: 'Xcode',
      description: 'iOS application compiler, interface layout builder, and Swift framework management.',
      category: 'Mobile Tooling',
      icon: <Layers className="w-5 h-5 text-teal-500" />
    },
    {
      name: 'Figma',
      description: 'UI/UX interface modeling, dynamic canvas mockups, wireframing, and component blueprinting.',
      category: 'Design & Prototyping',
      icon: <Hammer className="w-5 h-5 text-indigo-500" />
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50/20 dark:bg-darkCard/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Premium <span className="text-gradient font-sans">Tools</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-accent-pink dark:to-accent-rose mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-grayCustom mt-4 text-sm md:text-base max-w-lg mx-auto font-sans">
            The software, compilers, and workflow suites that anchor my everyday software engineering environments.
          </p>
        </div>

        {/* Tools Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="console-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 dark:bg-darkBg rounded-xl text-purple-600 dark:text-accent-pink group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-gray-400 dark:text-grayCustom uppercase tracking-wider">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 font-sans">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-grayCustom leading-relaxed font-sans">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
