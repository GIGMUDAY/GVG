import React, { useRef, useEffect } from 'react';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<any>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'UI/UX Designer',
      handle: '@morganblake',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://dribbble.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Scientist',
      handle: '@caseypark',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://kaggle.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'Mobile Developer',
      handle: '@thesamkim',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Architect',
      handle: '@tylerrod',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://aws.amazon.com/'
    }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // Dynamically import GSAP to avoid build-time dependency in non-Vite environments
    (async () => {
      try {
        const mod = await import('gsap');
        // Some bundlers export default, some named
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const gsap: any = (mod as any).gsap ?? (mod as any).default ?? mod;
        gsapRef.current = gsap;

        setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
        setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
      } catch (e) {
        // If GSAP isn't available at build, component still renders without animations
        gsapRef.current = null;
      }
    })();
  }, []);

  const moveTo = (x: number, y: number) => {
    if (!gsapRef.current) return;
    gsapRef.current.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsapRef.current?.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsapRef.current?.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = () => {
    // Card click removed - button handles navigation now
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-center gap-8 ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%'
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          className="group relative flex flex-col w-[300px] h-[480px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300"
          style={
            {
              '--card-border': c.borderColor || 'transparent',
              background: c.gradient,
              '--spotlight-color': 'rgba(255,255,255,0.3)'
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />

          <div className="relative z-10 h-[300px] p-[10px] box-border flex-shrink-0">
            <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover rounded-[10px]" />
          </div>

          <footer className="relative z-10 p-4 text-white font-sans flex flex-col gap-2 flex-shrink-0 min-h-[180px]">
            <h3 className="m-0 text-[1.05rem] font-semibold text-center">{c.title}</h3>
            <p className="m-0 text-[0.85rem] opacity-85 text-center">{c.subtitle}</p>
            {c.url && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(c.url, '_blank', 'noopener,noreferrer');
                }}
                className="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                More Information
              </button>
            )}
          </footer>
        </article>
      ))}

      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: 'grayscale(0.3) brightness(0.95)',
          WebkitBackdropFilter: 'grayscale(0.3) brightness(0.95)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.05) 30%,rgba(0,0,0,0.10)45%,rgba(0,0,0,0.15)60%,rgba(0,0,0,0.20)75%,rgba(0,0,0,0.30)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.05) 30%,rgba(0,0,0,0.10)45%,rgba(0,0,0,0.15)60%,rgba(0,0,0,0.20)75%,rgba(0,0,0,0.30)88%,white 100%)'
        }}
      />

      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: 'grayscale(0.3) brightness(0.95)',
          WebkitBackdropFilter: 'grayscale(0.3) brightness(0.95)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.95)30%,rgba(255,255,255,0.90)45%,rgba(255,255,255,0.85)60%,rgba(255,255,255,0.80)75%,rgba(255,255,255,0.75)88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.95)30%,rgba(255,255,255,0.90)45%,rgba(255,255,255,0.85)60%,rgba(255,255,255,0.80)75%,rgba(255,255,255,0.75)88%,transparent 100%)',
          opacity: 1
        }}
      />
    </div>
  );
};

export default ChromaGrid;

