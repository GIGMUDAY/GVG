import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  autoPlay = false,
  interval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quoteWords, setQuoteWords] = useState<string[]>([]);
  const [wordAnimations, setWordAnimations] = useState<boolean[]>([]);
  const [imageAnimating, setImageAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Initialize quote words
  useEffect(() => {
    if (testimonials.length > 0) {
      const words = testimonials[activeIndex].quote.split(' ');
      setQuoteWords(words);
      setWordAnimations(new Array(words.length).fill(false));
      
      // Animate words sequentially
      words.forEach((_, index) => {
        setTimeout(() => {
          setWordAnimations((prev) => {
            const newArr = [...prev];
            newArr[index] = true;
            return newArr;
          });
        }, 50 * index);
      });
    }
  }, [activeIndex, testimonials]);

  const handleNext = useCallback(() => {
    setImageAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setImageAnimating(false);
    }, 200);
  }, [testimonials.length]);

  useEffect(() => {
    if (autoPlay && testimonials.length > 0) {
      intervalRef.current = window.setInterval(() => {
        handleNext();
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, interval, testimonials.length, handleNext]);

  const handlePrev = () => {
    setImageAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setImageAnimating(false);
    }, 200);
  };

  const isActive = (index: number) => activeIndex === index;

  const randomRotateY = (index: number) => {
    // Generate consistent rotation for each index
    return (index % 3) * 5 - 5; // Returns -5, 0, or 5
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="mx-auto max-w-sm px-4 py-10 font-sans antialiased lg:px-12 md:max-w-4xl md:px-8">
      <div className="relative grid grid-cols-1 gap-12 md:gap-20 md:grid-cols-2">
        {/* Left Side - Image Stack */}
        <div>
          <div className="relative h-80 w-full">
            {testimonials.map((testimonial, index) => {
              const active = isActive(index);
              const rotation = active ? 0 : randomRotateY(index);
              const zIndex = active ? 40 : testimonials.length + 2 - index;
              const scale = active ? 1 : 0.95;
              const opacity = active ? 1 : 0.7;

              return (
                <div
                  key={`${testimonial.image}-${index}`}
                  className={`absolute inset-0 origin-bottom transition-all duration-400 ease-in-out ${
                    active && !imageAnimating ? 'testimonial-active' : ''
                  }`}
                  style={{
                    opacity,
                    transform: `translateY(${active ? '-80px' : '0px'}) scale(${scale}) rotateY(${rotation}deg)`,
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    draggable={false}
                    className="w-full h-full rounded-3xl object-cover object-center shadow-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-between py-4">
          <div
            key={activeIndex}
            className="animate-fade-in"
            style={{
              animation: 'fade-in 0.2s ease-in-out',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {currentTestimonial.name}
            </h3>
            <p className="text-sm text-gray-400 mb-8">
              {currentTestimonial.designation}
            </p>
            <p className="mt-8 text-lg text-gray-300 leading-relaxed">
              {quoteWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-200 ease-in-out ${
                    wordAnimations[index]
                      ? 'opacity-100 blur-0 translate-y-0'
                      : 'opacity-0 blur-md translate-y-1'
                  }`}
                  style={{
                    transitionDelay: `${index * 20}ms`,
                  }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex size-7 items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-brand-green transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5 text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex size-7 items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-brand-green transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
