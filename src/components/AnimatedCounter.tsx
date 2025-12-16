import React, { useEffect, useState, useRef, useCallback } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  separator = ',',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const startValue = 0;

    const animateFrame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateFrame);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateFrame);
  }, [end, duration]);

  useEffect(() => {
    // Use Intersection Observer to trigger animation when component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animate]);

  const formatNumber = (num: number): string => {
    if (separator !== '') {
      return num.toLocaleString('en-US');
    }
    return num.toString();
  };

  return (
    <div ref={countRef} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
