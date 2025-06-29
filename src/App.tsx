import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import TechnicalSpecs from './components/TechnicalSpecs';
import Applications from './components/Applications';
import SolutionsFinder from './components/SolutionsFinder';
import TechnicalBlog from './components/TechnicalBlog';
import About from './components/About';
import ImagePortfolio from './components/ImagePortfolio';
import ProcessingDemo from './components/ProcessingDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <TechnicalSpecs />
        <Applications />
        <ImagePortfolio />
        <ProcessingDemo />
        <SolutionsFinder />
        <TechnicalBlog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;