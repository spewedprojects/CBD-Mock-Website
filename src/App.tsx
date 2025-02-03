import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import PriceCalculator from './components/PriceCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <CaseStudies />
        <Pricing />
        <PriceCalculator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;