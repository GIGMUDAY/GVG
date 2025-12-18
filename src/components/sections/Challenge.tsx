import React from 'react';
import SectionHeading from '../SectionHeading';
import { HardHat, GraduationCap, Globe2 } from 'lucide-react';

const ecosystemCards = [
  {
    icon: <HardHat className="h-8 w-8 text-brand-green" />,
    title: 'PavePath – Workforce & Infrastructure Services',
    bullets: [
      'A professional services and workforce platform supporting transportation design, civil engineering, and infrastructure delivery.',
      'Ethical outsourcing and QA-driven workflows.',
      'Project execution support and technical reporting.',
      'Workforce upskilling and structured delivery pipelines.',
    ],
    focus: 'Focus: Execution, quality, and accountability.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-brand-green" />,
    title: 'Etraincon – Workforce Training & Knowledge Systems',
    bullets: [
      'A digital learning and workforce enablement platform designed to close skills gaps in infrastructure, construction, and technical services.',
      'Structured training modules and certification paths.',
      'Field-ready learning resources.',
      'Integration with real project workflows.',
    ],
    focus: 'Focus: Productivity, skills development, and employability.',
  },
  {
    icon: <Globe2 className="h-8 w-8 text-brand-green" />,
    title: 'GVG Traceability Initiatives',
    bullets: [
      'Traceability and ESG-focused systems for value chains such as agriculture and specialty exports.',
      'Origin verification and data integrity.',
      'ESG and impact measurement.',
      'Transparency for producers, buyers, and partners.',
    ],
    focus: 'Focus: Trust, accountability, and sustainable value chains.',
  },
];

const Challenge: React.FC = () => {
  return (
    <section id="challenge" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="OUR ECOSYSTEM"
          centered={true}
          textColor="text-white"
        />

        <div className="mt-12 grid gap-6 md:gap-8 lg:grid-cols-3">
          {ecosystemCards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-2xl border border-emerald-400/60 bg-gradient-to-br from-slate-900/90 via-black/90 to-slate-950/80 backdrop-blur-lg p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.08),transparent_35%)]" />
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
              </div>
              <div className="relative flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/40 bg-black/40">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                  {card.title}
                </h3>
              </div>
              <ul className="relative space-y-2 text-sm md:text-base text-white/85 leading-relaxed mb-5 list-disc list-inside pl-4 md:pl-6">
                {card.bullets.map((item, idx) => (
                  <li
                    key={item}
                    className={
                      ((card.title === 'GVG Traceability Initiatives' && idx === 0) ||
                        (card.title.startsWith('Etraincon') && idx === 0) ||
                        (card.title.startsWith('PavePath') && idx === 0))
                        ? 'list-none pl-0'
                        : undefined
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="relative text-sm md:text-base font-semibold text-emerald-300">{card.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;
