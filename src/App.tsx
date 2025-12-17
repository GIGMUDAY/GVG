import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Challenge from './components/sections/Challenge';
import Introduction from './components/sections/Introduction';
import Features from './components/sections/Features';
import Advantages from './components/sections/Advantages';
import Sustainability from './components/sections/Sustainability';
import Partners from './components/sections/Partners';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Tokenomics from './components/sections/Tokenomics';
import Community from './components/sections/Community';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';
import SilkBackground from './components/SilkBackground';
import './styles/animations.css';

const SHOW_TESTIMONIALS = false;

function App() {
  useEffect(() => {
    // Set dark theme as default on initial load
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      root.classList.add('dark');
    }
    
    // Update document title
    document.title = 'Green Value Group';
    
    // Get the favicon element
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      // Change favicon to use the GVG logo
      favicon.setAttribute('href', '/GIG final-01.png');
    }
    
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
          anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (!targetElement) return;
            
            window.scrollTo({
              top: (targetElement as HTMLElement).offsetTop,
              behavior: 'smooth'
            });
          });
        });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative bg-white dark:bg-black transition-colors duration-400">
        {/* Silk background - covers entire site behind content */}
        <SilkBackground />
        
        {/* Navbar - Above everything */}
        <div className="relative" style={{ zIndex: 100 }}>
          <Navbar />
        </div>
        
        {/* Content Sections - Above the robot */}
        <div className="relative z-10">
          <Hero />
          <Challenge />
          <Introduction />
          <Features />
          <Advantages />
          <Sustainability />
          <Partners />
          <Team />
          {SHOW_TESTIMONIALS && <Testimonials />}
          <Tokenomics />
          <Community />
          <FAQ />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
