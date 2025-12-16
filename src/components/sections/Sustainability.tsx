import React from 'react';
import SectionHeading from '../SectionHeading';
import AnimatedCounter from '../AnimatedCounter';
import { Sun, Award, BarChart } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="relative py-20 text-white bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="More Than Investment. It's a Pledge to Our Planet & People." 
          subtitle="At GVG Token, sustainability is not an afterthought; it's woven into the very fabric of our mission. We believe that financial success and environmental responsibility can, and must, go hand-in-hand."
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-12 md:mt-16 grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="card-3d bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-6">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Prioritizing Eco-Friendly Ventures</h3>
            <p className="text-sm md:text-base text-white">
              We strategically channel investments into businesses at the forefront of renewable energy, reforestation, sustainable agriculture, and other vital green initiatives.
            </p>
          </div>
          
          <div className="card-3d bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Championing Ethical & Fair Practices</h3>
            <p className="text-sm md:text-base text-white">
              We actively support and promote businesses that demonstrate a clear commitment to fair trade principles, meaningful local job creation, and robust environmental stewardship.
            </p>
          </div>
          
          <div className="card-3d bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-6">
              <BarChart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Transparent Impact Measurement</h3>
            <p className="text-sm md:text-base text-white">
              Businesses funded through GVG Token report on key performance indicators quarterly, including employment generated, financial inclusivity achieved, and specific sustainability practices implemented.
            </p>
          </div>
        </div>
        
        {/* Impact stats */}
        <div className="mt-12 md:mt-16 bg-black/80/30 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white">Our 5-Year Projected Impact</h3>
            <p className="text-sm md:text-base text-white/80 mt-2">Projected outcomes over the next 5 years</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <AnimatedCounter
                end={500}
                duration={2000}
                suffix="+"
                className="text-2xl md:text-4xl font-bold text-white"
              />
              <p className="mt-2 text-xs md:text-sm text-white/80">Sustainable Businesses Funded</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={10000}
                duration={2000}
                suffix="+"
                className="text-2xl md:text-4xl font-bold text-white"
              />
              <p className="mt-2 text-xs md:text-sm text-white/80">New Jobs Created</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={250}
                duration={2000}
                suffix="K"
                className="text-2xl md:text-4xl font-bold text-white"
                separator=""
              />
              <p className="mt-2 text-xs md:text-sm text-white/80">Tons of CO2 Offset</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={10}
                duration={2000}
                prefix="$"
                suffix="M"
                className="text-2xl md:text-4xl font-bold text-white"
                separator=""
              />
              <p className="mt-2 text-xs md:text-sm text-white/80">Investment Mobilized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;