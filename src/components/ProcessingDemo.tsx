import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Info } from 'lucide-react';

const ProcessingDemo: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const stages = [
    {
      name: 'Raw Satellite Data',
      image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg',
      description: 'Level-0 data directly from the satellite sensor, containing raw digital numbers (DN) and noise.'
    },
    {
      name: 'Radiometric Calibration',
      image: 'https://images.pexels.com/photos/87611/sun-solar-flare-space-astronomy-87611.jpeg',
      description: 'Converting raw DN to physical units of radiance, accounting for sensor characteristics.'
    },
    {
      name: 'Atmospheric Correction',
      image: 'https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg',
      description: 'Removing atmospheric effects to obtain surface reflectance values.'
    },
    {
      name: 'NDVI Calculation',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      description: 'Computing vegetation indices to highlight plant health and density.'
    },
    {
      name: 'Enhanced Processing',
      image: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg',
      description: 'Applying advanced algorithms for improved vegetation analysis.'
    },
    {
      name: 'Final Product',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      description: 'Fully processed imagery ready for agricultural applications.'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStage(0);
    setIsPlaying(false);
  };

  const handleStageClick = (index: number) => {
    setCurrentStage(index);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Processing Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Watch the Transformation</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            See how we process satellite imagery from raw data to actionable agricultural intelligence.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Display */}
          <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden mb-8">
            <img
              src={stages[currentStage].image}
              alt={stages[currentStage].name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Stage Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{stages[currentStage].name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 bg-emerald-600 rounded-full" style={{
                      width: `${((currentStage + 1) / stages.length) * 100}%`
                    }} />
                    <span className="text-sm text-gray-300">
                      Stage {currentStage + 1} of {stages.length}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
                >
                  <Info className="h-5 w-5" />
                </button>
              </div>
              
              {/* Stage Description */}
              <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                showInfo ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-300">{stages[currentStage].description}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={handlePlayPause}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium flex items-center gap-2"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-5 w-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  Play Demo
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors font-medium flex items-center gap-2"
            >
              <RotateCcw className="h-5 w-5" />
              Reset
            </button>
          </div>

          {/* Stage Navigation */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {stages.map((stage, index) => (
              <button
                key={index}
                onClick={() => handleStageClick(index)}
                className={`relative rounded-lg overflow-hidden aspect-video ${
                  currentStage === index ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                <img
                  src={stage.image}
                  alt={stage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                  <span className="text-sm font-medium">{index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingDemo;