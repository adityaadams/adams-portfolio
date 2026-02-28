import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href = '#', 
  variant = 'primary',
  className = '' 
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;
    if (!button || !circle) return;

    const hoverTimeline = gsap.timeline({ paused: true });
    
    hoverTimeline
      .to(circle, {
        scale: 20,
        duration: 0.6,
        ease: 'power2.out',
      })
      .to(
        button,
        {
          color: '#f8f7f4',
          duration: 0.4,
          ease: 'power2.out',
        },
        0.2
      );

    button.addEventListener('mouseenter', () => hoverTimeline.play());
    button.addEventListener('mouseleave', () => hoverTimeline.reverse());

    return () => {
      button.removeEventListener('mouseenter', () => hoverTimeline.play());
      button.removeEventListener('mouseleave', () => hoverTimeline.reverse());
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full overflow-hidden transition-colors duration-300 ${
        variant === 'primary' 
          ? 'bg-foreground text-background' 
          : 'border border-foreground/20 text-foreground hover:border-foreground'
      } ${className}`}
    >
      <span 
        ref={circleRef}
        className="absolute inset-0 w-full h-full bg-foreground scale-0 rounded-full"
        style={{ transformOrigin: 'center' }}
      />
      <span className="relative z-10 text-[10px] tracking-[0.3em] font-medium">
        {children}
      </span>
    </a>
  );
};

export default Button;