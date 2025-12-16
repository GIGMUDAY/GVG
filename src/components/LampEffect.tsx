import React, { ReactNode } from 'react';

interface LampEffectProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const LampEffect: React.FC<LampEffectProps> = ({ 
  children, 
  className = '',
  delay = 0.5,
  duration = 0.8,
}) => {
  const durationInSeconds = `${duration}s`;
  const delayInSeconds = `${delay}s`;

  return (
    <div
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 ${className}`}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        {/* Conic Gradient - Right */}
        <div
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, #06b6d4, transparent, transparent)`,
            animation: `conic-gradient-anim ease-in-out ${durationInSeconds} forwards`,
            animationDelay: delayInSeconds,
          }}
          className="absolute inset-auto right-1/2 h-56 w-60 overflow-visible text-white opacity-50"
        >
          <div
            className="absolute bottom-0 left-0 z-20 h-40 w-full bg-slate-950"
            style={{ maskImage: 'linear-gradient(to top, white, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 z-20 h-full w-40 bg-slate-950"
            style={{ maskImage: 'linear-gradient(to right, white, transparent)' }}
          />
        </div>

        {/* Conic Gradient - Left */}
        <div
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, #06b6d4)`,
            animation: `conic-gradient-anim ease-in-out ${durationInSeconds} forwards`,
            animationDelay: delayInSeconds,
          }}
          className="absolute inset-auto left-1/2 h-56 w-60 text-white opacity-50"
        >
          <div
            className="absolute bottom-0 right-0 z-20 h-full w-40 bg-slate-950"
            style={{ maskImage: 'linear-gradient(to left, white, transparent)' }}
          />
          <div
            className="absolute bottom-0 right-0 z-20 h-40 w-full bg-slate-950"
            style={{ maskImage: 'linear-gradient(to top, white, transparent)' }}
          />
        </div>

        {/* Blur effect */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>

        {/* Backdrop blur */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Cyan glow circle */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        {/* Spotlight */}
        <div
          style={{
            animation: `spotlight-anim ease-in-out ${durationInSeconds} forwards`,
            animationDelay: delayInSeconds,
          }}
          className="absolute inset-auto z-30 h-36 w-32 -translate-y-24 rounded-full bg-cyan-400 blur-2xl"
        ></div>

        {/* Glowing Line */}
        <div
          style={{
            animation: `glowing-line-anim ease-in-out ${durationInSeconds} forwards`,
            animationDelay: delayInSeconds,
          }}
          className="absolute inset-auto z-50 h-0.5 w-60 -translate-y-28 bg-cyan-400"
        ></div>

        {/* Bottom mask */}
        <div className="absolute inset-auto z-40 h-44 w-full translate-y-[-12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex flex-col items-center justify-center px-5" style={{ transform: 'translateY(-20rem)' }}>
        {children}
      </div>
    </div>
  );
};

export default LampEffect;
