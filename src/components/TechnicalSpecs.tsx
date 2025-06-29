import React, { useState } from 'react';
import { CheckCircle2, Zap, Waves, Filter } from 'lucide-react';

const TechnicalSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('radiometric');

  const tabContent = {
    radiometric: {
      title: 'Radiometric Calibration',
      icon: <Zap className="h-6 w-6 text-emerald-500" />,
      description: 'Our radiometric calibration process converts raw sensor data to physical units, ensuring consistent measurements across time and space.',
      specs: [
        'Absolute calibration accuracy of ±3%',
        'Automated dark current correction',
        'Sensor linearity verification',
        'Cross-sensor calibration capability',
        'Temperature dependency correction'
      ],
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg'
    },
    atmospheric: {
      title: 'Atmospheric Correction',
      icon: <Waves className="h-6 w-6 text-emerald-500" />,
      description: 'Advanced algorithms remove atmospheric effects to produce bottom-of-atmosphere reflectance values for accurate vegetation analysis.',
      specs: [
        'Aerosol optical depth estimation',
        'Water vapor content measurement',
        'MODTRAN-based atmospheric modeling',
        'Adjacency effect correction',
        'Bidirectional reflectance adjustment'
      ],
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg'
    },
    spectral: {
      title: 'Spectral Processing',
      icon: <Filter className="h-6 w-6 text-emerald-500" />,
      description: 'Our spectral processing systems extract meaningful vegetation indices from multispectral and hyperspectral imagery.',
      specs: [
        'Support for NDVI, EVI, SAVI, and custom indices',
        'Spectral unmixing capabilities',
        'Band ratioing and transformation',
        'Vegetation fraction estimation',
        'Chlorophyll content estimation models'
      ],
      image: 'https://images.pexels.com/photos/17119464/pexels-photo-17119464.jpeg'
    }
  };

  const tabs = [
    { id: 'radiometric', name: 'Radiometric Calibration' },
    { id: 'atmospheric', name: 'Atmospheric Correction' },
    { id: 'spectral', name: 'Spectral Processing' }
  ];

  const active = tabContent[activeTab];

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Technical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Advanced Processing Pipeline</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Our proprietary algorithms transform raw satellite data into precisely calibrated imagery for agricultural analysis.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              {active.icon}
              <h3 className="text-2xl font-bold">{active.title}</h3>
            </div>
            <p className="text-gray-300 mb-6">{active.description}</p>
            
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold mb-4">Technical Specifications</h4>
              <ul className="space-y-3">
                {active.specs.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium flex items-center gap-2">
              Download Technical Whitepaper
            </button>
          </div>
          
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl">
            <img 
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Processing Pipeline Diagram */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-center mb-10">Complete Data Processing Pipeline</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-emerald-900/50 transform -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {['Data Acquisition', 'Pre-Processing', 'Calibration'].map((step, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step}</h4>
                  <p className="text-gray-400 text-sm">
                    {index === 0 && 'Raw data capture from satellite sensors with precise metadata recording.'}
                    {index === 1 && 'Quality assessment, noise reduction, and geometric correction.'}
                    {index === 2 && 'Radiometric calibration and conversion to physical units.'}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-emerald-900/50 transform translate-y-24 md:translate-y-1/2 z-0 mt-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mt-8">
              {['Atmospheric Correction', 'Product Generation', 'Delivery'].map((step, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{index + 4}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step}</h4>
                  <p className="text-gray-400 text-sm">
                    {index === 0 && 'Removal of atmospheric effects for surface reflectance values.'}
                    {index === 1 && 'Generation of vegetation indices and specialized data products.'}
                    {index === 2 && 'Secure cloud delivery with API access for integration.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;