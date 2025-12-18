import React from 'react';
import SectionHeading from '../SectionHeading';
import AnimatedCounter from '../AnimatedCounter';
import { Sun, Award, BarChart, Users } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="relative py-20 text-white bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="PARTNER WITH US" 
          subtitle="GVG collaborates with:"
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-12 md:mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          <div className="card-3d bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-7 h-full transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-transparent border border-brand-green/30 mb-5">
              <Award className="h-7 w-7 text-brand-green" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white">Licensed investment advisors</h3>
            <p className="text-sm md:text-base text-white">
              Structuring guidance and oversight to align capital pathways with regulation.
            </p>
          </div>
          
          <div className="card-3d bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-7 h-full transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-transparent border border-brand-green/30 mb-5">
              <Sun className="h-7 w-7 text-brand-green" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white">Development finance & grants</h3>
            <p className="text-sm md:text-base text-white">
              DFIs and grant institutions engaged for blended-finance opportunities.
            </p>
          </div>
          
          <div className="card-3d bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-7 h-full transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-transparent border border-brand-green/30 mb-5">
              <Users className="h-7 w-7 text-brand-green" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white">Technical partners & delivery</h3>
            <p className="text-sm md:text-base text-white">
              Engineering, ops, and delivery teams that anchor execution quality.
            </p>
          </div>
          
          <div className="card-3d bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-7 h-full transform transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-transparent border border-brand-green/30 mb-5">
              <BarChart className="h-7 w-7 text-brand-green" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white">Diaspora & institutional stakeholders</h3>
            <p className="text-sm md:text-base text-white">
              Aligned capital partners who prioritize transparency and long-term value.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center space-y-3">
          <p className="text-sm md:text-base text-white/80">
            If you are interested in building, advising, or supporting compliant real-world ventures, we welcome the conversation.
          </p>
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
