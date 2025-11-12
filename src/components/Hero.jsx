import React from 'react';
import HeroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        Tech So Good, It's <span className="text-primary">Bananas.</span>
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md mx-auto">
        Experience the perfect blend of nature and innovation. Our devices are designed to be intuitive, powerful, and ridiculously appealing.
      </p>
      <button className="mt-8 bg-primary text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity">
        Shop The Collection
      </button>
      <div className="mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-10"></div>
        <img alt="A person wearing a banana-shaped smartwatch" className="w-full h-auto rounded-lg object-cover" src={HeroImage} />
      </div>
    </section>
  );
};

export default Hero;
