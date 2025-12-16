import React from 'react';
import SectionHeading from '../SectionHeading';
import ChromaGrid, { ChromaItem } from '../ChromaGrid';

const Team: React.FC = () => {
  const teamMembers: ChromaItem[] = [
    {
      image: "/photos/natan-ayele.jpg",
      title: "Natan Ayele",
      subtitle: "Founder and Chief Executive Officer",
      borderColor: "#2e7d32",
      gradient: "linear-gradient(145deg, #2e7d32, #000)",
      url: "https://profile.greenvaluegroup.com/"
    },
    {
      image: "/photos/beamlak-tamrat.jpg",
      title: "BeamLak Tamrat",
      subtitle: "Chief Technology Officer and Marketing Strategy",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://profile.greenvaluegroup.com/"
    },
    {
      image: "/photos/bereket-tadesse.jpg",
      title: "Bereket Tadesse",
      subtitle: "Backend Developer & AI Developer",
      borderColor: "#2e7d32",
      gradient: "linear-gradient(165deg, #2e7d32, #000)",
      url: "https://profile.greenvaluegroup.com/"
    }
  ];

  return (
    <section id="team" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Meet Our Team" 
          subtitle="Connecting Ethiopian diaspora investors with sustainable local businesses through blockchain innovation and transparent investment mechanisms"
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-12 relative">
          <ChromaGrid
            items={teamMembers}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className="justify-center h-auto md:min-h-[520px] lg:min-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
