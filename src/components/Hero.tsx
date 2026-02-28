import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/Button";
import heroImage from "../assets/adams1.webp";

interface HeroProps {
  firstName?: string;
  lastName?: string;
  description?: string;
  location?: string;
}

const Hero: React.FC<HeroProps> = ({
  firstName = "Aditya",
  lastName = "adam",
  description = "Full-Stack Web Developer & Architect  · Architecting scalable digital systems and high-performance web experiences.",
  location = "JAKARTA",
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = {
    firstName: useRef<HTMLHeadingElement>(null),
    lastName: useRef<HTMLHeadingElement>(null),
    description: useRef<HTMLParagraphElement>(null),
    location: useRef<HTMLSpanElement>(null),
    button: useRef<HTMLDivElement>(null),
  };
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);

  // Entrance Animations
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "expo.out", duration: 2.5 },
      });

      timeline
        .fromTo(
          textRefs.firstName.current,
          { y: "100%", rotation: 0.01 },
          { y: 0 },
        )
        .fromTo(
          textRefs.lastName.current,
          { y: "100%", rotation: 0.01 },
          { y: 0 },
          "-=2.0",
        )
        .fromTo(
          textRefs.description.current,
          { y: "100%", rotation: 0.01 },
          { y: 0, duration: 1.8 },
          "-=1.2",
        )
        .fromTo(
          textRefs.location.current,
          { y: "100%", rotation: 0.01 },
          { y: 0, duration: 1.5 },
          "-=1.0",
        )
        .fromTo(
          textRefs.button.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
          "-=0.8",
        );

      timeline.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" },
        "-=2.0",
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Parallax Effect
  useEffect(() => {
    const image = imageInnerRef.current;
    if (!image) return;
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        const moveY = self.progress * 100;
        image.style.transform = `translateY(${moveY}px) scale(1)`;
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-background text-foreground overflow-hidden"
    >
      <div className="relative h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12">
        <div className="flex flex-col md:block flex-1 relative">
          {/* Typography Layer */}
          <div className="relative z-20 mb-[-20vh] md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 pointer-events-none">
            <div className="overflow-hidden">
              <h1
                ref={textRefs.firstName}
                className="font-display font-bold text-[20vw] md:text-[16vw] leading-[0.75] tracking-[-0.03em] uppercase"
              >
                {firstName}
              </h1>
            </div>

            {/* nama: ADAM */}
            <div className="overflow-hidden ml-[15vw] md:ml-[25vw]">
              <h1
                ref={textRefs.lastName}
                className="font-display font-bold text-[20vw] md:text-[16vw] leading-[0.75] tracking-[-0.03em] uppercase"
              >
                {lastName}
              </h1>
            </div>
          </div>
          {/* Image Layer */}
          <div
            ref={imageRef}
            className="absolute top-1/2 md:top-1/3 left-[60%] md:left-[75%] -translate-x-1/2 -translate-y-[20%] z-10 
                       w-[65vw] md:w-[32vw] aspect-[4/5] opacity-0"
          >
            <div className="relative w-full h-full overflow-hidden shadow-2xl">
              <img
                ref={imageInnerRef}
                src={heroImage}
                alt={`${firstName} ${lastName}`}
                fetchPriority="high" 
                className="w-full h-full object-cover grayscale opacity-80 md:opacity-100"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-8 mt-auto">
          <div className="space-y-4">
            <div className="overflow-hidden">
              <span
                ref={textRefs.location}
                className="text-[10px] tracking-[0.3em] font-medium opacity-70 block translate-y-full uppercase"
              >
                BASED IN {location}
              </span>
            </div>
            <div className="overflow-hidden">
              <p
                ref={textRefs.description}
                className="text-lg md:text-2xl text-foreground/80 max-w-xl md:max-w-2xl leading-tight translate-y-full"
              >
                {description}
              </p>
            </div>
          </div>
          <div className="flex justify-start md:justify-end items-end">
            <div ref={textRefs.button} className="opacity-0 translate-x-5">
              <Button href="#contact" variant="primary">
                START A PROJECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
