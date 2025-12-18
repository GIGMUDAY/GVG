import React from 'react';
import SectionHeading from '../SectionHeading';
import { CheckCircle2, Layers, ShieldCheck, Route } from 'lucide-react';

const WhyGVG: React.FC = () => {
  const points = [
    {
      title: 'Real projects, not hype',
      desc: 'Execution-ready initiatives with measurable milestones and delivery plans.',
      icon: <CheckCircle2 className="h-6 w-6" />,
    },
    {
      title: 'Disciplined capital pathways',
      desc: 'Structured funding routes that prioritize compliance and investor protections.',
      icon: <Route className="h-6 w-6" />,
    },
    {
      title: 'Strong technical and operational backbone',
      desc: 'Operational rigor, governance frameworks, and traceability baked in from day one.',
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: 'Designed for regulators, partners, and long-term stakeholders',
      desc: 'Built to satisfy regulatory guidance and partner expectations for durability and trust.',
      icon: <ShieldCheck className="h-6 w-6" />,
    },
  ];

  return (
    <section id="whygvg" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="WHY GVG"
          subtitle="GVG exists to make complex projects credible, investable, and executable."
          centered={true}
          textColor="text-white"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((point, idx) => (
            <div
              key={point.title}
              className="bg-black/30 backdrop-blur-lg border border-white/15 rounded-xl p-6 md:p-7 shadow-md flex gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-green/30 bg-black/40 text-brand-green">
                {point.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{point.title}</h4>
                <p className="mt-2 text-sm md:text-base text-white/80 leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGVG;
