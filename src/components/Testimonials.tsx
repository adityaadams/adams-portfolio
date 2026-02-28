import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { testimonialsData } from '../types/testimonials';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const clientInfoRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Heading animation
  useGSAP(() => {
    const ctx = gsap.context(() => {
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

      if (containerRef.current) {
        gsap.fromTo(containerRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Navigasi PREV/NEXT dengan animasi GSAP
  const navigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return;

    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % testimonialsData.length 
      : (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;

    setIsAnimating(true);

    // Animasi fade out
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        
        // Animasi fade in dengan konten baru
        gsap.fromTo([quoteRef.current, clientInfoRef.current, avatarRef.current],
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
            onComplete: () => setIsAnimating(false)
          }
        );
      }
    });

    tl.to([quoteRef.current, clientInfoRef.current, avatarRef.current], {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      stagger: 0.05
    });
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-[#F8F7F4] py-16 md:py-20 px-6 md:px-12 overflow-hidden" 
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <h2
          ref={headingRef}
          className="font-display font-bold text-7xl md:text-8xl lg:text-9xl lowercase tracking-[-0.05em] text-foreground mb-4 md:mb-6 opacity-0 uppercase"
        >
          testimonials.
        </h2>

        {/* Testimonial Container */}
        <div
          ref={containerRef}
          className="max-w-4xl mx-auto opacity-0"
        >
          {/* ID Label */}
          <div className="mb-4"> 
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-black/40 uppercase">
              // Words That Carry Weight
            </span>
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-center text-center space-y-6"> 
            
            {/* Avatar - ukuran diperkecil */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden"> 
              <img
                ref={avatarRef}
                src={currentTestimonial.avatar}
                alt={currentTestimonial.clientName}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Quote*/}
            <p
              ref={quoteRef}
              className="text-lg md:text-xl lg:text-2xl leading-tight text-[#0E0E0E]/80 max-w-2xl mx-auto font-light" 
            >
              "{currentTestimonial.quote}"
            </p>

            {/* Client Info */}
            <div ref={clientInfoRef} className="space-y-1"> 
              <h4 className="text-sm md:text-base font-bold uppercase tracking-tight text-[#0E0E0E]"> 
                {currentTestimonial.clientName}
              </h4>
              <p className="text-[10px] font-mono uppercase tracking-wider text-black/50">
                {currentTestimonial.clientRole}, {currentTestimonial.clientCompany}
              </p>
            </div>

            {/* Pagination Dots*/}
            <div ref={dotsRef} className="flex justify-center gap-2 pt-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== currentIndex && !isAnimating) {
                      setIsAnimating(true);
                      const tl = gsap.timeline({
                        onComplete: () => {
                          setCurrentIndex(index);
                          gsap.fromTo([quoteRef.current, clientInfoRef.current, avatarRef.current],
                            { y: 20, opacity: 0 },
                            {
                              y: 0,
                              opacity: 1,
                              duration: 0.6,
                              ease: 'power3.out',
                              stagger: 0.1,
                              onComplete: () => setIsAnimating(false)
                            }
                          );
                        }
                      });
                      tl.to([quoteRef.current, clientInfoRef.current, avatarRef.current], {
                        y: -20,
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power2.in',
                        stagger: 0.05
                      });
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-black w-6' 
                      : 'bg-black/20 hover:bg-black/40'
                  }`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>

          {/* Navigation Bottom Bar */}
          <div className="mt-8 pt-2"> {/* DIPERKECIL: mt-12 pt-4 -> mt-8 pt-2 */}
            <div className="grid grid-cols-2 divide-x divide-black/10">
              {/* PREV Button */}
              <button
                onClick={() => navigate('prev')}
                disabled={isAnimating}
                className="py-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" // DIPERKECIL: py-4 text-sm -> py-3 text-xs
              >
                PREV
              </button>
              
              {/* NEXT Button */}
              <button
                onClick={() => navigate('next')}
                disabled={isAnimating}
                className="py-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" // DIPERKECIL: py-4 text-sm -> py-3 text-xs
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;