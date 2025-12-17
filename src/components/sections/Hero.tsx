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
            <span className="block">Building Real-World Value</span>
            <span className="block">Through Execution, Governance,</span>
            <span className="block">and Compliance</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-[15px] lg:text-base text-white/85 leading-relaxed max-w-md">
            Green Value Group (GVG) is an ecosystem of ventures focused on workforce development, infrastructure services,
            and traceability-enabled value chains—designed for disciplined execution and regulatory alignment.
          </p>
        </div>

        {/* Right: Primary CTA */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <div className="flex flex-col sm:flex-row gap-3">
            <ShimmerButton
              href="#features"
              shimmerSize="2px"
              background="rgba(16,185,129,1)"
              className="shadow-2xl border-emerald-300"
            >
              <span className="relative z-10 whitespace-nowrap text-center text-sm sm:text-base font-medium leading-none tracking-tight text-white px-4">
                Explore Our Initiatives
              </span>
            </ShimmerButton>
            <ShimmerButton
              href="#partners"
              shimmerSize="2px"
              background="rgba(59,130,246,1)"
              className="shadow-2xl border-blue-300"
            >
              <span className="relative z-10 whitespace-nowrap text-center text-sm sm:text-base font-medium leading-none tracking-tight text-white px-4">
                Partner With Us
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
