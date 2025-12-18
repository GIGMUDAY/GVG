import React, { PropsWithChildren } from 'react';
import SectionHeading from '../SectionHeading';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  image: string;
};

const Marquee: React.FC<PropsWithChildren<{ speed?: number }>> = ({ children, speed = 22 }) => {
  const items = React.Children.toArray(children);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-stretch gap-4 md:gap-6 marquee-track hover:[animation-play-state:paused]"
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        {[...items, ...items].map((child, idx) => (
          <div key={idx} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent dark:from-black/90 dark:via-black/40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900/90 via-slate-900/40 to-transparent dark:from-black/90 dark:via-black/40" />
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      image:
        "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      image:
        "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      image:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Community Says"
          subtitle="Hear from investors, partners, and community members who are part of the Green Value Group ecosystem"
          centered={true}
          textColor="text-white"
        />

        <div className="mt-12">
          <Marquee>
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="min-w-[260px] sm:min-w-[320px] max-w-[360px] bg-black/30 backdrop-blur-lg border border-white/15 rounded-2xl p-6 md:p-8 shadow-lg h-full flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-white/70 text-xs md:text-sm">{testimonial.designation}</p>
                  </div>
                </div>
                <p className="text-white/85 text-sm md:text-base leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
