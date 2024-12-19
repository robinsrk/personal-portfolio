import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Dokan',
      description: 'A modern e-commerce platform built with Next.js 15, featuring product management, shopping cart functionality, and responsive design powered by Tailwind CSS.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Turbopack'],
      featured: true,
    },
    {
      title: 'Peacake',
      description: 'A feature-rich cake ordering platform with custom order capabilities, user management, and secure checkout process built with Next.js 15 and Supabase.',
      tech: ['Next.js 15', 'TypeScript', 'Supabase', 'Zustand'],
      featured: true,
    },
    {
      title: 'Vorerdak',
      description: 'A React Native application for managing clients, tracking loans, deposits, and daily transactions with comprehensive financial tracking features.',
      tech: ['React Native', 'Firebase', 'UI Kitten', 'React Navigation'],
      featured: true,
    },
  ]);

  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    setExitDirection(direction);
    setProjects(prev => {
      const newProjects = [...prev];
      const [removed] = newProjects.splice(0, 1);
      return [...newProjects, removed];
    });
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      className="group relative h-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x < -100) {
          handleSwipe('left');
        } else if (info.offset.x > 100) {
          handleSwipe('right');
        } else {
          // Snap back if not swiped enough
          info.point.x = 0;
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        x: exitDirection === 'left' ? '-200%' : '200%',
        transition: { duration: 3.5 },
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-purple-600/50 rounded-xl blur-sm group-hover:blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="bg-[#18181b]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/10 group-hover:border-transparent relative h-full flex flex-col shadow-lg transform-gpu transition-all duration-500 group-hover:translate-y-[-4px] group-hover:scale-[1.02]">
        {/* Project Image/Preview Area */}
        <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative overflow-hidden group-hover:from-purple-800/50 group-hover:to-pink-800/50 transition-all duration-500 flex-shrink-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />
          
          {/* Project Title Overlay with 3D effect */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transform-gpu transition-transform duration-500 group-hover:scale-105">
            <span className="text-3xl font-bold text-white/90 tracking-tight font-space-grotesk px-4 text-center transform-gpu transition-all duration-500 group-hover:text-white group-hover:scale-105">{project.title}</span>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow-reverse" />
        </div>

        {/* Content Area with glass effect */}
        <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/5 relative overflow-hidden group-hover:from-purple-900/5 group-hover:to-pink-900/5 transition-colors duration-500">
          {/* Animated background lines */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20" />
          </div>

          {/* Project Title with gradient */}
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text transform-gpu transition-transform duration-500 group-hover:scale-105">
            {project.title}
          </h3>

          {/* Project Description with better contrast */}
          <p className="text-[#8892b0] group-hover:text-[#a6b0d4] mb-6 flex-grow text-sm leading-relaxed transition-colors duration-500">
            {project.description}
          </p>

          {/* Tech Stack with modern pills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-3 py-1 bg-[#27272a]/50 backdrop-blur-sm text-purple-300 rounded-full border border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-[#27272a]/70 group-hover:text-purple-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const MobileProjectStack = () => (
    <div className="relative h-[600px] w-full max-w-sm mx-auto">
      <AnimatePresence initial={false}>
        {projects.slice(0, 3).map((project, index) => {
          const isTop = index === 0;
          const angle = isTop ? 0 : index * 5;
          const translateY = index * 15;

          return (
            <motion.div
              key={project.title}
              className="absolute inset-0 px-4"
              style={{
                zIndex: projects.length - index,
              }}
              initial={{ transform: `rotate(${angle}deg) translateY(${translateY}px)` }}
              animate={{ transform: `rotate(${angle}deg) translateY(${translateY}px)` }}
              exit={{
                transform: `rotate(${angle}deg) translateY(${translateY}px) translateX(${isTop ? (exitDirection === 'left' ? '-200%' : '200%') : '0'})`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 relative">
          <div className="relative inline-block">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text inline-block relative z-10">
              Featured Projects
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl -z-10 rounded-full opacity-0 animate-pulse" />
          </div>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
            Explore some of my recent work and personal projects
          </p>
          
          {/* Enhanced Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-150" />
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <MobileProjectStack />
        </div>

        {/* Enhanced Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 blur-xl rounded-xl" />
          {featuredProjects.map((project, index) => (
            <div key={index} className="transform-gpu transition-all duration-500">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Enhanced Other Projects Section */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 blur-xl rounded-xl" />
          {/* Swipe Hint */}
          <div className="flex justify-center items-center mt-4">
            <span className="text-sm text-[#8892b0] bg-black/50 px-3 py-1 rounded-full">
              Swipe to see more projects
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="transform-gpu transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
