import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-space-grotesk text-xl md:text-2xl text-purple-400 mb-4 animate-fade-in tracking-wide">
            Hi, I&apos;m
          </h2>
          <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text tracking-tight">
            Abul Kalam Robin
          </h1>
          <div className="font-fira-code text-xl md:text-2xl text-[#8892b0] mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Mobile App Developer',
                2000,
                'UI/UX Designer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['TypeScript', 'React', 'Next.js', 'Flutter', 'Jetpack Compose'].map((tech) => (
              <span 
                key={tech} 
                className="font-fira-code px-4 py-2 bg-[#18181b] rounded-full text-purple-400 border border-purple-500 hover:bg-purple-500/10 transition-colors text-sm tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
          <button className="font-space-grotesk bg-transparent hover:bg-purple-500/10 text-purple-400 font-semibold py-3 px-8 border-2 border-purple-500 rounded-full transition-all duration-300 transform hover:scale-105 tracking-wide">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
