import React, { useState, useRef, useEffect } from 'react';

export interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AnimatedTooltipProps {
  items: TooltipItem[];
  className?: string;
}

const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current = items.map(() => null);
  }, [items]);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={`relative flex flex-row items-center justify-center ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => { itemRefs.current[index] = el; }}
          className="relative inline-block"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`relative rounded-full transition-all duration-300 ease-out ${
              activeIndex === index
                ? 'scale-110 z-50'
                : activeIndex !== null
                ? 'scale-90 opacity-70'
                : 'scale-100 opacity-100'
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="relative z-30 h-14 w-14 rounded-full border-2 border-white object-cover shadow-lg transition-all duration-300 md:h-16 md:w-16 lg:h-20 lg:w-20"
              draggable={false}
            />
            
            {/* Tooltip */}
            {activeIndex === index && (
              <div 
                className="absolute -top-20 left-1/2 z-50 -translate-x-1/2 transform"
                style={{
                  animation: 'zoom-in-95 0.2s ease-out',
                }}
              >
                <div className="relative whitespace-nowrap rounded-lg border border-gray-200 bg-gray-900 px-4 py-2 text-sm text-white shadow-xl dark:border-gray-800 dark:bg-gray-100 dark:text-black">
                  <div className="text-center font-bold">{item.name}</div>
                  <div className="text-center text-xs text-gray-300 dark:text-gray-700">
                    {item.designation}
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-r-0 border-t-0 bg-gray-900 dark:bg-gray-100"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTooltip;

