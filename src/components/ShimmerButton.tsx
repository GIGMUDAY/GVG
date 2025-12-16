import React from 'react';
import { cn } from '../lib/utils';

interface ShimmerButtonProps {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  shimmerColor = '#ffffff',
  shimmerSize = '0.05em',
  shimmerDuration = '3s',
  borderRadius = '100px',
  background = 'rgba(0, 0, 0, 1)',
  className,
  children,
  onClick,
  type = 'button',
  href,
  target,
  rel,
}) => {
  const shimmerClasses = cn(
    'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]',
    'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
    className
  );

  const shimmerStyle: React.CSSProperties = {
    '--spread': '90deg',
    '--shimmer-color': shimmerColor,
    '--radius': borderRadius,
    '--speed': shimmerDuration,
    '--cut': shimmerSize,
    '--bg': background,
  } as React.CSSProperties;

  const shimmerContent = (
    <>
      <div className={cn('-z-30 blur-[2px]', 'absolute inset-0 overflow-visible [container-type:size]')}>
        <div className="animate-shimmer-btn-shimmer-slide absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div
            className="animate-shimmer-btn-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
          />
        </div>
      </div>
      {children}

      <div
        className={cn(
          'insert-0 absolute size-full',
          'rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]',
          'transform-gpu transition-all duration-300 ease-in-out',
          'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',
          'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]'
        )}
      />

      <div
        className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={shimmerClasses}
        style={shimmerStyle}
      >
        {shimmerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={shimmerClasses}
      style={shimmerStyle}
      onClick={onClick}
    >
      {shimmerContent}
    </button>
  );
};

export default ShimmerButton;

