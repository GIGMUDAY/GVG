import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href === '#') return;
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Challenge', href: '#challenge' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Partners', href: '#partners' },
    { label: 'Team', href: '#team' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Community', href: '#community' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/30 backdrop-blur-lg shadow-lg py-1' 
          : 'bg-black/30 backdrop-blur-lg py-2'
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Three-line Hamburger Button - Left Side */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col items-center justify-center w-8 h-8 sm:w-10 sm:h-10 focus:outline-none z-10 transition-all duration-300"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`absolute block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}></span>
            <span className={`absolute block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}></span>
          </button>
          
          {/* Logo - Center */}
          <div className="flex items-center absolute left-1/2 transform -translate-x-1/2 w-auto max-w-[50%] sm:max-w-none">
            <a href="#" className="flex items-center">
              <img 
                src="/GIG final-01.png" 
                alt="Green Value Group" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 mr-1 sm:mr-2 md:mr-3 brightness-0 invert flex-shrink-0"
              />
              <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="hidden sm:inline">Green Value Group</span>
                <span className="sm:hidden">GVG</span>
              </span>
            </a>
          </div>
          
          {/* Theme Toggle - Right Side */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ paddingTop: '4rem' }}
      >
        <div 
          className="max-w-7xl mx-auto px-6 py-8"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-white text-lg sm:text-xl font-medium hover:text-green-400 transition-colors duration-200 py-2 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/20">
              <a
                href="https://gig-invest.org/gig-token-whitepaperoverview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-lg sm:text-xl font-medium hover:text-green-400 transition-colors duration-200 py-2"
              >
                Whitepaper →
              </a>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
