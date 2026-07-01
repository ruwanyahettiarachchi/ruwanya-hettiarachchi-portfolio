import React from 'react';
import {
  Terminal,
  GitBranch,
  Layers,
  Laptop,
  Hammer,
  Box,
  Wrench
} from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
}

export default function ToolsGrid() {
  const tools: Tool[] = [
    {
      name: 'VS Code & Visual Studio',
      description: 'Primary IDEs for web apps, C#/.NET MVC architectures, and script automation.',
      category: 'Development',
      icon: <Laptop className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
      glow: 'rgba(124,58,237,0.3)',
    },
    {
      name: 'Git & GitHub',
      description: 'Version control, branch management, CI/CD Actions, and open-source collaboration.',
      category: 'Version Control',
      icon: <GitBranch className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #374151, #1f2937)',
      glow: 'rgba(55,65,81,0.3)',
    },
    {
      name: 'Postman',
      description: 'API routing simulation, integration pipeline checks, and response validation.',
      category: 'API Testing',
      icon: <Terminal className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
      glow: 'rgba(249,115,22,0.3)',
    },
    {
      name: 'Docker & Kubernetes',
      description: 'Containerization, microservice partitioning, and deployment orchestration.',
      category: 'DevOps',
      icon: <Box className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
      glow: 'rgba(14,165,233,0.3)',
    },
    {
      name: 'Xcode',
      description: 'iOS app development, Swift framework management, and UI layout building.',
      category: 'Mobile Dev',
      icon: <Layers className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      glow: 'rgba(6,182,212,0.3)',
    },
    {
      name: 'Figma',
      description: 'UI/UX modeling, dynamic mockups, wireframing, and component blueprinting.',
      category: 'Design',
      icon: <Hammer className="w-5 h-5" />,
      gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      glow: 'rgba(236,72,153,0.3)',
    }
  ];

  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 dark:opacity-8"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)' }}>
            <Wrench className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 tracking-widest uppercase">Dev Tools</span>
          </div>
          <h2 className="section-heading mb-4">
            My <span className="text-gradient">Toolbox</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full mb-5"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }} />
          <p className="text-gray-500 dark:text-grayCustom text-sm md:text-base max-w-lg mx-auto font-sans">
            The software, compilers, and workflow suites that anchor my everyday engineering environment.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="console-card group flex items-start space-x-4"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: tool.gradient, boxShadow: `0 8px 20px ${tool.glow}` }}
              >
                {tool.icon}
              </div>

              <div className="space-y-1 flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white font-sans">{tool.name}</h3>
                  <span className="text-[9px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">{tool.category}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-grayCustom leading-relaxed font-sans">
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
