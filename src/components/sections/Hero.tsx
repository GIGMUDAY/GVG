import React from 'react';
import ShimmerButton from '../ShimmerButton';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="absolute inset-0 bg-black/35 dark:bg-black/45 pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left: Text block */}
        <div className="w-full max-w-xl text-left space-y-4">
          <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] font-playfair">
            <span className="block">Invest in Ethiopia&apos;s</span>
            <span className="block">
              <span className="text-emerald-300">Green Future.</span> Empower
            </span>
            <span className="block">Local Businesses.</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-[15px] lg:text-base text-white/85 leading-relaxed max-w-md">
            Green Value Group (GVG) – a pioneering blockchain platform connecting Ethiopian local and diaspora investors
            with high‑impact, sustainable local enterprises. We&apos;re building a transparent, efficient, fair ecosystem
            for shared prosperity and environmental stewardship.
          </p>
        </div>

        {/* Right: Primary CTA */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <ShimmerButton
            href="https://gig-invest.org/gig-token-whitepaperoverview"
            target="_blank"
            rel="noopener noreferrer"
            shimmerSize="2px"
            background="rgba(16,185,129,1)"
            className="shadow-2xl border-emerald-300"
          >
            <span className="relative z-10 whitespace-nowrap text-center text-sm sm:text-base font-medium leading-none tracking-tight text-white px-4">
              Read Our Whitepaper
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
