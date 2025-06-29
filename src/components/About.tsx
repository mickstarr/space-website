import React from 'react';
import { Award, Users, Target, Rocket, Globe2, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Satellites Launched', value: '25' },
    { label: 'Countries Served', value: '40+' },
    { label: 'Data Processing (PB/day)', value: '2.5' }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-emerald-400" />,
      title: 'Mission',
      description: 'To revolutionize agriculture through precise, actionable satellite imagery intelligence.'
    },
    {
      icon: <Globe2 className="h-6 w-6 text-emerald-400" />,
      title: 'Vision',
      description: 'Creating a world where data-driven decisions optimize agricultural productivity and sustainability.'
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: 'Values',
      description: 'Commitment to excellence, environmental stewardship, and technological innovation.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'EarthVision established with a focus on agricultural remote sensing.'
    },
    {
      year: '2013',
      title: 'First Satellite Launch',
      description: 'Successfully deployed our first agricultural monitoring satellite.'
    },
    {
      year: '2016',
      title: 'Processing Innovation',
      description: 'Developed proprietary atmospheric correction algorithms.'
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia to serve international markets.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched machine learning-powered crop analysis platform.'
    },
    {
      year: '2024',
      title: 'Constellation Complete',
      description: 'Completed deployment of 25-satellite monitoring network.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-medium rounded-full mb-4">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pioneering Space-Based Agricultural Intelligence</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Since 2010, EarthVision has been at the forefront of satellite technology, transforming how we monitor and understand Earth's agricultural landscapes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-900/50"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-slate-800 rounded-xl p-6">
                      <div className="text-emerald-400 font-bold mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-bold mb-2">{milestone.title}</h4>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-10">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Chief Executive Officer',
                image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Chief Technology Officer',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
              },
              {
                name: 'Dr. Emily Thompson',
                role: 'Chief Scientific Officer',
                image: 'https://images.pexels.com/photos/3796024/pexels-photo-3796024.jpeg'
              }
            ].map((leader, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                  <p className="text-emerald-400">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-slate-800 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-emerald-400" />
            <h3 className="text-2xl font-bold">Awards & Recognition</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              '2024 Space Tech Innovation Award',
              'Global Agricultural Impact Prize 2023',
              'Environmental Stewardship Excellence 2022'
            ].map((award, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-gray-300">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;