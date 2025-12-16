import React from 'react';
import SectionHeading from '../SectionHeading';
import { Shield, Repeat, Siren as Fire, Wallet, Layers } from 'lucide-react';

const Tokenomics: React.FC = () => {
  // Token distribution data for the chart
  const distribution = [
    { name: 'Business Investments & Ecosystem Fund', value: 40, color: 'bg-green-500' },
    { name: 'Staking Rewards & Community Incentives', value: 15, color: 'bg-green-400' },
    { name: 'Early Investors & Strategic Partnerships', value: 20, color: 'bg-green-600' },
    { name: 'Development & Operational Costs', value: 15, color: 'bg-green-700' },
    { name: 'Liquidity & Market Making', value: 10, color: 'bg-green-800' },
  ];

  return (
    <section id="tokenomics" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Transparent Tokenomics. Uncompromising Security." 
          centered={true}
          textColor="text-white"
        />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Tokenomics */}
          <div>
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                GVG Token (GVG) - The Engine of Our Ecosystem
              </h3>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm md:text-base text-white/80">Total Supply:</span>
                  <span className="text-sm md:text-base font-bold text-white">100,000,000 GVG Tokens</span>
                </div>
              </div>
              
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                Initial Distribution for Sustainable Growth
              </h4>
              
              {/* Distribution chart */}
              <div className="space-y-4 mb-8">
                {distribution.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs md:text-sm text-white/80">{item.name}</span>
                      <span className="text-sm font-medium text-white">{item.value}%</span>
                    </div>
                    <div className="w-full bg-black/40 backdrop-blur-sm rounded-full h-2.5 border border-white/10">
                      <div 
                        className={`h-2.5 rounded-full ${item.color}`} 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                Built-in Deflationary Mechanisms
              </h4>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green">
                      <Fire className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-base md:text-lg font-medium text-white">Burn Mechanism</h5>
                    <p className="mt-1 text-sm md:text-base text-white/80">
                      A portion of transaction fees (1%) is systematically burned, designed to reduce the total supply over time.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green">
                      <Wallet className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-base md:text-lg font-medium text-white">Treasury Allocation</h5>
                    <p className="mt-1 text-sm md:text-base text-white/80">
                      A fixed percentage of every transaction is allocated to treasury reserves, ensuring funds are available for reinvestment and ecosystem development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security */}
          <div>
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-6 md:p-8 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
                Your Peace of Mind is Our Priority
              </h3>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-white">Rigorous Smart Contract Audits</h4>
                    <p className="mt-2 text-sm md:text-base text-white/80">
                      Our smart contracts undergo thorough third-party audits to detect and eliminate vulnerabilities, ensuring the integrity of our platform.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green">
                      <Layers className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-white">Steadfast Regulatory Adherence</h4>
                    <p className="mt-2 text-sm md:text-base text-white/80">
                      We are committed to full compliance with Ethiopian and international investment regulations, incorporating robust KYC and AML protocols for enhanced user security.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black/40 backdrop-blur-md border border-brand-green/30 text-brand-green">
                      <Repeat className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base md:text-lg font-medium text-white">Comprehensive User Protection</h4>
                    <p className="mt-2 text-sm md:text-base text-white/80">
                      We employ secure wallet integrations, encrypted transactions, and offer Two-Factor Authentication (2FA) to add an extra layer of protection to user accounts.
                    </p>
                  </div>
                </div>
                
                {/* Security badge */}
                <div className="flex justify-center mt-6 md:mt-8">
                  <div className="inline-flex items-center px-4 py-2 bg-black/40 backdrop-blur-md border border-brand-green/30 rounded-full">
                    <Shield className="h-5 w-5 text-brand-green mr-2" />
                    <span className="text-sm md:text-base text-white font-medium">Security First Approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;