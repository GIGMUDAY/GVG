import React, { useEffect, useRef, ReactNode, useCallback } from 'react';
import { createNoise3D } from 'simplex-noise';

interface WavyBackgroundProps {
  children: ReactNode;
  className?: string;
  containerClass?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className = '',
  containerClass = '',
  colors = ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
  waveWidth = 50,
  backgroundFill = 'black',
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const noiseRef = useRef(createNoise3D());
  const wRef = useRef(0);
  const hRef = useRef(0);
  const ntRef = useRef(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const resizeHandlerRef = useRef<(() => void) | null>(null);

  const drawWave = useCallback((n: number) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    
    const getSpeed = (): number => {
      return speed === 'slow' ? 0.001 : 0.002;
    };
    
    ntRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = colors[i % colors.length];
      for (let x = 0; x < wRef.current; x += 5) {
        const y = noiseRef.current(x / 800, 0.3 * i, ntRef.current) * 100;
        ctx.lineTo(x, y + hRef.current * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  }, [colors, waveWidth, speed]);

  const render = useCallback(() => {
    const ctx = ctxRef.current;
    if (ctx) {
      // Clear the canvas first
      ctx.clearRect(0, 0, wRef.current, hRef.current);
      
      // Only fill if backgroundFill is not transparent
      if (backgroundFill && backgroundFill !== 'transparent') {
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, wRef.current, hRef.current);
      }
      
      ctx.globalAlpha = waveOpacity;
      drawWave(5);
      animationIdRef.current = requestAnimationFrame(render);
    }
  }, [backgroundFill, waveOpacity, drawWave]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    const parent = canvas.parentElement;
    if (!parent) return;

    const updateDimensions = () => {
      if (parent && ctxRef.current) {
        wRef.current = ctxRef.current.canvas.width = parent.offsetWidth || parent.clientWidth;
        hRef.current = ctxRef.current.canvas.height = parent.offsetHeight || parent.clientHeight;
      }
    };
    updateDimensions();

    ctx.filter = `blur(${blur}px)`;

    const handleResize = () => {
      if (parent && ctxRef.current) {
        wRef.current = ctxRef.current.canvas.width = parent.offsetWidth || parent.clientWidth;
        hRef.current = ctxRef.current.canvas.height = parent.offsetHeight || parent.clientHeight;
        ctxRef.current.filter = `blur(${blur}px)`;
      }
    };

    resizeHandlerRef.current = handleResize;
    window.addEventListener('resize', handleResize);

    render();

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (resizeHandlerRef.current) {
        window.removeEventListener('resize', resizeHandlerRef.current);
      }
    };
  }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity, render]);

  const isSafari = typeof window !== 'undefined' &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <div className={`relative w-full flex flex-col items-center justify-center ${containerClass}`} style={{ minHeight: '100%', position: 'relative' }}>
      <canvas
        id="canvas"
        ref={canvasRef}
        className="absolute z-0 inset-0 w-full h-full"
        style={{ 
          filter: isSafari ? `blur(${blur}px)` : undefined,
          pointerEvents: 'none',
          zIndex: 0
        }}
      ></canvas>
      <div className={`relative w-full ${className}`} style={{ position: 'relative', zIndex: 999, pointerEvents: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;

