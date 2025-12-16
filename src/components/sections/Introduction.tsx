import React from 'react';
import SectionHeading from '../SectionHeading';
import { Search, Zap, Sprout, Globe, Scale } from 'lucide-react';
import ShimmerButton from '../ShimmerButton';

const Introduction: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="GVG Token: Smart, Sustainable, Secure" 
          subtitle="GVG Token (Green Value Group Token) is more than just a digital currency; it's a utility token that powers a new wave of sustainable development. Built on the efficient Polygon (Ethereum Layer-2) blockchain, we ensure low transaction costs and high scalability."
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-12">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white px-4">Our Foundation is Built On</h3>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Search className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Unprecedented Transparency</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                Every transaction and fund allocation is recorded on the blockchain, offering verifiable accountability.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Zap className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Enhanced Efficiency</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                By streamlining processes and reducing intermediaries, we lower costs and accelerate investment.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Sprout className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Deep Commitment to Sustainability</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                We champion businesses that align with fair trade, local job creation, and environmental responsibility.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Globe className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Global Accessibility</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                GVG Token breaks down traditional barriers, making it easier for individuals and institutions worldwide to contribute to and benefit from Ethiopia's growth.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Scale className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Fair Economic Participation</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                We are dedicated to creating a level playing field, ensuring equitable opportunities for all stakeholders.
              </p>
            </div>
            
            {/* Visual element */}
            <ShimmerButton
              href="https://t.me/greeninvestmentgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-2xl p-4 md:p-6 flex items-center justify-center"
              shimmerSize="2px"
            >
              <div className="text-center relative z-10">
                <div className="text-2xl md:text-3xl font-bold mb-2 text-white">Join Us</div>
                <p className="text-sm md:text-base text-white">Be part of Ethiopia's sustainable future</p>
              </div>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;