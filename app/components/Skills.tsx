export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React.js',
        'Next.js',
        'JavaScript',
        'Tailwind CSS',
        'HTML/CSS',
        'Material UI',
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'RESTful APIs',
        'GraphQL',
      ],
    },
    {
      title: 'Mobile Development',
      skills: [
        'Flutter',
        'Dart',
        'Jetpack Compose',
        'Android Development',
        'Firebase',
        'Material Design',
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Neovim',
        'Linux',
        'Docker',
      ],
    },
  ];

  return (
    <section className="min-h-screen py-24 flex items-center justify-center bg-[#18181b]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            I specialize in crafting beautiful, high-performance applications using modern technologies and best practices.
          </p>
        </div>
        
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto pb-4 md:pb-0 md:overflow-x-visible snap-x snap-mandatory">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#27272a]/50 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300
                        backdrop-blur-sm group hover:transform hover:scale-105 w-[280px] md:w-auto snap-center flex-shrink-0 md:flex-shrink"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text group-hover:from-[hsl(250,100%,80%)] group-hover:to-[hsl(310,100%,80%)] transition-all">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-[#ccd6f6] flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-4 h-4 text-[hsl(250,100%,70%)] group-hover:text-[hsl(310,100%,70%)] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-[#ccd6f6]">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              'React', 'Next.js', 'Flutter', 'Jetpack Compose', 'JavaScript', 'Dart',
              'Tailwind', 'Firebase', 'Git', 'VS Code', 'Neovim', 'Android Studio'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-[#27272a]/30 rounded-lg p-4 border border-purple-500/10 hover:border-purple-500/30
                          transition-all duration-300 hover:transform hover:scale-110 group"
              >
                <span className="text-[#8892b0] group-hover:text-purple-400 transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
