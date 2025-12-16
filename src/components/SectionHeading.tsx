import React from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  textColor?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
  textColor
}) => {
  // Default text colors that adapt to theme
  const defaultTitleColor = 'text-gray-900 dark:text-white';
  const defaultSubtitleColor = 'text-gray-700 dark:text-gray-300';
  
  // Use provided textColor or default theme-aware colors
  const titleColor = textColor || defaultTitleColor;
  const subtitleColor = textColor || defaultSubtitleColor;

  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''} ${className} px-4`}>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-3xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;