import React from 'react';
import SectionHeading from '../SectionHeading';
import { TrendingUp, AlertCircle, LineChart, Banknote } from 'lucide-react';

const Challenge: React.FC = () => {
  return (
    <section id="challenge" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Bridging Gaps, Unlocking Potential" 
          centered={true}
          textColor="text-white"
        />
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Challenges */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-brand-green">
            <div className="inline-flex items-center justify-center p-3 bg-black/40 backdrop-blur-md border border-red-400/30 rounded-full mb-6">
              <AlertCircle className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">The Current Landscape</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-black/50 backdrop-blur-sm border border-red-400/40 flex items-center justify-center">
                    <span className="text-red-400 text-xs font-bold">!</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base md:text-lg font-semibold text-white">Diaspora Investors Face Hurdles</h4>
                  <p className="mt-1 text-sm md:text-base text-white/80">
                    Many in the Ethiopian diaspora seek impactful investment opportunities back home but are met with a lack of transparent channels, high remittance costs, and inefficient fund utilization in traditional systems.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-black/50 backdrop-blur-sm border border-red-400/40 flex items-center justify-center">
                    <span className="text-red-400 text-xs font-bold">!</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base md:text-lg font-semibold text-white">Local Businesses Need Fuel for Growth</h4>
                  <p className="mt-1 text-sm md:text-base text-white/80">
                    Ethiopian small and medium-sized enterprises (SMEs) possess immense potential but often lack access to the structured funding needed to scale and thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-brand-green">
            <div className="inline-flex items-center justify-center p-3 bg-black/40 backdrop-blur-md border border-brand-green/30 rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-brand-green" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">The GVG Token Solution</h3>
            <p className="text-base md:text-lg font-semibold text-white mb-4">A New Era of Investment</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <LineChart className="flex-shrink-0 h-6 w-6 text-brand-green mt-1" />
                <p className="ml-3 text-sm md:text-base text-white/80">
                  Leveraging the significant annual remittances from the diaspora (over $5 billion) to fuel sustainable growth.
                </p>
              </div>
              
              <div className="flex items-start">
                <Banknote className="flex-shrink-0 h-6 w-6 text-brand-green mt-1" />
                <p className="ml-3 text-sm md:text-base text-white/80">
                  Tapping into the surging global interest in sustainable and impact investing through an innovative blockchain platform.
                </p>
              </div>
              
              <p className="text-sm md:text-base text-white/80 mt-4">
                GVG Token offers a transformative solution: a decentralized and transparent investment mechanism designed to foster economic growth and financial inclusivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;