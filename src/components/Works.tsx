import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { worksData } from "../types/works";

interface WorksProps {
  onHeroFade?: (progress: number) => void;
}

const Works: React.FC<WorksProps> = ({ onHeroFade }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Hero fade out effect saat scroll
  useEffect(() => {
    if (!sectionRef.current || !onHeroFade) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "top 20%",
      scrub: 1.5,
      onUpdate: (self) => {
        onHeroFade(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [onHeroFade]);

  // Staggered reveal on scroll
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Section heading animation
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
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );
      }

      // Staggered reveal untuk setiap item
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          },
        );

        // Line animation
        const line = document.getElementById(`line-${index}`);
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left" },
            {
              scaleX: 1,
              duration: 1.5,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "top 50%",
                scrub: 1,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background py-16 md:py-20 px-6 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Heading */}
        <h2
          ref={headingRef}
          className="font-display font-bold text-7xl md:text-8xl lg:text-9xl lowercase tracking-[-0.05em] text-foreground mb-4 md:mb-6 opacity-0 uppercase"
        >
          works.
        </h2>

        {/* Works List */}
        <div className="space-y-16 md:space-y-20">
          {worksData.map((work, index) => (
            <div key={work.id}>
              {/* Horizontal Line dengan animasi */}
              {index > 0 && (
                <hr
                  id={`line-${index}`}
                  className="border-t border-foreground/10 my-12 md:my-16"
                  style={{ transform: "scaleX(0)", transformOrigin: "left" }}
                />
              )}

              {/* Work Item */}
              <div
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 opacity-0"
              >
                {/* Date - Margin Kiri Lebar */}
                <div className="lg:col-span-1 lg:col-start-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">
                    {work.date}
                  </span>
                </div>

                {/* Thumbnail */}
                <div className="lg:col-span-4 lg:col-start-2">
                  <a
                    href={work.link}
                    className="block overflow-hidden group"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                      <img
                        src={work.thumbnail}
                        alt={work.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          expandedIndex === index
                            ? "scale-105 grayscale-0"
                            : "scale-100 grayscale"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>

                {/* Content - Detail */}
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="space-y-4">
                    {/* Title dan Category */}
                    <div>
                      <a
                        href={work.link}
                        className="inline-block group"
                        onClick={(e) => e.preventDefault()}
                      >
                        <h3 className="font-display font-bold text-2xl md:text-3xl lowercase leading-tight text-foreground transition-colors duration-300 group-hover:text-foreground/70">
                          {work.title}
                        </h3>
                      </a>
                      <p className="text-xs text-foreground/50 mt-0.5 font-medium">
                        {work.description}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-1.5">
                        {work.category}
                      </p>
                    </div>

                    {/* Default View - Tech Stack (selalu tampil) */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30 min-w-[55px]">
                          STACK
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {work.tags.slice(0, 4).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-foreground/5 text-foreground/70 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {work.tags.length > 4 && (
                            <span className="text-[10px] text-foreground/50">
                              +{work.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30 min-w-[55px]">
                          RESULT
                        </span>
                        <span className="text-sm text-foreground/70">
                          {work.result}
                        </span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E0E0E]/60 hover:text-[#0E0E0E] transition-all duration-300 mt-2"
                    >
                      <span className="group-hover:scale-105 transition-transform duration-300">
                        {expandedIndex === index ? "READ LESS" : "READ MORE"}
                      </span>
                      <svg
                        className={`w-3 h-3 transition-all duration-300 group-hover:scale-110 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Expanded View - STAR Method (muncul saat klik) */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        expandedIndex === index
                          ? "max-h-[1000px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4 pt-2 border-t border-foreground/5">
                        {/* Situation */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                            SITUATION
                          </span>
                          <p className="text-sm leading-relaxed text-foreground/80 italic">
                            {work.situation}
                          </p>
                        </div>

                        {/* Task */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                            TASK
                          </span>
                          <p className="text-sm leading-relaxed text-foreground/70">
                            {work.task}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                            ACTION
                          </span>
                          <p className="text-sm leading-relaxed text-foreground/70">
                            {work.action}
                          </p>
                        </div>

                        {/* Result */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                            RESULT
                          </span>
                          <p className="text-sm leading-relaxed text-foreground/80">
                            {work.result}
                          </p>
                        </div>

                        {/* Tech Tags Lengkap */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {work.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-foreground/5 text-foreground/70 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
