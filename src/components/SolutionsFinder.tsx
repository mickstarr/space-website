import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const SolutionsFinder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    useCase: '',
    dataNeeds: '',
    coverage: '',
    frequency: ''
  });

  const useCases = [
    'Crop Monitoring', 
    'Forestry', 
    'Water Management', 
    'Disaster Response', 
    'Urban Planning', 
    'Research'
  ];

  const dataNeeds = [
    'Vegetation Indices',
    'Surface Reflectance',
    'Land Classification',
    'Change Detection',
    'Custom Analytics'
  ];

  const coverageOptions = [
    'Small Area (<100 km²)',
    'Regional (100-10,000 km²)',
    'National',
    'Continental/Global'
  ];

  const frequencyOptions = [
    'Daily',
    'Weekly',
    'Bi-weekly',
    'Monthly',
    'Quarterly'
  ];

  const handleSelect = (category, value) => {
    setSelections({
      ...selections,
      [category]: value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetFinder = () => {
    setStep(1);
    setSelections({
      useCase: '',
      dataNeeds: '',
      coverage: '',
      frequency: ''
    });
  };

  const renderRecommendation = () => {
    let recommendation = '';
    let description = '';
    let features = [];

    // Logic to determine recommendation based on selections
    if (selections.useCase === 'Crop Monitoring' || selections.useCase === 'Forestry') {
      if (selections.frequency === 'Daily' || selections.frequency === 'Weekly') {
        recommendation = 'AgriSat Pro';
        description = 'Our premium solution for high-frequency agricultural monitoring with advanced analytics.';
        features = [
          'Daily or weekly imagery with < 1m resolution',
          'Full suite of vegetation indices',
          'Automated alerts and reporting',
          'Crop-specific models and analytics',
          'Cloud-based processing and storage'
        ];
      } else {
        recommendation = 'AgriSat Standard';
        description = 'Cost-effective solution for regular crop and forest monitoring.';
        features = [
          'Bi-weekly or monthly imagery with 1-3m resolution',
          'Standard vegetation indices',
          'Basic change detection',
          'Web-based visualization platform',
          'Data export capabilities'
        ];
      }
    } else if (selections.useCase === 'Water Management') {
      recommendation = 'HydroView';
      description = 'Specialized solution for water resource monitoring and management.';
      features = [
        'Multi-spectral water quality assessment',
        'Soil moisture estimation',
        'Irrigation management tools',
        'Drainage analysis',
        'Water stress detection'
      ];
    } else if (selections.useCase === 'Disaster Response') {
      recommendation = 'EmergeSat';
      description = 'Rapid response satellite imagery for disaster management and assessment.';
      features = [
        'Priority tasking for urgent acquisitions',
        'Rapid processing and delivery',
        'Change detection for damage assessment',
        'Integration with emergency management systems',
        'Historical baseline comparisons'
      ];
    } else {
      recommendation = 'CustomEye';
      description = 'Tailored solution based on your specific requirements and objectives.';
      features = [
        'Custom sensor configuration',
        'Specialized processing algorithms',
        'Bespoke analytics development',
        'Integration with existing systems',
        'Dedicated support team'
      ];
    }

    return { recommendation, description, features };
  };

  const { recommendation, description, features } = renderRecommendation();

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Find Your Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Solutions Finder</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Answer a few questions to find the satellite imagery solution that best fits your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden shadow-lg">
          {/* Progress Steps */}
          <div className="bg-slate-800 px-6 py-4">
            <div className="flex justify-between">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      s < step ? 'bg-emerald-500 text-white' : 
                      s === step ? 'bg-emerald-600 text-white border-2 border-emerald-400' : 
                      'bg-slate-700 text-gray-400'
                    }`}
                  >
                    {s < step ? <Check className="h-5 w-5" /> : s}
                  </div>
                  <span className={`text-xs mt-1 ${s <= step ? 'text-gray-300' : 'text-gray-500'}`}>
                    {s === 1 ? 'Use Case' : 
                     s === 2 ? 'Data Needs' : 
                     s === 3 ? 'Coverage' : 
                     s === 4 ? 'Frequency' : 'Results'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 h-1 bg-slate-700">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300" 
                style={{ width: `${(step - 1) * 25}%` }}
              ></div>
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Use Case */}
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold mb-4">What is your primary use case?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {useCases.map((useCase) => (
                    <button
                      key={useCase}
                      className={`p-4 rounded-lg text-center transition-colors ${
                        selections.useCase === useCase
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
                      }`}
                      onClick={() => handleSelect('useCase', useCase)}
                    >
                      {useCase}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Data Needs */}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold mb-4">What type of data do you need?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {dataNeeds.map((data) => (
                    <button
                      key={data}
                      className={`p-4 rounded-lg text-center transition-colors ${
                        selections.dataNeeds === data
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
                      }`}
                      onClick={() => handleSelect('dataNeeds', data)}
                    >
                      {data}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Coverage */}
            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold mb-4">What area do you need to cover?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {coverageOptions.map((option) => (
                    <button
                      key={option}
                      className={`p-4 rounded-lg text-center transition-colors ${
                        selections.coverage === option
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
                      }`}
                      onClick={() => handleSelect('coverage', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Frequency */}
            {step === 4 && (
              <div>
                <h3 className="text-xl font-bold mb-4">How often do you need new imagery?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {frequencyOptions.map((option) => (
                    <button
                      key={option}
                      className={`p-4 rounded-lg text-center transition-colors ${
                        selections.frequency === option
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
                      }`}
                      onClick={() => handleSelect('frequency', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Results */}
            {step === 5 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Your Recommended Solution</h3>
                
                <div className="bg-slate-800 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-400">{recommendation}</h4>
                      <p className="text-gray-300 mt-2">{description}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-emerald-700/50 text-emerald-300 text-sm font-medium rounded-full">
                      Recommended
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-medium mb-3">Key Features:</h5>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium flex items-center gap-2">
                      Request Quote
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 rounded-md transition-colors font-medium">
                      Product Details
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={resetFinder}
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2 mx-auto"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            {step < 5 && (
              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className={`px-5 py-2 rounded-md transition-colors font-medium ${
                    step === 1
                      ? 'invisible'
                      : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
                  }`}
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className={`px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium ${
                    (step === 1 && !selections.useCase) ||
                    (step === 2 && !selections.dataNeeds) ||
                    (step === 3 && !selections.coverage) ||
                    (step === 4 && !selections.frequency)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  disabled={
                    (step === 1 && !selections.useCase) ||
                    (step === 2 && !selections.dataNeeds) ||
                    (step === 3 && !selections.coverage) ||
                    (step === 4 && !selections.frequency)
                  }
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsFinder;