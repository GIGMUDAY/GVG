import React, { useState } from 'react';
import ImageTrailCursor, { VariantType } from '../ImageTrailCursor';
import SectionHeading from '../SectionHeading';

const ImageTrailDemo: React.FC = () => {
  const images = [
    "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/16245254/pexels-photo-16245254/free-photo-of-chatgpt-a-chatbot-for-your-website.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2333293/pexels-photo-2333293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const variants: Record<VariantType, string> = {
    type1: "Type 1 - Slow Trail",
    type2: "Type 2 - Default Trail",
    type3: "Type 3 - Fast Trail",
    type4: "Type 4 - Large Images",
    type5: "Type 5 - Rotating Spread",
    type6: "Type 6 - Expanding",
    type7: "Type 7 - Large Spread",
  };

  const [selectedVariant, setSelectedVariant] = useState<VariantType>('type2');

  return (
    <section id="image-trail-demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Image Trail Cursor" 
          subtitle="Interactive cursor effect with multiple variants"
          centered={true}
        />
        
        <div className="flex flex-col gap-6 w-full min-h-96 mt-8">
          <div className="w-full border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center h-96 relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
            <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-400 z-10 pointer-events-none">
              Hover Here
            </span>
            <ImageTrailCursor
              key={selectedVariant}
              images={images}
              variant={selectedVariant}
              className="absolute inset-0"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <label htmlFor="variant-select" className="text-sm font-medium text-gray-700">
              Select Variant:
            </label>
            <select
              id="variant-select"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value as VariantType)}
              className="w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {Object.entries(variants).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTrailDemo;

