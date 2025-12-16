import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Application } from '@splinetool/runtime';
import ParentSize from './ParentSize';

interface SplineProps {
  scene: string;
  onLoad?: (spline: Application) => void;
  renderOnDemand?: boolean;
  style?: React.CSSProperties;
  onError?: (error: Error) => void;
}

const Spline: React.FC<SplineProps> = ({
  scene,
  onLoad,
  renderOnDemand = true,
  style = {},
  onError,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splineAppRef = useRef<Application | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const cleanupRef = useRef<(() => void) | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sizeRef = useRef({ width: 0, height: 0 });

  const initSpline = useCallback(async () => {
    if (!canvasRef.current) return;

    setIsLoading(true);

    try {
      // Clean up previous instance if exists
      if (splineAppRef.current) {
        splineAppRef.current.dispose();
        splineAppRef.current = null;
      }

      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }

      const app = new Application(canvasRef.current, {
        renderOnDemand,
      });

      await app.load(scene);

      splineAppRef.current = app;
      setIsLoading(false);
      onLoad?.(app);

      // Set initial size if available
      if (sizeRef.current.width > 0 && sizeRef.current.height > 0) {
        app.setSize(sizeRef.current.width, sizeRef.current.height);
      }

      cleanupRef.current = () => {
        // Cleanup function
      };
    } catch (err) {
      console.error('Spline initialization error:', err);
      setIsLoading(false);
      onError?.(err as Error);
    }
  }, [scene, renderOnDemand, onLoad, onError]);

  useEffect(() => {
    // Intersection Observer to handle visibility
    if (!canvasRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && splineAppRef.current) {
            // When becoming visible, request render
            splineAppRef.current.requestRender();
            if (canvasRef.current && splineAppRef.current && sizeRef.current.width > 0 && sizeRef.current.height > 0) {
              splineAppRef.current.setSize(sizeRef.current.width, sizeRef.current.height);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(canvasRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    initSpline();

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
      if (splineAppRef.current) {
        splineAppRef.current.dispose();
        splineAppRef.current = null;
      }
    };
  }, [initSpline]);

  const handleSizeChange = useCallback((size: { width: number; height: number }) => {
    sizeRef.current = size;
    if (splineAppRef.current && size.width > 0 && size.height > 0) {
      splineAppRef.current.setSize(size.width, size.height);
      splineAppRef.current.requestRender();
    }
  }, []);

  const [currentSize, setCurrentSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (currentSize.width > 0 && currentSize.height > 0) {
      handleSizeChange(currentSize);
    }
  }, [currentSize.width, currentSize.height, handleSizeChange]);

  return (
    <ParentSize style={style} debounceTime={50}>
      {(size) => {
        if (size.width !== currentSize.width || size.height !== currentSize.height) {
          setCurrentSize(size);
        }
        
        return (
          <canvas
            ref={canvasRef}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
            }}
          />
        );
      }}
    </ParentSize>
  );
};

export default Spline;
