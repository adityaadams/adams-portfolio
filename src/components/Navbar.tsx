import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

    const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORKS', href: '#works' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT', href: '#contact' },
  ];

  // Intersection Observer untuk mendeteksi section aktif
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px 0px 0px' }
    );

    // Observe semua section
    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    // Observe juga hero section
    const heroElement = document.querySelector('#hero');
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // handling untuk works section
    if (href === '#works') {
      const worksSection = document.querySelector('#works');
      if (worksSection) {
        const offsetTop = worksSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-6">
        <div className="px-6 md:px-12 flex items-center justify-between">
          {/* Left: Logo & Location */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tighter text-white">AA.</span>
            <span className="text-xs tracking-[0.3em] text-white/80 hidden md:block">
              BASED IN JAKARTA
            </span>
          </div>

          {/* Center: Clock */}
          <div className="text-xs tracking-[0.3em] text-white hidden md:block">
            {time}
          </div>

          {/* Right: Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm tracking-[0.3em] text-white hover:opacity-100 transition-all duration-300 cursor-pointer ${
                    activeSection === sectionId 
                      ? 'opacity-100 font-bold' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2 w-6' : ''
            }`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden flex flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-3xl text-white tracking-[0.2em] cursor-pointer hover:opacity-70 transition-opacity"
              style={{ 
                animation: `fadeIn 0.5s ease ${index * 0.1}s both`
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="text-xs tracking-[0.3em] text-white/70 mt-8">
            {time} · BASED IN JAKARTA
          </div>
        </div>
      )}

      {/* Style untuk animasi mobile menu */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;