import React from 'react';
import ShimmerButton from '../ShimmerButton';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="absolute inset-0 bg-black/35 dark:bg-black/45 pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        {/* Text block */}
        <div className="w-full max-w-3xl space-y-4">
          <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] font-playfair">
            <span className="block">Building Real-World Value</span>
            <span className="block">
              <span className="text-emerald-300">Through Execution,</span> Governance,
            </span>
            <span className="block">and Compliance</span>
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-[15px] lg:text-base text-white/85 leading-relaxed max-w-2xl mx-auto">
            Green Value Group (GVG) is an ecosystem of ventures focused on workforce development,
            infrastructure services, and traceability-enabled value chains—designed for disciplined
            execution and regulatory alignment.
          </p>

          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-4">
            <ShimmerButton
              href="#community"
              shimmerSize="2px"
              shimmerDuration="2.5s"
              background="linear-gradient(90deg, #10b981, #0ea5e9)"
              className="px-5 sm:px-6 py-2 text-sm sm:text-base font-semibold border-white/20 shadow-lg"
            >
              <span className="relative z-10 text-white">Explore Our Initiatives</span>
            </ShimmerButton>
            <ShimmerButton
              href="#partners"
              shimmerSize="2px"
              shimmerDuration="2.5s"
              background="linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
              className="px-5 sm:px-6 py-2 text-sm sm:text-base font-semibold border-white/25 shadow-lg"
            >
              <span className="relative z-10 text-white">Partner With Us</span>
            </ShimmerButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
