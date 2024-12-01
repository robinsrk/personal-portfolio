interface Project {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
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
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div 
      className="bg-[#18181b] rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-purple-500/20 group flex flex-col h-full
                max-w-full md:max-w-none flex-shrink-0 snap-center md:snap-align-none mx-2 first:ml-0 last:mr-0"
    >
      <div className="h-48 bg-[#27272a] relative overflow-hidden" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text group-hover:from-[hsl(250,100%,80%)] group-hover:to-[hsl(310,100%,80%)] transition-all">
          {project.title}
        </h3>
        <p className="text-[#8892b0] mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-sm px-3 py-1 bg-[#27272a] text-purple-400 rounded-full hover:text-purple-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="block min-h-screen py-24 md:flex md:items-center md:py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 md:pb-0">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 md:pb-0">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
