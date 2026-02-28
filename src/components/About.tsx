import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { experiencesData } from '../types/about';
import profileImage from '../assets/adamss2.webp'

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tier1Ref = useRef<HTMLDivElement>(null);
  const tier2Ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLHRElement>(null);
  const expHeaderRef = useRef<HTMLDivElement>(null);
  const expContentRef = useRef<HTMLDivElement>(null);
  const [currentExp, setCurrentExp] = useState(0);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
            }
          }
        );
      }

      // Timeline untuk Identity Card (Tier 1)
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: tier1Ref.current,
          start: 'top 85%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      });

      tl1.fromTo(tier1Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(imageRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo(bioRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(skillsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(valuesRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      );

      // Timeline untuk Experience Card (Tier 2)
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: tier2Ref.current,
          start: 'top 85%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      });

      tl2.fromTo(tier2Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(expHeaderRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 1.2, ease: 'power3.inOut' },
        '-=0.4'
      )
      .fromTo(expContentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextExp = () => {
    if (currentExp < experiencesData.length - 1) {
      setCurrentExp(currentExp + 1);
      gsap.fromTo(expContentRef.current,
        { x: 20, opacity: 0.5 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power4.out' }
      );
    }
  };

  const prevExp = () => {
    if (currentExp > 0) {
      setCurrentExp(currentExp - 1);
      gsap.fromTo(expContentRef.current,
        { x: -20, opacity: 0.5 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power4.out' }
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#F8F7F4] pt-10 md:pt-16 pb-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <h2
          id="about-heading"
          ref={headingRef}
          className="font-display font-bold text-7xl md:text-8xl lg:text-9xl lowercase tracking-[-0.05em] text-foreground mb-4 md:mb-6 opacity-0 uppercase"
        >
          about.
        </h2>

        {/* Cards Container */}
        <div className="space-y-6">
          
          {/* TIER 1: Identity Card */}
          <div
            ref={tier1Ref}
            className="w-full bg-white rounded-2xl p-6 md:p-8 opacity-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Left - Profile Image */}
              <div ref={imageRef} className="opacity-0 md:col-span-4 h-full">
                <div className="aspect-square w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={profileImage}
                    alt="Aditya Adam"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Right - Bio, Skills, Values */}
              <div className="md:col-span-8 flex flex-col justify-between h-full space-y-5">
                
                {/* Brief Bio */}
                <div ref={bioRef} className="space-y-3 opacity-0">
                  <p className="text-xl md:text-2xl leading-snug text-[#0E0E0E]/90 font-light">
                    I'm a full-stack web developer and architect based in Jakarta, passionate about building digital experiences that are both beautiful and functional.
                  </p>
                  <p className="text-sm text-[#0E0E0E]/70 leading-relaxed">
                    My journey into web development started 6 years ago, driven by curiosity about how technology can solve real problems. Since then, I've helped startups and enterprises transform complex ideas into scalable, performant applications.
                  </p>
                </div>

                {/* Wrapper untuk Skills & Values */}
                <div className="space-y-5 pt-4 border-t border-black/5">
                  
                  {/* Core Skills */}
                  <div ref={skillsRef} className="space-y-2 opacity-0">
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0E0E0E]/40">CORE SKILLS</h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] px-2.5 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/70 rounded-full">JavaScript/TS</span>
                      <span className="text-[11px] px-2.5 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/70 rounded-full">React/Next.js</span>
                      <span className="text-[11px] px-2.5 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/70 rounded-full">Node.js</span>
                      <span className="text-[11px] px-2.5 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/70 rounded-full">Python</span>
                      <span className="text-[11px] px-2.5 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/70 rounded-full">MongoDB</span>
                      <span className="text-[11px] px-2.5 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/70 rounded-full">GSAP</span>
                    </div>
                  </div>

                  {/* Key Values */}
                  <div ref={valuesRef} className="space-y-2 opacity-0">
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0E0E0E]/40">KEY VALUES</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#0E0E0E]/30 rounded-full"></span>
                        <span className="text-xs text-[#0E0E0E]/70">Timeliness</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#0E0E0E]/30 rounded-full"></span>
                        <span className="text-xs text-[#0E0E0E]/70">Clear Communication</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#0E0E0E]/30 rounded-full"></span>
                        <span className="text-xs text-[#0E0E0E]/70">Attention to Detail</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#0E0E0E]/30 rounded-full"></span>
                        <span className="text-xs text-[#0E0E0E]/70">Problem Solving</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIER 2: Experience Card */}
          <div
            ref={tier2Ref}
            className="w-full bg-white rounded-2xl p-6 md:p-8 opacity-0"
          >
            <div className="space-y-6">
              
              {/* Header */}
              <div ref={expHeaderRef} className="flex items-center justify-between opacity-0">
                <h3 className="text-[16px] font-bold uppercase tracking-[0.3em] text-[#0E0E0E]/40">
                  experience
                </h3>
                <div className="flex items-center gap-3">
                  {/* Previous Button */}
                  <button
                    onClick={prevExp}
                    disabled={currentExp === 0}
                    aria-label="Previous experience"
                    className={`p-1.5 rounded-full border border-[#0E0E0E]/20 hover:border-[#0E0E0E]/60 transition-all ${
                      currentExp === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#0E0E0E]/5'
                    }`}
                  >
                    <svg className="w-4 h-4 text-[#0E0E0E]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Next Button */}
                  <button
                    onClick={nextExp}
                    disabled={currentExp === experiencesData.length - 1}
                    aria-label="Next experience"
                    className={`p-1.5 rounded-full border border-[#0E0E0E]/20 hover:border-[#0E0E0E]/60 transition-all ${
                      currentExp === experiencesData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#0E0E0E]/5'
                    }`}
                  >
                    <svg className="w-4 h-4 text-[#0E0E0E]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Garis pemisah */}
              <hr
                ref={lineRef}
                className="border-t border-[#0E0E0E]/20"
                style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
              />

              {/* Experience Content */}
              <div ref={expContentRef} className="space-y-4 opacity-0">
                <div>
                  <h4 className="font-display font-bold text-2xl md:text-3xl lowercase leading-tight text-[#0E0E0E]">
                    {experiencesData[currentExp].position}
                  </h4>
                  <p className="text-sm text-[#0E0E0E]/60 mt-1">
                    {experiencesData[currentExp].company}
                  </p>
                </div>
                
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#0E0E0E]/40">
                  {experiencesData[currentExp].period}
                </div>
                
                <p className="text-sm leading-relaxed text-[#0E0E0E]/70 max-w-3xl">
                  {experiencesData[currentExp].description}
                </p>
                
                {/* Tech Stack */}
                {experiencesData[currentExp].tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experiencesData[currentExp].tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] font-bold uppercase tracking-[0.15em] px-2 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/50 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;