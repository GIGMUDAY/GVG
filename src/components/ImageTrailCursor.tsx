import React, { useEffect, useRef, useState, useCallback } from 'react';

export type VariantType = 'type1' | 'type2' | 'type3' | 'type4' | 'type5' | 'type6' | 'type7';

interface ImageTrailCursorProps {
  images: string[];
  variant?: VariantType;
  className?: string;
}

const ImageTrailCursor: React.FC<ImageTrailCursorProps> = ({ 
  images, 
  variant = 'type2',
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const positionsRef = useRef<Array<{ x: number; y: number }>>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize positions array
  useEffect(() => {
    positionsRef.current = images.map(() => ({ x: 0, y: 0 }));
  }, [images]);

  const updateImagePositions = useCallback((x: number, y: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        const prevPos = positionsRef.current[index] || { x, y };
        
        // Calculate spread based on variant
        const spread = variant === 'type6' ? 25 : variant === 'type7' ? 35 : variant === 'type4' ? 10 : 15;
        
        // Smooth interpolation
        const lerpX = prevPos.x + (x - prevPos.x) * 0.1;
        const lerpY = prevPos.y + (y - prevPos.y) * 0.1;
        
        positionsRef.current[index] = { x: lerpX, y: lerpY };
        
        // Apply variant-specific offsets
        let offsetX = 0;
        let offsetY = 0;
        
        if (variant === 'type5' || variant === 'type6' || variant === 'type7') {
          const angle = (index / images.length) * Math.PI * 2;
          const radius = spread * (index + 1);
          offsetX = Math.cos(angle) * radius;
          offsetY = Math.sin(angle) * radius;
        } else {
          offsetX = (Math.sin(index) * spread);
          offsetY = (Math.cos(index) * spread);
        }
        
        img.style.left = `${lerpX + offsetX}px`;
        img.style.top = `${lerpY + offsetY}px`;
        
        // Apply transforms based on variant
        let scale = 1 - index * 0.08;
        let rotation = 0;
        
        if (variant === 'type2' || variant === 'type5') {
          scale = 1 - index * 0.1;
          rotation = index * 5;
        } else if (variant === 'type3' || variant === 'type6') {
          scale = 0.8 + index * 0.05;
          rotation = -index * 3;
        } else if (variant === 'type4' || variant === 'type7') {
          scale = 1.2 - index * 0.15;
        } else {
          scale = 1 - index * 0.08;
        }
        
        img.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
        img.style.opacity = isHovering ? `${Math.max(0, 1 - index * 0.15)}` : '0';
      });
    });
  }, [variant, images.length, isHovering]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setCursorPos({ x, y });
      updateImagePositions(x, y);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      imageRefs.current.forEach((img, index) => {
        if (img) {
          positionsRef.current[index] = cursorPos;
          img.style.transition = 'opacity 0.2s ease-in';
        }
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      imageRefs.current.forEach((img) => {
        if (img) {
          img.style.transition = 'opacity 0.3s ease-out';
          img.style.opacity = '0';
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateImagePositions, cursorPos]);

  const imageSize = variant === 'type4' || variant === 'type7' ? '200px' : '150px';

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {images.map((image, index) => (
        <img
          key={`${variant}-${index}`}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          src={image}
          alt={`Trail ${index}`}
          className="absolute pointer-events-none rounded-lg shadow-2xl border-2 border-white"
          style={{
            width: imageSize,
            height: imageSize,
            objectFit: 'cover',
            opacity: 0,
            zIndex: images.length - index,
            left: '0px',
            top: '0px',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.2s ease-out',
          }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageTrailCursor;

