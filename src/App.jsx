import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <Hero />
        <ProductSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
