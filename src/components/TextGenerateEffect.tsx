import React, { useEffect, useRef } from 'react';

interface TextGenerateEffectProps {
  words: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}

const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  filter = true,
  duration = 0.7,
  delay = 0,
  className = '',
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const wordsArray = words.split(' ');

  const spanStyle = {
    opacity: 0,
    filter: filter ? 'blur(10px)' : 'none',
    transition: `opacity ${duration}s, filter ${duration}s`,
  };

  useEffect(() => {
    if (!scopeRef.current) return;

    const spans = scopeRef.current.querySelectorAll('span');

    setTimeout(() => {
      spans.forEach((span: HTMLSpanElement, index: number) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.filter = filter ? 'blur(0px)' : 'none';
        }, index * 200);
      });
    }, delay);
  }, [delay, filter, duration]);

  return (
    <div className={`leading-snug tracking-wide ${className}`} style={{ color: 'inherit' }}>
      <div ref={scopeRef}>
        {wordsArray.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className="inline-block"
            style={{ ...spanStyle, color: 'inherit' }}
          >
            {word}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextGenerateEffect;

