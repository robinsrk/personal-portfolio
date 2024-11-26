interface Project {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Windsurf IDE',
      description: 'A modern code editor with AI capabilities. Built with Electron and React, featuring real-time collaboration and AI code assistance.',
      tech: ['React', 'Electron', 'TypeScript'],
      featured: true,
    },
    {
      title: 'Flutter Social',
      description: 'A cross-platform social media app built with Flutter. Features include real-time chat, story sharing, and custom animations.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      featured: true,
    },
    {
      title: 'AI Chat App',
      description: 'An AI-powered chat application with natural language processing capabilities, voice recognition, and real-time translation.',
      tech: ['Next.js', 'OpenAI', 'WebSocket'],
      featured: true,
    },
    {
      title: 'Kotlin Weather',
      description: 'A modern weather app built with Jetpack Compose. Features include location-based forecasts, weather alerts, and beautiful animations.',
      tech: ['Kotlin', 'Jetpack Compose', 'OpenWeather API'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with features like real-time inventory, payment processing, and admin dashboard.',
      tech: ['Next.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'DevOps Dashboard',
      description: 'A comprehensive DevOps monitoring dashboard with real-time metrics, deployment tracking, and incident management.',
      tech: ['React', 'GraphQL', 'Docker'],
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div 
      className="bg-[#18181b] rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-purple-500/20 group flex flex-col 
                w-[calc(100vw-2rem)] md:w-auto flex-shrink-0 snap-center md:snap-align-none mx-2 first:ml-0 last:mr-0"
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
            <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 md:pb-0 md:overflow-x-visible snap-x snap-mandatory w-full">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text">Other Projects</h2>
            <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4 md:pb-0 md:overflow-x-visible snap-x snap-mandatory w-full">
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
