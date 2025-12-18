import React from 'react';
import SectionHeading from '../SectionHeading';
import { MessageSquare, Vote, Megaphone } from 'lucide-react';
import ShimmerButton from '../ShimmerButton';

const Community: React.FC = () => {
  return (
    <section id="community" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="CAPITAL & PARTNERSHIPS" 
          subtitle="GVG works with licensed advisors, development partners, and institutions to ensure that all capital-related activities are structured appropriately and compliantly."
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-8 md:mt-12">
          <h3 className="text-center text-base md:text-lg font-semibold text-white mb-6">Our role includes:</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-6 md:p-8 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-green">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green mx-auto mb-6">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center text-white mb-4">Project Preparation</h3>
            <p className="text-sm md:text-base text-white/80 text-center">
              Preparing projects for grant and blended-finance opportunities.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-6 md:p-8 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-green">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green mx-auto mb-6">
              <Vote className="h-8 w-8" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center text-white mb-4">Investment Readiness</h3>
            <p className="text-sm md:text-base text-white/80 text-center">
              Building investment-ready documentation and governance frameworks.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-6 md:p-8 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-green">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green mx-auto mb-6">
              <Megaphone className="h-8 w-8" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center text-white mb-4">Advisory-Guided Pilots</h3>
            <p className="text-sm md:text-base text-white/80 text-center">
              Supporting private, non-public capital pilots under advisory guidance.
            </p>
          </div>
          </div>
          <p className="mt-6 text-center text-sm md:text-base text-white/70">
            GVG does not conduct public fundraising, securities offerings, or crowdfunding activities.
          </p>
        </div>
        
        {/* Join Us Button */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-6">Join Our Growing Community</h3>
            <ShimmerButton
              href="https://t.me/greeninvestmentgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-2xl"
              shimmerSize="2px"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                Join Us - Be part of Ethiopia's sustainable future
              </span>
            </ShimmerButton>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center bg-black/30 backdrop-blur-lg border border-white/20 rounded-full px-4 md:px-6 py-2">
              <span className="font-bold text-brand-green mr-2">5K+</span>
              <span className="text-sm md:text-base text-white/80">Community Members</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-lg border border-white/20 rounded-full px-4 md:px-6 py-2">
              <span className="font-bold text-brand-green mr-2">5</span>
              <span className="text-sm md:text-base text-white/80">Business Partners</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-lg border border-white/20 rounded-full px-4 md:px-6 py-2">
              <span className="font-bold text-brand-green mr-2">2</span>
              <span className="text-sm md:text-base text-white/80">Countries Represented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
