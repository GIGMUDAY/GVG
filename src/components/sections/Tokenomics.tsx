import React from 'react';
import SectionHeading from '../SectionHeading';
import { Shield, Repeat, Siren as Fire, Wallet, Layers } from 'lucide-react';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technology & Governance" 
          subtitle="GVG uses digital infrastructure to support transparency, accountability, and operational efficiency."
          centered={true}
          textColor="text-white"
        />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Technology */}
          <div>
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Blockchain & Digital Records
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-white/80">
                <li>Polygon (Ethereum Layer-2) is used as a distributed ledger for auditability and record integrity.</li>
                <li>Technology is selected for reliability and transparency—not speculation.</li>
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                The Token Supports
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-white/80">
                <li>Internal accounting and allocation.</li>
                <li>Governance signaling.</li>
                <li>Project-level tracking and settlement under defined rules.</li>
              </ul>
            </div>
          </div>
          
          {/* Governance & Token Use */}
          <div>
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 md:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
                GVG Token (Internal Use Only)
              </h3>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-white">Permissioned and Internal</h4>
                    <ul className="mt-2 space-y-1 text-sm md:text-base text-white/80 list-disc pl-4">
                      <li>The GVG Token is a permissioned digital token used exclusively within the GVG platform.</li>
                      <li>Tokens are non-tradable outside the platform and restricted to whitelisted, KYC-approved participants.</li>
                      <li>No public exchange trading or secondary markets.</li>
                      <li>Tokens do not represent equity, debt, or profit-sharing rights.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm md:text-base text-white/70">
          All structures remain subject to regulatory guidance and licensed advisory input.
        </p>
      </div>
    </section>
  );
};

export default Tokenomics;
