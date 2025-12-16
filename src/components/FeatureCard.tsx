import React from 'react';
import { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className = '',
}) => {
  return (
    <div className={`bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-md p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:border-brand-green ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-brand-green/30 mb-4">
        <Icon className="h-6 w-6 text-brand-green" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm md:text-base text-white/80">{description}</p>
    </div>
  );
};

export default FeatureCard;
