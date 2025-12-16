import React, { useState, useRef, ReactNode, MouseEvent } from 'react';

interface DockProps {
  children: ReactNode;
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: 'top' | 'middle' | 'bottom';
  orientation?: 'horizontal' | 'vertical';
}

interface DockContextType {
  mouseX: number;
  mouseY: number;
  magnification: number;
  distance: number;
  orientation: 'horizontal' | 'vertical';
  dockRef: { current: HTMLDivElement | null };
}

export const DockContext = React.createContext<DockContextType>({
  mouseX: Infinity,
  mouseY: Infinity,
  magnification: 60,
  distance: 140,
  orientation: 'horizontal',
  dockRef: { current: null },
});

const Dock: React.FC<DockProps> = ({
  children,
  className = '',
  magnification = 60,
  distance = 140,
  direction = 'middle',
  orientation = 'horizontal',
}) => {
  const dockRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(Infinity);
  const [mouseY, setMouseY] = useState(Infinity);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect();
        setMouseX(e.clientX - rect.left);
        setMouseY(e.clientY - rect.top);
      }
    });
  };

  const onMouseLeave = () => {
    requestAnimationFrame(() => {
      setMouseX(Infinity);
      setMouseY(Infinity);
    });
  };

  const directionClass = {
    top: 'items-start',
    middle: 'items-center',
    bottom: 'items-end',
  }[direction];

  const baseClasses = `mx-auto mt-8 flex h-[58px] w-max rounded-2xl border p-2 backdrop-blur-md transition-all gap-4`;
  const orientationClass = orientation === 'vertical' ? 'flex-col w-[58px] h-max' : '';
  const combinedClasses = `${baseClasses} ${orientationClass} ${directionClass} ${className}`;

  return (
    <DockContext.Provider
      value={{
        mouseX,
        mouseY,
        magnification,
        distance,
        orientation,
        dockRef,
      }}
    >
      <div
        ref={dockRef}
        className={combinedClasses}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </DockContext.Provider>
  );
};

export default Dock;

