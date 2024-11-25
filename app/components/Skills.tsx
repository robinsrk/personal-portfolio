export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML5/CSS3',
        'JavaScript (ES6+)',
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        'Flutter',
        'Dart',
        'React Native',
        'Jetpack Compose',
        'Kotlin',
        'Swift UI',
      ]
    },
    {
      title: 'UI/UX Design',
      skills: [
        'Figma',
        'Adobe XD',
        'Responsive Design',
        'Prototyping',
        'User Research',
        'Design Systems',
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git/GitHub',
        'VS Code',
        'Docker',
        'Firebase',
        'AWS',
        'Vercel',
      ]
    }
  ];

  return (
    <section className="min-h-screen py-24 flex items-center justify-center bg-[#18181b]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            I specialize in crafting beautiful, high-performance applications using modern technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#27272a]/50 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300
                        backdrop-blur-sm group hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-[#ccd6f6] flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-4 h-4 text-purple-500"
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
              'React', 'Next.js', 'TypeScript', 'Flutter', 'Kotlin', 'Swift',
              'Tailwind', 'Firebase', 'AWS', 'Figma', 'Git', 'VS Code'
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
