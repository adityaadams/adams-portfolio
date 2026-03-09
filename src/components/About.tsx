import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { experiencesData } from '../types/about';
import profileImage from '../assets/adams2.webp'

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
  const [showDetails, setShowDetails] = useState(false);

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
                    I’m a Full-Stack Web Developer currently diving deep into the world of modern web technologies. I spend my days building, breaking, and "GPT-ing" my way through complex challenges to create high-performance web experiences.
                  </p>
                  <p className="text-sm text-[#0E0E0E]/70 leading-relaxed">
                    My journey is fueled by a mix of curiosity, late-night Googling, and a passion for turning complex problems into clean, functional code. I don’t just write code; I’m on a mission to master the art of building scalable web applications, one bug at a time.
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
                      <span className="text-[11px] px-2.5 py-1 bg-[#0E0E0E]/5 text-[#0E0E0E]/70 rounded-full">Tailwind</span>
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
                
                {/* TOGGLE DETAILS */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E0E0E]/40 hover:text-[#0E0E0E] transition-all duration-300"
                >
                  <span>{showDetails ? 'SHOW SUMMARY' : 'SHOW DETAILS'}</span>
                  <svg 
                    className={`w-3 h-3 transition-transform duration-300 ${
                      showDetails ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
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
                    {experiencesData[0].position}
                  </h4>
                  <p className="text-sm text-[#0E0E0E]/60 mt-1">
                    {experiencesData[0].company}
                  </p>
                </div>
                
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#0E0E0E]/40">
                  {experiencesData[0].period}
                </div>
                
                {/* CONDITIONAL RENDERING */}
                {!showDetails ? (
                  /* SUMMARY VIEW */
                  <p className="text-sm leading-relaxed text-[#0E0E0E]/70 max-w-3xl">
                    {experiencesData[0].description}
                  </p>
                ) : (
                  /* DETAILS VIEW */
                  <div className="space-y-3">
                    {experiencesData[0].responsibilities?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#0E0E0E]/30 text-xs">◆</span>
                        <p className="text-sm leading-relaxed text-[#0E0E0E]/70">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Tech Tags */}
                {experiencesData[0].tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experiencesData[0].tags?.map((tag, idx) => (
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