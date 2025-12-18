import React from 'react';
import SectionHeading from '../SectionHeading';
import LogoLoop from '../LogoLoop';

const Partners: React.FC = () => {
  const partnerLogos = [
    {
      src: '/photo_2024-07-23_13-07-57.jpg',
      alt: 'Muday Marketing Solution',
      href: 'https://mudaymarketing.com',
      title: 'Muday Marketing Solution'
    },
    {
      src: '/Pave path Logo Icon.jpg',
      alt: 'Pavepath Design',
      href: 'https://pavepathdesign.com',
      title: 'Pavepath Design'
    },
    {
      src: '/Etraincon.jpg',
      alt: 'Etraincon',
      href: 'https://etraincon.com',
      title: 'Etraincon'
    },
    {
      src: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=200',
      alt: 'Tekur Manufacturing',
      href: 'https://tekurmanufacturing.com',
      title: 'Tekur Manufacturing'
    },
    {
      src: '/abol_tena.jpg',
      alt: 'AbolTena Coffee Roasting and Packaging',
      href: 'https://aboltena.com',
      title: 'AbolTena Coffee Roasting and Packaging'
    }
  ];

  return (
    <section id="partners" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Trusted Partners" 
          subtitle="We collaborate with leading organizations to create sustainable impact across Ethiopia"
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-16" style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={partnerLogos}
            speed={120}
            direction="left"
            logoHeight={80}
            gap={120}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Our trusted partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
