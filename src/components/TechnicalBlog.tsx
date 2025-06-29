import React from 'react';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

const TechnicalBlog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Advances in Atmospheric Correction for Agricultural Remote Sensing',
      excerpt: 'Examining the latest methods for removing atmospheric interference from satellite imagery to improve vegetation analysis accuracy.',
      author: 'Dr. Sarah Chen',
      date: 'June 15, 2025',
      category: 'Research',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg'
    },
    {
      id: 2,
      title: 'Calibration Protocols for Multi-Sensor Time Series Analysis',
      excerpt: 'How to ensure consistent measurements when combining data from multiple satellite platforms for agricultural monitoring.',
      author: 'James Wilson',
      date: 'May 28, 2025',
      category: 'Technical',
      image: 'https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg'
    },
    {
      id: 3,
      title: 'Machine Learning Applications in Crop Type Classification',
      excerpt: 'Exploring how deep learning algorithms can improve the accuracy of crop identification from satellite imagery.',
      author: 'Dr. Alex Patel',
      date: 'May 12, 2025',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/459718/pexels-photo-459718.jpeg'
    }
  ];

  return (
    <section id="resources" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Knowledge Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Technical Resources</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Stay up-to-date with the latest advancements in satellite imagery technology and agricultural remote sensing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-900/20 hover:translate-y-[-4px] transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="h-4 w-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <a href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors">
                    Read More
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium">
            View All Resources
          </button>
        </div>

        {/* Resources Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Technical Whitepapers', 'Case Studies', 'Webinars', 'Research Papers'].map((resource, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
              <h3 className="text-lg font-bold mb-2">{resource}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {index === 0 && 'In-depth technical documentation on our satellite processing methods.'}
                {index === 1 && 'Real-world examples of our solutions delivering value.'}
                {index === 2 && 'Educational content featuring industry experts and our technical team.'}
                {index === 3 && 'Peer-reviewed publications about our calibration techniques.'}
              </p>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1">
                Explore
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalBlog;