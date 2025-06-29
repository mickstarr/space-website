import React, { useState } from 'react';
import { Info } from 'lucide-react';

const ImagePortfolio: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const images = [
    {
      stage: 'Raw Satellite Data',
      description: 'Unprocessed Level-0 data directly from the satellite sensor',
      image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg',
      details: 'Raw digital numbers (DN) from the sensor, containing atmospheric noise and geometric distortions.'
    },
    {
      stage: 'Radiometric Calibration',
      description: 'Conversion to physical units of radiance',
      image: 'https://images.pexels.com/photos/87611/sun-solar-flare-space-astronomy-87611.jpeg',
      details: 'Calibrated to top-of-atmosphere radiance values, accounting for sensor characteristics.'
    },
    {
      stage: 'Atmospheric Correction',
      description: 'Removal of atmospheric effects',
      image: 'https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg',
      details: 'Bottom-of-atmosphere reflectance after removing effects of atmospheric scattering and absorption.'
    },
    {
      stage: 'Vegetation Index (NDVI)',
      description: 'Normalized Difference Vegetation Index calculation',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      details: 'NDVI values ranging from -1 to 1, indicating vegetation health and density.'
    },
    {
      stage: 'Enhanced Vegetation Index',
      description: 'Advanced index accounting for atmospheric effects',
      image: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg',
      details: 'EVI optimized for high biomass regions and improved atmospheric correction.'
    },
    {
      stage: 'Final Agricultural Product',
      description: 'Processed imagery ready for agricultural analysis',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      details: 'Calibrated, corrected, and enhanced for precision agriculture applications.'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Processing Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Satellite Image Processing Journey</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Explore how we transform raw satellite data into actionable agricultural intelligence through our advanced processing pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(activeImage === index ? null : index)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={item.image}
                  alt={item.stage}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{item.stage}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeImage === index ? 'max-h-40 mt-4' : 'max-h-0'
                  }`}>
                    <div className="flex items-start gap-2 text-sm text-gray-300">
                      <Info className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>{item.details}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Click on any image to learn more about the processing stage
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImagePortfolio;