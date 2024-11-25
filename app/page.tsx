'use client';

import Header from './components/Header'
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="snap-container">
        <section id="hero" className="snap-section">
          <Hero />
        </section>
        <section id="projects" className="snap-section">
          <Projects />
        </section>
        <section id="skills" className="snap-section">
          <Skills />
        </section>
        <section id="contact" className="snap-section">
          <Contact />
        </section>
      </main>
    </>
  )
}
