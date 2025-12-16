import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import ShimmerButton from '../ShimmerButton';
import GIGPlatformForm from '../forms/GIGPlatformForm';
import FundingApplicationForm from '../forms/FundingApplicationForm';
import InvestmentForm from '../forms/InvestmentForm';
import { 
  BarChart, Users, Rocket, Globe, TrendingDown, 
  LayoutDashboard, Search, ShieldCheck, Wallet, 
  LineChart 
} from 'lucide-react';
import FeatureCard from '../FeatureCard';
const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'investors' | 'businesses' | 'platform'>('investors');
  const [gigFormOpen, setGigFormOpen] = useState(false);
  const [fundingFormOpen, setFundingFormOpen] = useState(false);
  const [investFormOpen, setInvestFormOpen] = useState(false);
  
  return (
    <section id="features" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Unlock a World of Opportunity. Seamlessly." 
          centered={true}
          textColor="text-white"
        />
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-12 px-4">
          <button
            className={`px-4 md:px-6 py-2 md:py-3 font-medium rounded-t-lg transition-colors text-sm md:text-base ${
              activeTab === 'investors' 
                ? 'bg-black/40 backdrop-blur-md border border-brand-green/50 text-brand-green shadow-sm' 
                : 'bg-black/30 backdrop-blur-md border border-white/20 text-white/80 hover:bg-black/40 hover:border-brand-green/30'
            }`}
            onClick={() => setActiveTab('investors')}
          >
            For Investors
          </button>
          <button
            className={`px-4 md:px-6 py-2 md:py-3 font-medium rounded-t-lg transition-colors text-sm md:text-base ${
              activeTab === 'businesses' 
                ? 'bg-black/40 backdrop-blur-md border border-brand-green/50 text-brand-green shadow-sm' 
                : 'bg-black/30 backdrop-blur-md border border-white/20 text-white/80 hover:bg-black/40 hover:border-brand-green/30'
            }`}
            onClick={() => setActiveTab('businesses')}
          >
            For Businesses
          </button>
          <button
            className={`px-4 md:px-6 py-2 md:py-3 font-medium rounded-t-lg transition-colors text-sm md:text-base ${
              activeTab === 'platform' 
                ? 'bg-black/40 backdrop-blur-md border border-brand-green/50 text-brand-green shadow-sm' 
                : 'bg-black/30 backdrop-blur-md border border-white/20 text-white/80 hover:bg-black/40 hover:border-brand-green/30'
            }`}
            onClick={() => setActiveTab('platform')}
          >
            GVG Platform
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-4 md:p-8">
          {activeTab === 'investors' && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fadeIn">
              <FeatureCard 
                title="Invest in Vetted Businesses"
                description="Use GVG Tokens to directly support a curated portfolio of promising Ethiopian enterprises making a real-world impact."
                icon={BarChart}
              />
              <FeatureCard 
                title="Earn Attractive Staking Rewards"
                description="Stake your GVG Tokens to generate passive income while contributing to the long-term success of our projects."
                icon={LineChart}
              />
              <FeatureCard 
                title="Shape the Future with Governance Rights"
                description="As a GVG Token holder, your voice matters. Participate in key decision-making processes, including voting on business proposals."
                icon={Users}
              />
              <FeatureCard 
                title="Hold and Trade with Ease"
                description="GVG Tokens are ERC-20 compliant, allowing them to be easily stored in compatible wallets and traded on various exchanges."
                icon={Wallet}
              />
              <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 flex flex-col justify-center hover:border-brand-green">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Ready to Invest?</h3>
                <p className="text-sm md:text-base text-white/80 mb-4">
                  Start your investment journey with GVG Token today and be part of Ethiopia's sustainable future.
                </p>
                <ShimmerButton
                  onClick={() => setInvestFormOpen(true)}
                  className="mt-auto shadow-2xl"
                  shimmerSize="2px"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Invest Now
                  </span>
                </ShimmerButton>
              </div>
            </div>
          )}
          
          {activeTab === 'businesses' && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fadeIn">
              <FeatureCard 
                title="Accelerate Your Growth with Efficient Funding"
                description="Secure the capital you need quickly and efficiently to scale your operations and impact."
                icon={Rocket}
              />
              <FeatureCard 
                title="Gain Unprecedented Global Exposure"
                description="Connect with a dedicated network of diaspora investors eager to support Ethiopian innovation."
                icon={Globe}
              />
              <FeatureCard 
                title="Reduce Funding Costs"
                description="Benefit from significantly lower transaction fees compared to traditional financing channels."
                icon={TrendingDown}
              />
              <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 flex flex-col justify-center hover:border-brand-green">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Ready to Apply?</h3>
                <p className="text-sm md:text-base text-white/80 mb-4">
                  If you're an Ethiopian enterprise focused on sustainability and growth, we want to hear from you.
                </p>
                <ShimmerButton
                  onClick={() => setFundingFormOpen(true)}
                  className="mt-auto shadow-2xl"
                  shimmerSize="2px"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Apply for Funding
                  </span>
                </ShimmerButton>
              </div>
            </div>
          )}
          
          {activeTab === 'platform' && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fadeIn">
              <FeatureCard 
                title="Intuitive All-in-One Control Panel"
                description="Our user-friendly dashboard simplifies the entire experience, allowing you to manage your investments, buy tokens, and track performance in one place."
                icon={LayoutDashboard}
              />
              <FeatureCard 
                title="Real-Time Portfolio Monitoring"
                description="Check your GVG Token balance instantly and review a comprehensive history of all your transactions for complete transparency."
                icon={Search}
              />
              <FeatureCard 
                title="Actionable Market Insights"
                description="Stay informed with real-time GVG Token price updates and utilize analytical tools with dynamic trend charts to assess market conditions."
                icon={LineChart}
              />
              <FeatureCard 
                title="Seamless & Secure Wallet Integration"
                description="Connect your Web3 wallet (like MetaMask) effortlessly to get started with the GVG Token ecosystem."
                icon={ShieldCheck}
              />
              <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 flex flex-col justify-center hover:border-brand-green">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Access GVG Dashboard</h3>
                <p className="text-sm md:text-base text-white/80 mb-4">
                  Experience our comprehensive platform with real-time analytics and portfolio management tools.
                </p>
                <ShimmerButton
                  onClick={() => setGigFormOpen(true)}
                  className="mt-auto shadow-2xl"
                  shimmerSize="2px"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    GVG Dashboard
                  </span>
                </ShimmerButton>
              </div>
            </div>
          )}
        </div>
        
        {/* Forms */}
        <GIGPlatformForm isOpen={gigFormOpen} onClose={() => setGigFormOpen(false)} />
        <FundingApplicationForm isOpen={fundingFormOpen} onClose={() => setFundingFormOpen(false)} />
        <InvestmentForm isOpen={investFormOpen} onClose={() => setInvestFormOpen(false)} />
      </div>
    </section>
  );
};

export default Features;