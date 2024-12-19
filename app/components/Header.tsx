'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#09090b]/80 backdrop-blur-md z-50 h-[var(--header-height)] flex items-center">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-space-grotesk text-2xl font-bold bg-gradient-to-r from-[hsl(250,100%,70%)] to-[hsl(310,100%,70%)] text-transparent bg-clip-text hover:from-[hsl(250,100%,80%)] hover:to-[hsl(310,100%,80%)] transition-all relative z-[60] tracking-tight"
            >
              Robin Dev
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className="text-lg font-medium text-[#ccd6f6] hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-[60] p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`w-6 h-0.5 mb-1.5 transition-all bg-purple-500 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 mb-1.5 transition-all bg-purple-500 ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 transition-all bg-purple-500 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed md:hidden top-0 left-0 w-full h-screen bg-gradient-to-b from-[#09090b] to-[#2e1065] transition-all duration-300 z-50 ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-[-100%]'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center w-full h-full relative">
          {/* Cancel Button */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-purple-500/10 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <div 
            className="flex flex-col items-center justify-center gap-12 -mt-[var(--header-height)]"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item) => (
              <button
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="text-2xl font-medium text-[#ccd6f6] hover:text-purple-400 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
