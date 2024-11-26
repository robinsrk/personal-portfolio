
interface Project {
  title: string;
  description: string;
  tech: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Windsurf IDE',
      description: 'A modern code editor with AI capabilities. Built with Electron and React, featuring real-time collaboration and AI code assistance.',
      tech: ['React', 'Electron', 'TypeScript'],
    },
    {
      title: 'Flutter Social',
      description: 'A cross-platform social media app built with Flutter. Features include real-time chat, story sharing, and custom animations.',
      tech: ['Flutter', 'Firebase', 'Dart'],
    },
    {
      title: 'AI Chat App',
      description: 'An AI-powered chat application with natural language processing capabilities, voice recognition, and real-time translation.',
      tech: ['Next.js', 'OpenAI', 'WebSocket'],
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

  return (
    <section id="projects" className="min-h-screen py-24 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#ccd6f6]">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#18181b] rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-purple-500/20 group flex flex-col"
            >
              <div className="h-48 bg-[#27272a] relative overflow-hidden" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-[#ccd6f6] group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8892b0] mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm px-3 py-1 bg-[#27272a] text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
