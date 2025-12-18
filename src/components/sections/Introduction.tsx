import React from 'react';
import SectionHeading from '../SectionHeading';
import { Search, Zap, Sprout, Globe, Scale } from 'lucide-react';
import ShimmerButton from '../ShimmerButton';

const Introduction: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Green Value Group (GVG)" 
          subtitle="Green Value Group (GVG) is a venture-building and project aggregation platform focused on developing execution-ready, ESG-aligned initiatives in emerging markets, with an initial focus on Ethiopia and diaspora-linked capital pathways. GVG brings together technical execution capability, governance frameworks, and compliant capital readiness to bridge the gap between ideas, funding, and real-world delivery."
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-12">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white px-4">Our approach prioritizes:</h3>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Search className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Real Economy Projects</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                Real economy initiatives with measurable outcomes and disciplined execution.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Zap className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Compliance-First Design</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                Aligned with evolving capital market regulations to stay investor-ready.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-green">
              <div className="flex justify-center">
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 p-3">
                  <Sprout className="h-6 w-6 text-brand-green" />
                </div>
              </div>
              <h4 className="mt-4 text-lg md:text-xl font-semibold text-center text-white">Transparency & Accountability</h4>
              <p className="mt-2 text-sm md:text-base text-white/80 text-center">
                Transparency, accountability, and long-term value creation in every engagement.
              </p>
            </div>
            
          </div>

          <p className="mt-10 text-center text-xs sm:text-sm text-white/70 max-w-4xl mx-auto">
            GVG operates independently and does not act as a licensed investment advisor or capital market intermediary.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white">OUR APPROACH</h3>
          <p className="text-sm md:text-base text-white/75 mt-2">GVG is built on five operating principles.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: 'Execution First', desc: 'Projects must be deliverable, not theoretical.' },
            { title: 'Governance by Design', desc: 'Clear roles, milestones, and accountability.' },
            { title: 'Compliance Before Scale', desc: 'Regulation is a constraint we respect, not bypass.' },
            { title: 'Measured Impact', desc: 'ESG and outcomes are tracked, not assumed.' },
            { title: 'Long-Term Value', desc: 'Sustainable growth over short-term speculation.' },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="bg-black/30 backdrop-blur-lg border border-white/15 rounded-xl p-5 md:p-6 shadow-md flex gap-3 items-start"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-green/30 bg-black/40 text-brand-green font-bold">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm md:text-base text-white/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
