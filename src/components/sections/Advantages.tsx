import React from 'react';
import SectionHeading from '../SectionHeading';
import { Globe, TrendingUp, Users, Shield, Lightbulb, Handshake, Grid as Bridge } from 'lucide-react';

const Advantages: React.FC = () => {
  return (
    <section className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Investing with Impact. Growing with Purpose." 
          centered={true}
          textColor="text-white"
        />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* For Investors */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center">
              <Users className="h-6 w-6 text-brand-green mr-2" />
              For Our Valued Investors
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green/20 text-brand-green">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium text-white">Champion a Greener Ethiopia</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Directly contribute to vital environmental projects, including renewable energy and carbon offsetting initiatives. Your investment makes a tangible difference.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green/20 text-brand-green">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium text-white">Unlock Financial Growth</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Benefit from the potential for returns through our attractive staking rewards system and the long-term growth of the GVG ecosystem.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green/20 text-brand-green">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium text-white">Become Part of a Movement</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Engage with a vibrant community of environmentally conscious individuals and actively participate in shaping the future direction of GVG Token through governance.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green/20 text-brand-green">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium text-white">Invest with Confidence</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Our platform prioritizes security through rigorous smart contract audits, adherence to KYC/AML regulations, and transparent operational practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* For Businesses */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center">
              <Lightbulb className="h-6 w-6 text-brand-green mr-2" />
              For Visionary Ethiopian Businesses
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green/20 text-brand-green">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium text-white">Fuel Your Sustainable Vision</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Access a critical stream of funding specifically designed to help your green and ethical business flourish.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green/20 text-brand-green">
                    <Handshake className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium text-white">Partner with Integrity</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Align your business with a platform that champions fair trade, local job creation, and responsible environmental practices.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green/20 text-brand-green">
                    <Bridge className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium text-white">Connect to Global Capital</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Tap into the extensive Ethiopian diaspora investment community, eager to support innovation and growth back home.
                  </p>
                </div>
              </div>
              
              {/* Testimonial or Highlight */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 md:p-6 border-l-4 border-brand-green mt-6 md:mt-8">
                <p className="italic text-sm md:text-base text-gray-300">
                  "GVG Token represents a revolutionary approach to funding sustainable businesses in Ethiopia, creating a direct bridge between the diaspora and local entrepreneurs."
                </p>
                <p className="mt-4 font-medium text-sm md:text-base text-white">
                  — Ethiopian Business Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;