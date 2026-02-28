import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { skillsData } from "../types/skills";

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi Ukuran Layar
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animasi Masuk (Scroll Animations)
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animasi Judul "SKILLS."
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 90%",
              end: "top 40%",
              scrub: 1,
            },
          },
        );
      }

      // Animasi Fade-in Container Utama
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animasi Ekspansi Kolom (Desktop)
  useEffect(() => {
    if (isMobile) return; 

    columnsRef.current.forEach((column, index) => {
      if (!column) return;

      const isHovered = hoveredIndex === index;
      const targetFlex = hoveredIndex !== null ? (isHovered ? 2 : 0.85) : 1;

      gsap.to(column, {
        flexGrow: targetFlex,
        duration: 0.7,
        ease: "expo.out",
        overwrite: true,
      });

      // Animasi Konten (Desktop Only)
      const contentItems = column.querySelectorAll(".skill-content");
      const verticalText = column.querySelector(".vertical-text");

      gsap.to(contentItems, {
        opacity: isHovered ? 1 : 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(verticalText, {
        opacity: isHovered ? 0 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, [hoveredIndex, isMobile]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#F8F7F4] py-12 md:py-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Heading */}
        <h2
          id="skills-heading"
          ref={headingRef}
          className="font-display font-bold text-7xl md:text-8xl lg:text-9xl lowercase tracking-[-0.05em] text-foreground mb-4 md:mb-6 opacity-0 uppercase"
        >
          skills.
        </h2>

        {/* Desktop View - Vertical Columns */}
        {!isMobile && (
          <div
            ref={containerRef}
            className="flex w-full h-[600px] border border-[#0E0E0E]/10 rounded-2xl overflow-hidden bg-white opacity-0"
          >
            {skillsData.map((skill, index) => (
              <div
                key={skill.id}
                ref={(el) => {
                  columnsRef.current[index] = el;
                }}
                className="relative h-full border-r border-[#0E0E0E]/10 last:border-r-0 overflow-hidden cursor-pointer flex-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* ID / Serial Number */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#0E0E0E]/30 font-mono uppercase">
                    00-{index + 1}
                  </span>
                </div>

                {/* Vertical Text */}
                <div className="vertical-text absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-[#0E0E0E] uppercase [writing-mode:vertical-rl] rotate-180">
                    {skill.name}
                  </h3>
                </div>

                {/* Expanded Content */}
                <div className="skill-content absolute inset-0 p-10 opacity-0 bg-white flex flex-col pointer-events-none">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[9px] font-bold tracking-[0.3em] text-[#0E0E0E]/40 font-mono">
                      00-{index + 1}
                    </span>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E0E0E]/60">
                        {skill.title}
                    </h4>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="space-y-2 mb-6">
                      {skill.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="text-xl md:text-2xl font-bold tracking-tight text-[#0E0E0E] leading-tight uppercase"
                        >
                          /{tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deskripsi */}
                  <div className="pt-6 border-t border-black/5">
                    <p className="text-[11px] leading-relaxed text-[#0E0E0E]/60 uppercase font-medium max-w-xs">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile View - Accordion Style */}
        {isMobile && (
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <div
                key={skill.id}
                className="bg-white rounded-xl overflow-hidden border border-[#0E0E0E]/10"
              >
                {/* Header Mobile */}
                <div
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() =>
                    setExpandedMobile(expandedMobile === index ? null : index)
                  }
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-black/30 mb-1">
                      00-{index + 1}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest">
                      {skill.name}
                    </span>
                  </div>
                  <div
                    className={`transition-transform duration-300 ${expandedMobile === index ? "rotate-180" : ""}`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Konten Mobile - Terbuka */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedMobile === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-black/5">
                    {/* Tech Stack List */}
                    <div className="flex flex-wrap gap-2 mb-4 pt-4">
                      {skill.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[9px] px-2 py-1 bg-black/5 rounded font-bold uppercase text-black/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Deskripsi */}
                    <p className="text-[11px] leading-relaxed text-black/50 uppercase font-medium">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;