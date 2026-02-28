import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP, CustomEase);
CustomEase.create('premium', '0.76, 0, 0.24, 1');

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroY, setHeroY] = useState(0);
  
  useLenis(containerRef);

  useGSAP(() => {
    gsap.ticker.lagSmoothing(1000, 16);
  }, []);

  const handleHeroFade = (progress: number) => {
    setHeroOpacity(Math.max(0, 1 - progress * 1.5));
    setHeroY(progress * 50);
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-[#F8F7F4]"
    >
      <Navbar />
      
      {/* MAIN CONTENT */}
      <main id="main-content">
        {/* HERO Section */}
        <div
          id="hero"
          ref={heroRef}
          style={{
            opacity: heroOpacity,
            transform: `translateY(-${heroY}px)`,
            transition: 'opacity 0.2s ease, transform 0.2s ease'
          }}
        >
          <Hero />
        </div>
        {/* WORKS Section */}
        <section id="works" aria-labelledby="works-heading">
          <Works onHeroFade={handleHeroFade} />
        </section>

        {/* ABOUT Section */}
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>

        {/* SKILLS Section */}
        <section id="skills" aria-labelledby="skills-heading">
          <Skills />
        </section>

        {/* TESTIMONIALS Section */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>

        {/* CONTACT Section */}
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;