import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Github, Linkedin, Twitter, Mail, FileText, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
      setCurrentTime(`${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Animations
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Headline reveal animation
      if (headlineRef.current) {
        gsap.fromTo(headlineRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
            }
          }
        );
      }

      // Form inputs line animation
      if (nameInputRef.current) {
        gsap.fromTo(nameInputRef.current,
          { width: 0 },
          {
            width: '100%',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: nameInputRef.current,
              start: 'top 90%',
              end: 'top 60%',
              scrub: 1,
            }
          }
        );
      }

      if (emailInputRef.current) {
        gsap.fromTo(emailInputRef.current,
          { width: 0 },
          {
            width: '100%',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: emailInputRef.current,
              start: 'top 90%',
              end: 'top 60%',
              scrub: 1,
            }
          }
        );
      }

      if (messageInputRef.current) {
        gsap.fromTo(messageInputRef.current,
          { width: 0 },
          {
            width: '100%',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: messageInputRef.current,
              start: 'top 90%',
              end: 'top 60%',
              scrub: 1,
            }
          }
        );
      }

      // Button animation
      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: buttonRef.current,
              start: 'top 90%',
              end: 'top 70%',
              scrub: 1,
            }
          }
        );
      }

      // Details animation
      if (detailsRef.current) {
        gsap.fromTo(detailsRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: detailsRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1,
            }
          }
        );
      }

      // Footer animation
      if (footerRef.current) {
        gsap.fromTo(footerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 95%',
              end: 'top 75%',
              scrub: 1,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Demo alert
    alert(`Message sent! (Demo)\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#F8F7F4] pt-16 md:pt-20 pb-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Headline */}
        <h2
          id="contact-heading"
          ref={headlineRef}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#0E0E0E] max-w-4xl leading-[1.1] mb-12 md:mb-16 opacity-0"
        >
          Have an awesome idea?<br />Let's bring it to life.
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* Left Side - (60%) */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name & Email Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-light text-[#0E0E0E]/60 uppercase tracking-wider">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Lewis Hamilton"
                    className="w-full bg-transparent border-b border-black/20 py-2 text-[#0E0E0E] placeholder:text-black/30 focus:border-black focus:outline-none transition-colors duration-300"
                  />
                  <div
                    ref={nameInputRef}
                    className="h-[1px] bg-black origin-left"
                    style={{ width: 0 }}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-light text-[#0E0E0E]/60 uppercase tracking-wider">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="lh@44.com"
                    className="w-full bg-transparent border-b border-black/20 py-2 text-[#0E0E0E] placeholder:text-black/30 focus:border-black focus:outline-none transition-colors duration-300"
                  />
                  <div
                    ref={emailInputRef}
                    className="h-[1px] bg-black origin-left"
                    style={{ width: 0 }}
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-light text-[#0E0E0E]/60 uppercase tracking-wider">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Through goes Hamilton!!"
                  className="w-full bg-transparent border-b border-black/20 py-2 text-[#0E0E0E] placeholder:text-black/30 focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                />
                <div
                  ref={messageInputRef}
                  className="h-[1px] bg-black origin-left"
                  style={{ width: 0 }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  ref={buttonRef}
                  type="submit"
                  className="px-10 py-4 bg-black text-white rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 opacity-0"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - (40%) */}
          <div
            ref={detailsRef}
            className="lg:col-span-4 lg:col-start-9 space-y-8 opacity-0 lg:translate-y-[-20px]"
          >
            {/* Contact Details */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                CONTACT DETAILS
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:adamssaditya@gmail.com"
                  className="flex items-center gap-3 text-sm text-black/70 hover:text-black transition-colors group"
                >
                  <Mail size={14} className="text-black/40 group-hover:text-black transition-colors" />
                  <span className="font-mono text-xs">adamssaditya@gmail.com</span>
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Resume download (Demo)');
                  }}
                  className="flex items-center gap-3 text-sm text-black/70 hover:text-black transition-colors group cursor-pointer"
                >
                  <FileText size={14} className="text-black/40 group-hover:text-black transition-colors" />
                  <span className="font-mono text-xs uppercase tracking-wider">RESUME</span>
                </a>
              </div>
            </div>

            {/* My Digital Spaces */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                MY DIGITAL SPACES
              </h3>
              <div className="space-y-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-black/70 hover:text-black transition-colors group"
                >
                  <Github size={14} className="text-black/40 group-hover:text-black transition-colors" />
                  <span className="font-mono text-xs">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-black/70 hover:text-black transition-colors group"
                >
                  <Linkedin size={14} className="text-black/40 group-hover:text-black transition-colors" />
                  <span className="font-mono text-xs">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-black/70 hover:text-black transition-colors group"
                >
                  <Twitter size={14} className="text-black/40 group-hover:text-black transition-colors" />
                  <span className="font-mono text-xs">Twitter / X</span>
                </a>
              </div>
            </div>

            {/* Location & Time */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                LOCATION & TIME
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-black/70">
                  <MapPin size={14} className="text-black/40" />
                  <span className="font-mono text-xs">Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-black/70">
                  <Clock size={14} className="text-black/40" />
                  <span className="font-mono text-xs">{currentTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer ref={footerRef} className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
          <div className="flex gap-1">
            <span>© {new Date().getFullYear()} Aditya Adam</span>
          </div>
          
          <div className="flex items-center gap-1 opacity-60 normal-case font-medium">
            Designed and coded with <span className="text-red-500">❤️</span>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            aria-label="Back to top"
            className="flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            BACK TO TOP 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Contact;