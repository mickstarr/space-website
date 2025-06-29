import React, { useState, useEffect } from 'react';
import { Satellite, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
            <Satellite className="h-8 w-8 text-emerald-500" />
            <span>SpremtLab</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Products', 'Technology', 'Applications', 'Resources', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-200 hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium">
              Request Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mt-4 pb-4 space-y-3 md:hidden">
            {['Products', 'Technology', 'Applications', 'Resources', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-medium text-gray-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md transition-colors font-medium">
              Request Demo
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;