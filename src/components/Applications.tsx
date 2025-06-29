import React, { useState } from 'react';
import { Sprout, Droplets, Mountain, Ruler, AlertTriangle, TreePine } from 'lucide-react';

const Applications: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const applications = [
    {
      title: 'Crop Health Monitoring',
      icon: <Sprout className="h-6 w-6" />,
      description: 'Track crop health and vigor through time with calibrated vegetation indices.',
      features: ['NDVI time series analysis', 'Early stress detection', 'Yield prediction models'],
    },
    {
      title: 'Irrigation Management',
      icon: <Droplets className="h-6 w-6" />,
      description: 'Optimize water usage with precise soil moisture and evapotranspiration data.',
      features: ['ET mapping and quantification', 'Irrigation recommendation engine', 'Water stress detection'],
    },
    {
      title: 'Land Use Classification',
      icon: <Mountain className="h-6 w-6" />,
      description: 'Accurate mapping of crop types and natural vegetation across landscapes.',
      features: ['Machine learning classifiers', 'Multi-temporal analysis', 'Change detection'],
    },
    {
      title: 'Precision Agriculture',
      icon: <Ruler className="h-6 w-6" />,
      description: 'Drive variable rate applications with high-resolution zone mapping.',
      features: ['Prescription map generation', 'Historic field performance', 'ROI analytics'],
    },
    {
      title: 'Disaster Monitoring',
      icon: <AlertTriangle className="h-6 w-6" />,
      description: 'Rapidly assess and quantify damage from floods, droughts, and other disasters.',
      features: ['Change detection algorithms', 'Rapid response mapping', 'Recovery tracking'],
    },
    {
      title: 'Forest Management',
      icon: <TreePine className="h-6 w-6" />,
      description: 'Monitor forest health, track deforestation, and support conservation efforts.',
      features: ['Canopy cover analysis', 'Species classification', 'Biomass estimation'],
    },
  ];

  const caseStudies = [
    {
      title: 'California Almond Growers Cooperative',
      image: 'https://images.pexels.com/photos/2886767/pexels-photo-2886767.jpeg',
      challenge: 'Optimizing irrigation across 15,000 acres of almond orchards during drought conditions.',
      solution: 'Implemented weekly calibrated imagery to detect water stress and generate precision irrigation recommendations.',
      results: ['22% reduction in water usage', '17% increase in yield efficiency', '$1.2M annual savings']
    },
    {
      title: 'European Wheat Belt Monitoring',
      image: 'https://images.pexels.com/photos/1585852/pexels-photo-1585852.jpeg',
      challenge: 'Early detection of crop disease outbreaks across multiple countries.',
      solution: 'Deployed daily monitoring system with automated anomaly detection based on spectral signatures.',
      results: ['Disease detection 8-12 days earlier than visual inspection', '42% reduction in fungicide use', 'Coordinated response across 5 countries']
    },
    {
      title: 'Brazilian Rainforest Conservation Initiative',
      image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg',
      challenge: 'Detecting and preventing illegal deforestation activities in remote areas.',
      solution: 'High-frequency monitoring with automated change detection and alert system.',
      results: ['68% increase in enforcement effectiveness', '32% reduction in illegal clearing', 'Protection of 250,000 hectares of threatened forest']
    }
  ];

  return (
    <section id="applications" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Industry Applications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Satellite Imagery In Action</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Our calibrated satellite imagery systems transform agriculture and land management with actionable intelligence.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {applications.map((app, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-800/80 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                {React.cloneElement(app.icon, { className: 'h-6 w-6 text-emerald-400' })}
              </div>
              <h3 className="text-xl font-bold mb-3">{app.title}</h3>
              <p className="text-gray-300 mb-4">{app.description}</p>
              <ul className="space-y-2">
                {app.features.map((feature, fidx) => (
                  <li key={fidx} className="text-sm text-gray-400 flex items-center">
                    <span className="mr-2 text-emerald-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Case Studies</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                className={`px-5 py-3 text-left rounded-lg transition-colors ${
                  activeCase === index
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
                onClick={() => setActiveCase(index)}
              >
                <h4 className="font-medium truncate">{study.title}</h4>
              </button>
            ))}
          </div>

          <div className="bg-slate-800 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={caseStudies[activeCase].image} 
                  alt={caseStudies[activeCase].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{caseStudies[activeCase].title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium uppercase text-gray-400 mb-2">The Challenge</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium uppercase text-gray-400 mb-2">Our Solution</h4>
                  <p className="text-gray-300">{caseStudies[activeCase].solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium uppercase text-gray-400 mb-2">Results</h4>
                  <ul className="space-y-2">
                    {caseStudies[activeCase].results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium">
                  Read Full Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;