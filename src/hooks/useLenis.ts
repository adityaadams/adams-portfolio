import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useLenis = (containerRef: RefObject<HTMLDivElement | null>) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { 
          top: 0, 
          left: 0, 
          width: window.innerWidth, 
          height: window.innerHeight 
        };
      },
      pinType: containerRef.current?.style.transform ? 'transform' : 'fixed',
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [containerRef]);

  return lenisRef;
};
