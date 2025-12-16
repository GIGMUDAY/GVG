import React, { useContext, useRef, useEffect, useState, ReactNode } from 'react';
import { DockContext } from './Dock';

interface DockIconProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({
  children,
  href,
  className = '',
  onClick,
}) => {
  const { mouseX, mouseY, magnification, distance, dockRef } = useContext(DockContext);
  const iconRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!iconRef.current || mouseX === Infinity || mouseY === Infinity) {
      setScale(1);
      return;
    }

    if (!dockRef.current || !iconRef.current) {
      setScale(1);
      return;
    }
    
    const rect = iconRef.current.getBoundingClientRect();
    const dockRect = dockRef.current.getBoundingClientRect();
    const iconCenterX = rect.left + rect.width / 2 - dockRect.left;
    const iconCenterY = rect.top + rect.height / 2 - dockRect.top;
    
    const deltaX = mouseX - iconCenterX;
    const deltaY = mouseY - iconCenterY;
    const mouseDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (mouseDistance < distance) {
      const newScale = 1 + (magnification / 100) * (1 - mouseDistance / distance);
      setScale(newScale);
    } else {
      setScale(1);
    }
  }, [mouseX, mouseY, magnification, distance, dockRef]);

  const iconContent = (
    <div
      ref={iconRef}
      className={`flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        {iconContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="flex items-center justify-center">
        {iconContent}
      </button>
    );
  }

  return iconContent;
};

export default DockIcon;

