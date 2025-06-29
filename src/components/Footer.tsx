import React from 'react';
import { Satellite, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-6">
              <Satellite className="h-8 w-8 text-emerald-500" />
              <span>EarthVision</span>
            </div>
            <p className="text-gray-400 mb-6">
              Advanced satellite imagery systems for precision agriculture and environmental monitoring.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Products', 'Solutions', 'Technology', 'Applications', 'Resources', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'Case Studies', 'Whitepapers', 'Webinars', 'FAQs', 'API Documentation', 'Support Center'].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                <span className="text-gray-400">contact@earthvision.tech</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Satellite Drive<br />
                  Mountain View, CA 94043<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EarthVision Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;