import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ParentSizeProps {
  children: (size: { width: number; height: number }) => ReactNode;
  debounceTime?: number;
  style?: React.CSSProperties;
}

const ParentSize: React.FC<ParentSizeProps> = ({
  children,
  debounceTime = 50,
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    const debouncedUpdate = debounce(updateSize, debounceTime);

    updateSize();

    window.addEventListener('resize', debouncedUpdate);
    const resizeObserver = new ResizeObserver(() => {
      debouncedUpdate();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      resizeObserver.disconnect();
    };
  }, [debounceTime]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'hidden', ...style }}>
      {children(size)}
    </div>
  );
};

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default ParentSize;

