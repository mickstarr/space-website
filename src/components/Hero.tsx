import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg)',
        backgroundPosition: 'center',
        filter: 'brightness(0.4)'
      }} />

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <span className="inline-block px-3 py-1 bg-emerald-700/80 text-emerald-100 text-sm font-medium rounded-full mb-4">
              Advanced Earth Observation Systems
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Satellite Data Into <span className="text-emerald-400">Agricultural Intelligence</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              End-to-end satellite imagery solutions—from raw data capture to bottom-of-atmosphere calibrated images—optimized for precision agriculture and vegetation monitoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-all font-medium flex items-center gap-2 group">
                Explore Solutions
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 rounded-md transition-all font-medium">
                Technical Specifications
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-300 mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;