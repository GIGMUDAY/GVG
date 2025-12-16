import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-animate overflow-hidden">
      {/* Background overlay pattern */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center perspective-container">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-white leading-tight mb-6 animate-slide-down font-playfair">
          Invest in Ethiopia's Green Future. 
          <span className="block mt-2">Empower Local Businesses.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-light max-w-3xl mx-auto mb-10 animate-slide-up animation-delay-200">
          GVG Token is a pioneering blockchain platform connecting Ethiopian diaspora investors with high-impact, sustainable local enterprises. We're building a transparent, efficient, and fair ecosystem for shared prosperity and environmental stewardship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale animation-delay-400">
          <a href="#get-started">
            <Button 
              variant="primary" 
              size="lg"
              className="button-3d bg-brand-gold text-brand-green hover:bg-opacity-90 font-bold"
            >
              Get Started with GVG Token
            </Button>
          </a>
          <a href="#get-started">
            <Button 
              variant="secondary" 
              size="lg"
              className="button-3d border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold"
            >
              Read Our Whitepaper
            </Button>
          </a>
        </div>

        {/* Stats section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-3d bg-brand-green/50 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-brand-gold mb-2">$10M+</div>
            <p className="text-brand-light">Total Investment Volume</p>
          </div>
          <div className="card-3d bg-brand-green/50 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-brand-gold mb-2">3,000+</div>
            <p className="text-brand-light">Active Investors</p>
          </div>
          <div className="card-3d bg-brand-green/50 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-brand-gold mb-2">15% APY</div>
            <p className="text-brand-light">Average Returns</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#challenge" className="text-brand-white flex flex-col items-center">
          <span className="text-sm mb-2">Learn More</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;