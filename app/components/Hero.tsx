'use client';

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 opacity-75 blur-md animate-pulse"></div>
            {/* Add your photo in the public/images directory and update the src path */}
            <Image
              src="/images/profile.png"
              alt="Abul Kalam Robin"
              width={192}
              height={192}
              className="rounded-full object-cover border-4 border-purple-500/20 p-1 relative z-10"
              priority
            />
          </div>
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
          <div className="flex justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="font-space-grotesk bg-transparent hover:bg-purple-500/10 text-purple-400 font-semibold py-3 px-8 border-2 border-purple-500 rounded-full transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              Get in touch
            </button>
            <a 
              href="https://www.fiverr.com/s/Zm6lk64"
              target="_blank"
              rel="noopener noreferrer"
              className="font-space-grotesk bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 tracking-wide inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 9.73c0-2.09-.49-3.93-1.46-5.52C20.07 2.62 18.53 2 16.9 2c-1.9 0-3.51.76-4.84 2.27-.2.23-.37.46-.52.71-.15-.25-.32-.48-.52-.71C9.69 2.76 8.08 2 6.18 2c-1.63 0-3.17.62-4.64 2.21C.57 5.8.08 7.64.08 9.73c0 1.68.44 3.31 1.32 4.88.72 1.28 1.7 2.43 2.9 3.43 2.42 2 4.88 3.16 7.44 3.96.45.14.92.14 1.37 0 2.56-.8 5.02-1.96 7.44-3.96 1.2-1 2.18-2.15 2.9-3.43.88-1.57 1.32-3.2 1.32-4.88z"/>
              </svg>
              Hire me on Fiverr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
