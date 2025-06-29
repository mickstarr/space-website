import React from 'react';
import { Camera, Rocket, BarChart3, LayoutGrid } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Imaging Payloads',
      description: 'High-resolution multispectral imaging systems designed for agricultural monitoring from space.',
      icon: <Camera className="h-7 w-7 text-emerald-500" />,
      features: [
        'Multiple spectral bands for vegetation analysis',
        '0.5m spatial resolution capability',
        'Advanced sensor stabilization',
        'Optimized for small satellite platforms'
      ],
      image: 'https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg'
    },
    {
      id: 2,
      title: 'Processing Systems',
      description: 'Powerful software solutions that transform raw satellite data into actionable insights.',
      icon: <BarChart3 className="h-7 w-7 text-emerald-500" />,
      features: [
        'Radiometric calibration algorithms',
        'Atmospheric correction models',
        'Cloud masking and filtering',
        'Time-series analysis capabilities'
      ],
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg'
    },
    {
      id: 3,
      title: 'Deployment Services',
      description: 'End-to-end solutions for getting your imaging systems into orbit and operational.',
      icon: <Rocket className="h-7 w-7 text-emerald-500" />,
      features: [
        'Launch coordination and integration',
        'Space vehicle testing and certification',
        'Regulatory compliance assistance',
        'Mission operations planning'
      ],
      image: 'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg'
    },
    {
      id: 4,
      title: 'Data Management',
      description: 'Secure, scalable platforms for storing, analyzing, and distributing earth observation data.',
      icon: <LayoutGrid className="h-7 w-7 text-emerald-500" />,
      features: [
        'Cloud-optimized data architecture',
        'Real-time data access APIs',
        'Automated quality assurance',
        'Scalable storage solutions'
      ],
      image: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg'
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Complete Satellite Imaging Systems</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            From raw data capture to bottom-of-atmosphere calibrated imagery, our end-to-end solutions 
            deliver actionable insights for agriculture and vegetation monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-900/20 
                         hover:translate-y-[-4px] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {product.icon}
                  <h3 className="text-xl font-bold">{product.title}</h3>
                </div>
                <p className="text-gray-300 mb-5">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-2 bg-slate-700 hover:bg-emerald-700 rounded-md transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;